import React from 'react';
import {styled} from "styletron-react";

const StyledDiv = styled('div', {
  height: '500px',
})

function GraphContainer(props) {
  return (
      <StyledDiv>
        {props.children}
      </StyledDiv>
  );
}

export default GraphContainer;
