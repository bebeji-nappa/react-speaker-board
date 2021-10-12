import * as React from "react";
import "./types"

const Circle: React.VFC<FigureProps> = ({ children, color = "black", width = "100", height = "100" }) => {
  return (
    <>
      {children ? 
        <div className="cicle" style={{ backgroundColor: color, width: `${width}px`, height: `${height}px` }}>
          {children}
        </div> :
        <div className="circle" style={{ backgroundColor: color, width: `${width}px`, height: `${height}px` }}></div>
      }
    </>
  )
}

export default Circle
