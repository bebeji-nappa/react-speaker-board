import * as React from "react";
import styled from 'styled-components';
import "./types"

const TriangleRight: React.VFC<TriangleProps> = ({ children, color = "black", size = "100px" }) => {
  const TriangleRight = styled.div`
    color: ${color};
    border-top: ${size} solid transparent;
    border-bottom: ${size} solid transparent;
    border-left: ${size} solid ${color}; 
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
