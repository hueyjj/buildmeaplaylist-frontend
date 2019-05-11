import React from "react";
import { 
  BrowserRouter, 
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "./page/Home";
import { Playlist } from "./page/Playlist";
import { Navigation, NavigationItem } from "./ui/navigation";

const navItems: NavigationItem[] = [
  { value: "Home" },
  { value: "Playlist" },
  { value: "Ask" },
  { value: "Questions" },
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation
        items={navItems}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/playlists" component={Playlist} />
        <Route exact path="/playlists/:id" component={Playlist} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
