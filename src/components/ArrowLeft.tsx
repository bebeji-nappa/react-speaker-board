import React from "react";
import Square from "./Square";
import TriangleLeft from "./TriangleLeft";

const ArrowLeft: React.FC<ArrowLeftProps> = ({ width = "100", color = "black" }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <TriangleLeft height="50" size="60" color={color} />
      <Square width={width} height="50" color={color} />
    </div>
  )
}

export default ArrowLeft;
