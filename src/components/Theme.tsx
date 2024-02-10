import React from "react";
import "../types";

const Theme: React.FC<ThemeProps> = ({
  themeColor = "default",
  textColor = "black",
  customThemeColor,
  children,
}) => {
  return (
    <div
      className={`theme-wrap ${themeColor}-theme`}
      style={{ color: textColor, backgroundColor: customThemeColor }}
    >
      {children}
    </div>
  );
};

export default Theme;
