import * as React from "react";
import "./types"

const Square: React.VFC<FigureProps> = ({ children, backgroundColor = "white", color = "black", width = "100px", height = "100px" }) => {
  return (
    <>
      {children ? 
        <div className="square" style={{ backgroundColor: backgroundColor, color: color, width: width, height: height }}>
          {children}
        </div> :
        <div className="square" style={{ backgroundColor: backgroundColor, color: color, width: width, height: height }}></div>
      }
    </>
  )
}

export default Square
