import React, { useEffect, useCallback } from "react";
import { useSlideOutputFiles } from "./index";

type AllSlideProps = {
  slide: (() => JSX.Element)[];
};

const AllSlidePdf: React.FC<AllSlideProps> = ({ slide }) => {
  const { download } = useSlideOutputFiles();

  const downloadPdf = useCallback(() => {
    download(slide, "reactspeakerboard_test.pdf");
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "auto", overflow: "scroll", gap: "20px" }}>
      <button onClick={downloadPdf} style={{ margin: "20px 0", cursor: "pointer", fontSize: "16px" }}>
        PDF Download
      </button>
      {slide.map((Slide, index) => {
        return (
          <div id={`slide-${index+1}`} key={index} style={{ width: "100vw", height: "100vh", aspectRatio: "16 / 9" }}>
            <Slide />
          </div>
        );
      })}
    </div>
  )
};

export default AllSlidePdf;
