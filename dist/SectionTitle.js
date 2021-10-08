import React from "react";
import "../styles/SectionTitle.css";
export const SectionTitle = ({ children, textAlign = "left", size = "xlarge" }) => {
    return (React.createElement("h2", { className: `SectionTitle${textAlign && ` ${textAlign}`}${size && ` size-${size}`}` }, children));
};
//# sourceMappingURL=SectionTitle.js.map