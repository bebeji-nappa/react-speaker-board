import * as React from "react";
import "./types"
import { Control } from "./Control";

const modeValue = [
  "slide",
  "inlineSlide"
]

const themeValue = [
  "default",
  "sunset",
  "malinka",
  "moon",
  "darkblue",
  "sky",
  "green",
  "dark"
]

const alignValue = [
  "left",
  "center",
  "right"
]

const sizeValue = [
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge",
  "xxxlarge",
]

export const ReactSpeakerBoard:React.VFC<SpeakerBoardProps> = ({ mode = "slide", slide, controlTheme = "#71a3e3", controlBar = "none", width = "80vw", height = "80vh" }) => {
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

export const Content:React.VFC<ContentProps> = ({children, align = "left", size = "medium"}) => {
  return (
    <div className={`Content${alignValue.includes(align) && align ? ` ${align}` : ""}${sizeValue.includes(size) && size ? ` size-${size}` : ""}`}>{children}</div>
  )
}

export const Layout: React.VFC<LayoutProps> = ({ children, layout }) => {
  return (
    <div className={`board ${layout}`}>
      {children}
    </div>
  )
}

export const MainTitle:React.VFC<MainTitleProps> = ({children, textAlign = "left", size = "xxxlarge"}) => {
  return (
    <h1 
      className={
        `SectionTitle${alignValue.includes(textAlign) && textAlign ? ` ${textAlign}` : ""}${sizeValue.includes(size) && size ? ` size-${size}` : ""}`
      }
    >
      {children}
    </h1>
  )
}

export const SectionTitle:React.VFC<SectionTitleProps> = ({children, textAlign = "left", size = "xlarge"}) => {
  return (
    <h2 
      className={
        `SectionTitle${alignValue.includes(textAlign) && textAlign ? ` ${textAlign}` : ""}${sizeValue.includes(size) && size ? ` size-${size}` : ""}`
      }
    >
      {children}
    </h2>
  )
}

export const Spacer: React.VFC = () => {
  return (
    <div className="spacer"></div>
  )
}

export const Theme:React.VFC<ThemeProps> = ({themeColor = "default", textColor = "black", children }) => {
  return (
    <div className={`theme-wrap${themeValue.includes(themeColor) ? ` ${themeColor}-theme` : "default"}`} style={{ color: textColor }}>
      {children}
    </div>
  )
}
