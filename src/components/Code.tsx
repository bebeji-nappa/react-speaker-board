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
      style={{ width: width ? `${width}` : "auto", height: height ? `${height}` : "auto", fontSize: textSize ? `${textSize}` : "16px", padding: `${padding ?? "10px"}` }}
    />
  );
}

export default Code;
