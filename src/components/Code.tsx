import React from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const Code: React.FC<CodeProps> = ({ children, lang, width, textSize, height }) => {
  return (
    <code
      dangerouslySetInnerHTML={{
        __html: hljs.highlight(children, {language: lang}).value,
      }}
      className="slide-code"
      style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "auto", fontSize: textSize ? `${textSize}px` : "16px" }}
    />
  );
}

export default Code;
