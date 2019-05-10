import React from "react";
import { 
  BrowserRouter, 
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "./page/Home";
import { Playlist } from "./page/Playlist";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/playlists" component={Playlist} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
