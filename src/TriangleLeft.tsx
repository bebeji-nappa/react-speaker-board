import * as React from "react";
import styled from 'styled-components';
import "./types"

const TriangleLeft: React.VFC<TriangleProps> = ({ children, height = "0", color = "black", size = "100" }) => {
  const TriangleLeft = styled.div`
    color: ${color};
    border-top: ${size}px solid transparent;
    border-right: ${size + 10 * Number(height)}px solid ${color};
    border-buttom: ${size}px solid transparent; 
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
