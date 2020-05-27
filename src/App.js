import React from "react";
import "./App.scss";
import Home from "./pages/home/home";
import UltimasNoticias from "./pages/ultimas-noticias/ultimas-noticias";
import Deportes from "./pages/deportes/deportes";
import Politica from "./pages/politica/politica";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Subscription from "./pages/subscription/subscription";
import Users from "./pages/users/users";
// import Error from "./pages/error/error";
import UsersEdit from "./pages/usersEdit/usersEdit";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/ultimas-noticias" component={UltimasNoticias} />
          <Route path="/deportes" component={Deportes} />
          <Route path="/politica" component={Politica} />
          <Route path="/subscription" component={Subscription} />
          <Route path="/users" component={Users} />
          <Route path="/users/:userId/edit" component={UsersEdit} />

          {/* <Route path="" component={Error} /> */}
        </div>
      </Switch>
    </Router>
  );
}
export default App;
