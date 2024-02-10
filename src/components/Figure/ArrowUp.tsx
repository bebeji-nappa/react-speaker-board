import React from "react";
import Square from "./Square";
import TriangleUp from "./TriangleUp";
import Content from "../Content";

const ArrowUp: React.FC<ArrowUpProps> = ({ height = "100px", color = "black" }) => {
  return (
    <Content horizontal="center" vertical="center">
      <TriangleUp height="50px" size="60px" color={color} />
      <Square width="50px" height={height} color={color} />
    </Content>
  )
}

export default ArrowUp;
