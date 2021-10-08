import React from "react";
import "../styles/MainTitle.css";
export const MainTitle = ({ children, textAlign = "left" }) => {
    return (React.createElement("h1", { className: `MainTitle${textAlign && ` ${textAlign}`}` }, children));
};
//# sourceMappingURL=MainTitle.js.map