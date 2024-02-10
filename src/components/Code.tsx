import React from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const Code: React.FC<CodeProps> = ({ children, lang, width, textSize, height, padding }) => {
  return (
    <code
      dangerouslySetInnerHTML={{
        __html: hljs.highlight(children, {language: lang ?? "text"}).value,
      }}
      className="slide-code"
      style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "auto", fontSize: textSize ? `${textSize}px` : "16px", padding: `${padding ?? "10px"}` }}
    />
  );
}

export default Code;
