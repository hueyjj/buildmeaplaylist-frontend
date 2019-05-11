import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.div`
  display: inline-block;
  position: fixed;
  height: 100%;
  background: black;
  color: white;
  overflow: hidden;
`

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  color: white;
  text-decoration: none;
`

const StyledNavigationList = styled.ul`
  padding: 0;
  list-style: none;

  ${StyledLink} {
    padding-left: 15px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  ${StyledLink}:hover {
    background: orange;
    color: white;
    cursor: pointer;
  }
  ${StyledLink}:active {
    background: green;
  }
`

export interface NavigationItem {
  value: string;
  // icon: any;
  linkTo: string;
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
          {items.map((item, key) => {
            return (
              <li key={key}>
                <StyledLink to={item.linkTo}>
                    {item.value}
                </StyledLink>
              </li>
            );
          })}
        </StyledNavigationList>
      </StyledNavigation>
    );
  }
}
