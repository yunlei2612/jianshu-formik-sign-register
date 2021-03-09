import React from "react";
import SignIn from './components/signin'
import SignUp from './components/signup'
import 'antd/dist/antd.css'; 
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/sign_in" render={props => <SignIn {...props}/>}>
          </Route>
          <Route path="/sign_up"  render={props => <SignUp {...props}/>}>
          </Route>
          <Redirect from="/" to="/sign_in" />
        </Switch>

      </div>
    </Router>
  );
}

function Home() {
  return <h2>首页</h2>;
}
