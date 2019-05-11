import React from "react";
import styled from "styled-components";

const StyledNavigation = styled.div`
  background: cyan;
  color: white;
`

const StyledNavigationItem = styled.li`
`

const StyledNavigationList = styled.ul`
`

export interface NavigationItem {
  value: string;
  onClick?(): void;
}

export interface NavigationProps {
  items: NavigationItem[];
}

export class Navigation extends React.Component<NavigationProps, {}> {
  render() {
    const {
      items,
    } = this.props;

    return (
      <StyledNavigation>
        <StyledNavigationList>
          {items.map((item) => {
            return (
              <StyledNavigationItem
                onClick={item.onClick}
              >
                {item.value}
              </StyledNavigationItem>
            );
          })}
        </StyledNavigationList>
      </StyledNavigation>
    );
  }
}
