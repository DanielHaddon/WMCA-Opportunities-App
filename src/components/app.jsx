import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import BlogList from "./views/bloglist/bloglist";
import BlogArticle from "./views/blogArticle/blogArticle";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/opportunities/" component={BlogList} />
          <Route
            exact
            path="/opportunities/skilllevel/:skilllevel/"
            component={BlogList}
          />
          <Route
            exact
            path="/opportunities/opportunity/:opportunity/"
            component={BlogList}
          />
          <Route
            exact
            path="/opportunities/category/:category/"
            component={BlogList}
          />
          <Route
            exact
            path="/opportunities/eligibilities/:eligibility/"
            component={BlogList}
          />
          <Route
            exact
            path="/opportunities/api/:article/"
            component={BlogArticle}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;