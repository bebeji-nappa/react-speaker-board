import React, { useState, useEffect } from "react";
import "./types";
import "../styles/style.css";

const modeValue = ["slide", "inlineSlide"];

const ReactSpeakerBoard: React.FC<SpeakerBoardProps> = ({
  mode = "slide",
  slide,
  controlTheme = "#71a3e3",
  controlBar = "none",
  width = "80vw",
  height = "80vh",
}) => {
  const [view, setView] = useState<JSX.Element>(slide[0]);
  const [index, setIndex] = useState<number>(0);
  const max = slide.length - 1;

  const NextSlide = () => {
    if (index !== max) {
      const num = Number(index);
      setIndex(Number(num + 1));
    }
  };

  const ProvSlide = () => {
    if (index !== 0) {
      const num = Number(index);
      setIndex(Number(num - 1));
    }
  };

  useEffect(() => {
    setView(slide[Number(index)]);
  }, [index]);

  return (
    <>
      {modeValue.includes(mode) && mode === "inlineSlide" ? (
        <div className={mode} style={{ width: `${width}`, height: `${height}` }}>
          {view}
          <div className={`Control-wrap background-${controlBar}`}>
            <div className="Control">
              <button onClick={() => ProvSlide()}>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 291 338"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="slide-button"
                >
                  <path d="M0 169L291 0.991089V337.009L0 169Z" fill={controlTheme} />
                </svg>
              </button>
              <button onClick={() => NextSlide()}>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 291 338"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="slide-button"
                >
                  <path d="M291 169L0 337.009V0.991074L291 169Z" fill={controlTheme} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={mode}>
          {view}
          <div className={`Control-wrap background-${controlBar}`}>
            <div className="Control">
              <button onClick={() => ProvSlide()}>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 291 338"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="slide-button"
                >
                  <path d="M0 169L291 0.991089V337.009L0 169Z" fill={controlTheme} />
                </svg>
              </button>
              <button onClick={() => NextSlide()}>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 291 338"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="slide-button"
                >
                  <path d="M291 169L0 337.009V0.991074L291 169Z" fill={controlTheme} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReactSpeakerBoard;
