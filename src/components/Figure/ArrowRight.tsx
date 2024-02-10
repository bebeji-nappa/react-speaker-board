import React from "react";
import Square from "./Square";
import TriangleRight from "./TriangleRight";
import Content from "../Content";

const ArrowRight: React.FC<ArrowRightProps> = ({ width = "100px", color = "black" }) => {
  return (
    <Content horizontal="center" vertical="center" layout="horizontal">
      <Square width={width} height="50px" color={color} />
      <TriangleRight height="50px" size="60px" color={color} />
    </Content>
  )
}

export default ArrowRight;
