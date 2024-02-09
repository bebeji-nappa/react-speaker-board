import React from "react";
import "../types";

const themeValue = ["default", "sunset", "malinka", "moon", "darkblue", "sky", "green", "dark"];

const Theme: React.FC<ThemeProps> = ({
  themeColor = "default",
  textColor = "black",
  customThemeColor,
  children,
}) => {
  return (
    <div
      className={`theme-wrap${
        themeValue.includes(themeColor) ? ` ${themeColor}-theme` : "default"
      }`}
      style={{ color: textColor, backgroundColor: customThemeColor }}
    >
      {children}
    </div>
  );
};

export default Theme;
