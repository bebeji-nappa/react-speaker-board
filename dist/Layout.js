import React from "react";
import "../styles/Layout.css";
export const Layout = ({ children, layout }) => {
    return (React.createElement("div", { className: `board ${layout}` }, children));
};
//# sourceMappingURL=Layout.js.map