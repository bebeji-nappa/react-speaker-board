import React from "react";
import "./types";
import "../styles/Theme.css";
const themeValue = [
    "default",
    "sunset",
    "malinka",
    "moon",
    "darkblue",
    "sky",
    "green",
    "dark"
];
export const Theme = ({ themeColor = "default", textColor = "black", children }) => {
    return (React.createElement("div", { className: `theme-wrap${themeValue.includes(themeColor) ? ` ${themeColor}-theme` : "default"}`, style: { color: textColor } }, children));
};
//# sourceMappingURL=Theme.js.map