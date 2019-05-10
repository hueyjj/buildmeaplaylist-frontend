import React from "react";

export interface HomeProps {
  value?: string;
  onClick?(): void;
}

export class Home extends React.Component<HomeProps, {}> {
  render() {
    return (
        <div className="home">home</div>
    );
  }
}
