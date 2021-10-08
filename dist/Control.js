import React from "react";
import "../styles/Control.css";
export const Control = ({ next, prov, color, controlBar }) => {
    return (React.createElement("div", { className: `Control-wrap background-${controlBar}` },
        React.createElement("div", { className: "Control" },
            React.createElement("button", { onClick: prov },
                React.createElement("svg", { width: "25px", height: "25px", viewBox: "0 0 291 338", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "slide-button" },
                    React.createElement("path", { d: "M0 169L291 0.991089V337.009L0 169Z", fill: color }))),
            React.createElement("button", { onClick: next },
                React.createElement("svg", { width: "25px", height: "25px", viewBox: "0 0 291 338", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "slide-button" },
                    React.createElement("path", { d: "M291 169L0 337.009V0.991074L291 169Z", fill: color }))))));
};
//# sourceMappingURL=Control.js.map