import React from "react";
import { Navigation, NavigationProps } from "./Navigation";

export class SideNavigation extends React.Component<NavigationProps, {}> {
  render() {
    const {
      items,
    } = this.props;
    return (
      <Navigation items={items}/>
    );
  }
}
