import * as React from "react";
import "./types"

const Circle: React.VFC<FigureProps> = ({ children, backgroundColor = "white", color = "black", width = "100px", height = "100px" }) => {
  return (
    <>
      {children ? 
        <div className="cicle" style={{ backgroundColor: backgroundColor, color: color, width: width, height: height }}>
          {children}
        </div> :
        <div className="circle" style={{ backgroundColor: backgroundColor, color: color, width: width, height: height }}></div>
      }
    </>
  )
}

export default Circle
