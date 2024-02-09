import React, { useCallback } from "react";
import { useReactSpeakerBoardPdf } from "../hooks/useReactSpeakerBoardPdf";
import "../types";
import "../../styles/ReactSpeakerBoard.css";

type AllSlideProps = {
  slide: (() => JSX.Element)[];
};

const AllSlidePdf: React.FC<AllSlideProps> = ({ slide }) => {
  const { downloadPdf } = useReactSpeakerBoardPdf();

  const onClick = useCallback(() => {
    downloadPdf(slide, "reactspeakerboard_test.pdf");
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "auto", overflow: "scroll", gap: "20px" }}>
      <button onClick={onClick} style={{ margin: "20px 0", cursor: "pointer", fontSize: "1rem" }}>
        PDF Download
      </button>
      {slide.map((Slide, index) => {
        return (
          <div id={`slide-${index+1}`} key={index} style={{ width: "100%", height: "100%", aspectRatio: "16 / 9" }}>
            <Slide />
          </div>
        );
      })}
    </div>
  )
};

export default AllSlidePdf;
