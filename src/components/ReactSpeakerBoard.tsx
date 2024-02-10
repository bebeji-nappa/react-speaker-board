import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../types";
import useEvent from "@react-hook/event";

const ReactSpeakerBoard: React.FC<SpeakerBoardProps> = ({
  mode = "slide",
  slide,
  controlBgColor = "none",
  controlArrowColor = "#71a3e3",
  controlBar = "all",
  width = "100vw",
  height = "100vh",
}) => {
  const [index, setIndex] = useState<number>(0);
  const view = useMemo(() => slide[index], [index, slide]);
  const max = slide.length - 1;

  const NextSlide = useCallback(() => {
    if (index !== max) {
      const num = Number(index);
      setIndex(num + 1);
    }
  }, [index, max, slide]);

  const ProvSlide = useCallback(() => {
    if (index !== 0) {
      const num = Number(index);
      setIndex(num - 1);
    }
  }, [index, slide]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "Enter") {
      NextSlide();
    }
    if (e.key === "ArrowLeft" || e.key === "Backspace") {
      ProvSlide();
    }
  }, [NextSlide, ProvSlide]);

  if (typeof window !== 'undefined') {
    useEvent(window, "keydown", handleKeyDown);
  }

  return (
    <>
      {mode === "inlineSlide" ? (
        <div className={mode} style={{ width: `${width}`, height: `${height}` }}>
          <>{view()}</>
          {controlBar !== "keyboard" && (
            <div className={`Control-wrap Control-background-${controlBgColor}`}>
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
                    <path d="M0 169L291 0.991089V337.009L0 169Z" fill={controlArrowColor} />
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
                    <path d="M291 169L0 337.009V0.991074L291 169Z" fill={controlArrowColor} />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={mode}>
          <>{view()}</>
          {controlBar !== "keyboard" && (
            <div className={`Control-wrap background-${controlBgColor}`}>
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
                    <path d="M0 169L291 0.991089V337.009L0 169Z" fill={controlArrowColor} />
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
                    <path d="M291 169L0 337.009V0.991074L291 169Z" fill={controlArrowColor} />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ReactSpeakerBoard;
