import React, { useState, useEffect } from "react";
import "./types";
import "../styles/Base.css";
import { Control } from "./Control";
const modeValue = [
    "slide",
    "inlineSlide"
];
export const ReactSpeakerBoard = ({ mode = "slide", slide, controlTheme = "#71a3e3", width = "80vw", height = "80vh" }) => {
    const [view, setView] = useState(slide[0]);
    const [index, setIndex] = useState(0);
    const max = slide.length - 1;
    const NextSlide = () => {
        if (index !== max) {
            let num = Number(index);
            setIndex(Number(num + 1));
        }
    };
    const ProvSlide = () => {
        if (index !== 0) {
            let num = Number(index);
            setIndex(Number(num - 1));
        }
    };
    useEffect(() => {
        setView(slide[Number(index)]);
    }, [index]);
    return (React.createElement(React.Fragment, null, modeValue.includes(mode) &&
        mode === "inlineSlide" ?
        React.createElement("div", { className: mode, style: { width: `${width}`, height: `${height}` } },
            view,
            React.createElement(Control, { next: () => NextSlide(), prov: () => ProvSlide(), color: controlTheme })) :
        React.createElement("div", { className: mode },
            view,
            React.createElement(Control, { next: () => NextSlide(), prov: () => ProvSlide(), color: controlTheme }))));
};
//# sourceMappingURL=Base.js.map