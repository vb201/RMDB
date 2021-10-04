import HomePage from "./containers/HomePage";
import ContentPage from "./containers/ContentPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/:contentType/:contentID">
            <ContentPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
