import React from "react";
import Square from "./Square";
import TriangleRight from "./TriangleRight";

const ArrowRight: React.FC<ArrowRightProps> = ({ width = "100px", color = "black" }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Square width={width} height="50px" color={color} />
      <TriangleRight height="50px" size="60px" color={color} />
    </div>
  )
}

export default ArrowRight;
