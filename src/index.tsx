import React from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import ReactSpeakerBoard from "./ReactSpeakerBoard";
import Title from "./Title";
import Text from "./Text";
import Content from "./Content";
import Spacer from "./Spacer";
import Layout from "./Layout";
import Theme from "./Theme";
import Square from "./Square";
import Circle from "./Circle";
import TriangleUp from "./TriangleUp";
import TriangleRight from "./TriangleRight";
import TriangleDown from "./TriangleDown";
import TriangleLeft from "./TriangleLeft";
import AllSlidePdf from "./AllSlidePdf";

export const useReactSpeakerBoard = () => {
  return {
    ReactSpeakerBoard,
    Title,
    Content,
    Spacer,
    Layout,
    Theme,
    Square,
    Circle,
    TriangleUp,
    TriangleRight,
    TriangleDown,
    TriangleLeft,
    Text,
    AllSlidePdf,
  }
};

export const useSlideOutputFiles = () => {
  const download = async (slide: (() => JSX.Element)[], fileName?: string) => {
    const slideLength = slide.length;
    let pdf = new jsPDF({
      orientation: 'l',
      unit: 'px',
      format: 'a4',
    });
    for (let i = 1; i <= slideLength; i++) {
      console.log(`slide-${i}`);
      const target = document.getElementById(`slide-${i}`);
      if (target === null) return;

      const canvas = await html2canvas(target)
      const imgData = canvas.toDataURL('image/svg', 1.0);
      pdf.addImage(imgData, 'SVG', 0, 60, canvas.width / 6, canvas.height / 6, `slide-${i}`);
      if (i !== slideLength) pdf.addPage();
    }
    pdf.save(fileName ?? "reactspeakerboard.pdf");
  };
  return { download };
}
