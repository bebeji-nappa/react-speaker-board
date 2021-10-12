import * as React from "react";
import styled from 'styled-components';
import "./types"

const TriangleUp: React.VFC<TriangleProps> = ({ children, color = "black", size = "100px" }) => {
  const TriangleUp = styled.div`
    color: ${color};
    border-right: ${size} solid transparent;
    border-bottom: ${size} solid ${color};
    border-left: ${size} solid transparent; 
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
