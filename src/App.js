import React from "react";
import "./App.scss";
import Home from "./pages/home/home";
import UltimasNoticias from "./pages/ultimas-noticias/ultimas-noticias";
import Deportes from "./pages/deportes/deportes";
import Cultura from "./pages/cultura/cultura";
import Politica from "./pages/politica/politica";
import Sociedad from "./pages/sociedad/sociedad";
import Turismo from "./pages/turismo/turismo";
import Salud from "./pages/salud/salud";
import Tecnologia from "./pages/tecnologia/tecnologia";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/ultimas-noticias" component={UltimasNoticias} />
          <Route path="/deportes" component={Deportes} />
          <Route path="/cultura" component={Cultura} />
          <Route path="/politica" component={Politica} />
          <Route path="/sociedad" component={Sociedad} />
          <Route path="/turismo" component={Turismo} />
          <Route path="/salud" component={Salud} />
          <Route path="/tecnologia" component={Tecnologia} />
        </div>
      </Switch>
    </Router>
  );
}
export default App;
