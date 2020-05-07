import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import DefaultLayout from "./containers/DefaultLayout";
import Login from "./Views/Pages/Login";
import ForgotPassword from "./Views/Pages/ForgetPass";
import Register from "./Views/Pages/Register";

import { isLogin } from "./utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(isLogin());
  return <Route {...rest} render={(props) => (isLogin() ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

function App() {
  const loading = () => <div className="ant-divider-with-text-center">Loading....</div>;

  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register-page" name="Register Page" component={Register} />
          <Route exact path="/forgot-password" name="Forgot pass Page" component={ForgotPassword} />
          <Route path="/" name="Home" component={DefaultLayout} />
          {/* <PrivateRoute path="/" name="Home" component={DefaultLayout} /> */}
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
