import React from "react";
import "../styles/MainText.css";
export const MainText = ({ children, textAlign = "left", size = "medium" }) => {
    return (React.createElement("div", { className: `MainText${textAlign && ` ${textAlign}`}${size && ` size-${size}`}` }, children));
};
//# sourceMappingURL=MainText.js.map