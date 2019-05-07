import React from "react";
import 'styled-components'
import { Button } from "./ui/button";

const App: React.FC = () => {
  return (
    <div className="App">
      <Button value="Click me" onClick={() => alert("you clicked me!")} />
    </div>
  );
};

export default App;
