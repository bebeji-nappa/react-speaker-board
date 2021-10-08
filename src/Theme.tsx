import React from "react";
import "./types"
import "../styles/Theme.css"

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

export const Theme:React.VFC<ThemeProps> = ({themeColor = "default", textColor = "black", children }) => {
  return (
    <div className={`theme-wrap${themeValue.includes(themeColor) ? ` ${themeColor}-theme` : "default"}`} style={{ color: textColor }}>
      {children}
    </div>
  )
}
