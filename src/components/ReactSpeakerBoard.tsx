import React, { useState, useCallback, useMemo, useRef } from "react";
import "../types";
import useEvent from "@react-hook/event";
import { Virtuoso } from "react-virtuoso";

const ReactSpeakerBoard: React.FC<SpeakerBoardProps> = ({
  mode = "fullScreen",
  slide,
  controlBgColor = "none",
  controlArrowColor = "#71a3e3",
  width = "100vw",
  height = "100vh",
}) => {
  const [index, setIndex] = useState<number>(0);
  const view = useMemo(() => slide[index], [index, slide]);
  const max = slide.length - 1;
  const virtuoso = useRef(null);

  const NextSlide = useCallback(() => {
    if (index !== max) {
      setIndex(num => num + 1);
      if (mode === "fullScreenScroll") {
        virtuoso.current.scrollToIndex({ index: index + 1, behavior: "smooth" });
      }
    }
  }, [index, max, slide]);

  const PrevSlide = useCallback(() => {
    if (index !== 0) {
      setIndex(num => num - 1);
      if (mode === "fullScreenScroll") {
        virtuoso.current.scrollToIndex({ index: index - 1, behavior: "smooth" });
      }
    }
  }, [index, slide]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "Enter") {
      NextSlide();
    }
    if (e.key === "ArrowLeft" || e.key === "Backspace") {
      PrevSlide();
    }
    if (e.key === "Escape") {
      setIndex(0);
    }
  }, [NextSlide, PrevSlide]);

  if (typeof window !== 'undefined') {
    useEvent(window, "keydown", handleKeyDown);
  }

  return (
    <>
      {mode === "inlineSlide" ? (
        <div className={mode} style={{ width: `${width}`, height: `${height}` }}>
          <div id={`slide-${index+1}`} style={{ width: `${width}`, height: `${height}` }}>{view()}</div>
          <div className={`Control-wrap Control-background-${controlBgColor}`}>
            <div className="Control">
              <button onClick={() => PrevSlide()}>
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
        </div>
      ) : mode === "fullScreen" ? (
        <div className={mode}>
          <>{view()}</>
        </div>
      ) : (
        <div className={mode}>
          <Virtuoso
            ref={virtuoso}
            totalCount={slide.length}
            style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
            data={slide}
            itemContent={(index, slide) => (
              <div id={`slide-${index+1}`} style={{ width: "100vw", height: "100vh" }}>
                {slide()}
              </div>
            )}
          />
        </div>
      )}
    </>
  );
};

export default ReactSpeakerBoard;
