import React from "react";

export interface PlaylistProps {
  value?: string;
  onClick?(): void;
}

export class Playlist extends React.Component<PlaylistProps, {}> {
  render() {
    return (
        <div className="playlist">playlist</div>
    );
  }
}
