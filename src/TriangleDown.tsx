import * as React from "react";
import styled from 'styled-components';
import "./types"

const TriangleDown: React.VFC<TriangleProps> = ({ children, height = "0", color = "black", size = "100" }) => {
  const TriangleDown = styled.div`
    color: ${color};
    border-right: ${size}px solid transparent;
    border-top: ${size + 10 * Number(height)}px solid ${color};
    border-left: ${size}px solid transparent; 
  `;

  return (
    <TriangleDown>
      {children ? 
        <div>
          {children}
        </div> :
        <div></div>
      }
    </TriangleDown>
  )
}

export default TriangleDown
