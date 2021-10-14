import * as React from "react";
import "./types";

const themeValue = ["default", "sunset", "malinka", "moon", "darkblue", "sky", "green", "dark"];

const Theme: React.VFC<ThemeProps> = ({
  themeColor = "default",
  textColor = "black",
  children,
}) => {
  return (
    <div
      className={`theme-wrap${
        themeValue.includes(themeColor) ? ` ${themeColor}-theme` : "default"
      }`}
      style={{ color: textColor }}
    >
      {children}
    </div>
  );
};

export default Theme;
