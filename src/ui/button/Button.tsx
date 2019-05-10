import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: cyan;
  border: none;
  color: white;
`

export interface Props {
  value?: string;
  onClick?(): void;
}

export class Button extends React.Component<Props, {}> {
  render() {
    const {
      value,
      onClick,
    } = this.props;
    return (
      <StyledButton onClick={onClick}>{value}</StyledButton>
    );
  }
}
