import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: cyan;
  border: none;
  color: white;
`

export class Button extends React.Component<{}, {}> {
  render() {
    return <StyledButton>hello</StyledButton>;
  }
}
