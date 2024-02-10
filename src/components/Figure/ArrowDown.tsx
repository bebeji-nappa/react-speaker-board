import React from "react";
import Square from "./Square";
import TriangleDown from "./TriangleDown";
import Content from "../Content";

const ArrowDown: React.FC<ArrowUpProps> = ({ height = "100px", color = "black" }) => {
  return (
    <Content horizontal="center" vertical="center">
      <Square width="50px" height={height} color={color} />
      <TriangleDown height="50px" size="60px" color={color} />
    </Content>
  )
}

export default ArrowDown;
