import * as React from "react";
import styled from 'styled-components';
import "./types"

const TriangleUp: React.VFC<TriangleProps> = ({ children, height = 0, color = "black", size = 100 }) => {
  const TriangleUp = styled.div`
    color: ${color};
    border-right: ${size}px solid transparent;
    border-bottom: ${size + 10 * height}px solid ${color};
    border-left: ${size}px solid transparent; 
  `;

  return (
    <TriangleUp>
      {children ? 
        <div>
          {children}
        </div> :
        <div></div>
      }
    </TriangleUp>
  )
}

export default TriangleUp
