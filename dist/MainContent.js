import React from "react";
import "../styles/MainContent.css";
export const MainContent = ({ children, textAlign = "left", size = "medium" }) => {
    return (React.createElement("div", { className: `MainContent${textAlign && ` ${textAlign}`}${size && ` size-${size}`}` }, children));
};
//# sourceMappingURL=MainContent.js.map