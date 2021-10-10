import * as React from "react";
import "./types"
import { Control } from "./Control";

const modeValue = [
  "slide",
  "inlineSlide"
]

const ReactSpeakerBoard:React.VFC<SpeakerBoardProps> = ({ mode = "slide", slide, controlTheme = "#71a3e3", controlBar = "none", width = "80vw", height = "80vh" }) => {
  const [view, setView] = React.useState<JSX.Element>(slide[0]);
  const [index, setIndex] = React.useState<Number>(0);
  const max = slide.length - 1;

  const NextSlide = () => {
    if (index !== max) {
      let num = Number(index)
      setIndex(Number(num + 1))
    }
  }
  
  const ProvSlide = () => {
    if (index !== 0) {
      let num = Number(index)
      setIndex(Number(num - 1))
    }
  }

  React.useEffect(() => {
    setView(slide[Number(index)])
  }, [index])

  return (
    <>
     {modeValue.includes(mode) && 
      mode === "inlineSlide" ? 
      <div className={mode} style={{ width: `${width}`, height: `${height}` }}>
        {view}
        <Control next={() => NextSlide()} prov={() => ProvSlide()} color={controlTheme} controlBar={controlBar} />
      </div> :
      <div className={mode}>
        {view}
        <Control next={() => NextSlide()} prov={() => ProvSlide()} color={controlTheme} controlBar={controlBar} />
      </div>
     }
    </>
  )
}

export default ReactSpeakerBoard