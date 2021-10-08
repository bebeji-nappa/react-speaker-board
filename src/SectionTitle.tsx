import React from "react";
import "../styles/SectionTitle.css"

export const SectionTitle:React.VFC<SectionTitleProps> = ({children, textAlign = "left"}) => {
  return (
    <h2 className={`SectionTitle${textAlign && ` ${textAlign}`}`}>{children}</h2>
  )
}
