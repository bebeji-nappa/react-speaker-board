import React from "react";
import Square from "./Square";
import TriangleLeft from "./TriangleLeft";
import Content from "../Content";

const ArrowLeft: React.FC<ArrowLeftProps> = ({ width = "100px", color = "black" }) => {
  return (
    <Content horizontal="center" vertical="center" layout="horizontal">
      <TriangleLeft height="50px" size="60px" color={color} />
      <Square width={width} height="50px" color={color} />
    </Content>
  );
};

export default ArrowLeft;
