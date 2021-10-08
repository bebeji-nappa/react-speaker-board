import React from "react";
import "../styles/Control.css"

export const Control: React.VFC<Control> = ({ next, prov, color, controlBar }) => {
  return (
    <div className={`Control-wrap background-${controlBar}`}>
      <div className="Control">
        <button onClick={prov}>
          <svg width="25px" height="25px" viewBox="0 0 291 338" fill="none" xmlns="http://www.w3.org/2000/svg" className="slide-button">
          <path d="M0 169L291 0.991089V337.009L0 169Z" fill={color}/>
          </svg>
        </button>
        <button onClick={next}>
          <svg width="25px" height="25px" viewBox="0 0 291 338" fill="none" xmlns="http://www.w3.org/2000/svg" className="slide-button">
          <path d="M291 169L0 337.009V0.991074L291 169Z" fill={color}/>
          </svg>
        </button>
      </div>
    </div>
  )
}
