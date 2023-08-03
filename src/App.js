// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterList} />
        <Route exact path="/character/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}

export default App;
