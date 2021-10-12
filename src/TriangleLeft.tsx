import * as React from "react";
import styled from 'styled-components';
import "./types"

const TriangleLeft: React.VFC<TriangleProps> = ({ children, color = "black", size = "100px" }) => {
  const TriangleLeft = styled.div`
    color: ${color};
    border-top: ${size} solid transparent;
    border-right: ${size} solid ${color};
    border-buttom: ${size} solid transparent; 
  `;

  return (
    <TriangleLeft>
      {children ? 
        <div>
          {children}
        </div> :
        <div></div>
      }
    </TriangleLeft>
  )
}

export default TriangleLeft
