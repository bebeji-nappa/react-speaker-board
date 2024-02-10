import React from "react";
import Square from "./Square";
import TriangleRight from "./TriangleRight";

const ArrowRight: React.FC<ArrowRightProps> = ({ width = "100", color = "black" }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Square width={width} height="50" color={color} />
      <TriangleRight height="50" size="60" color={color} />
    </div>
  )
}

export default ArrowRight;
