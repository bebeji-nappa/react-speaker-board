import * as React from "react";
import styled from 'styled-components';
import "./types"

const TriangleRight: React.VFC<TriangleProps> = ({ children, height = 0, color = "black", size = 100 }) => {
  const TriangleRight = styled.div`
    color: ${color};
    border-top: ${size}px solid transparent;
    border-bottom: ${size}px solid transparent;
    border-left: ${size + 10 * height}px solid ${color}; 
  `;

  return (
    <TriangleRight>
      {children ? 
        <div>
          {children}
        </div> :
        <div></div>
      }
    </TriangleRight>
  )
}

export default TriangleRight
