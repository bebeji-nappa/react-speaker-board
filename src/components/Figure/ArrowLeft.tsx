import React from "react";
import Square from "./Square";
import TriangleLeft from "./TriangleLeft";

const ArrowLeft: React.FC<ArrowLeftProps> = ({ width = "100px", color = "black" }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <TriangleLeft height="50px" size="60px" color={color} />
      <Square width={width} height="50px" color={color} />
    </div>
  )
}

export default ArrowLeft;
