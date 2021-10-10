import React from "react";

export const SectionTitle:React.VFC<SectionTitleProps> = ({children, textAlign = "left", size = "xlarge"}) => {
  return (
    <h2 className={`SectionTitle${textAlign && ` ${textAlign}`}${size && ` size-${size}`}`}>{children}</h2>
  )
}
