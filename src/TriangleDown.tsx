import * as React from "react";
import styled from 'styled-components';
import "./types"

const TriangleDown: React.VFC<TriangleProps> = ({ children, color = "black", size = "100px" }) => {
  const TriangleDown = styled.div`
    color: ${color};
    border-right: ${size} solid transparent;
    border-top: ${size} solid ${color};
    border-left: ${size} solid transparent; 
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
