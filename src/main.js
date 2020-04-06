import React from "react";
import Resume from "views/resume";
import { Redirect, Route, Switch } from "react-router";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/resume" component={Resume}></Route>
          <Redirect from="*" to="/resume" component={Resume} />
        </Switch>
      </div>
    );
  }
}

export default Main;
