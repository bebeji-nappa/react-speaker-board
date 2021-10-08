import React from "react";
import "../styles/SectionTitle.css";
export const SectionTitle = ({ children, textAlign = "left" }) => {
    return (React.createElement("h2", { className: `SectionTitle${textAlign && ` ${textAlign}`}` }, children));
};
//# sourceMappingURL=SectionTitle.js.map