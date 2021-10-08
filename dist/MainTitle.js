import React from "react";
import "../styles/MainTitle.css";
export const MainTitle = ({ children, textAlign = "left", size = "xxxlarge" }) => {
    return (React.createElement("h1", { className: `MainTitle${textAlign && ` ${textAlign}`}${size && ` size-${size}`}` }, children));
};
//# sourceMappingURL=MainTitle.js.map