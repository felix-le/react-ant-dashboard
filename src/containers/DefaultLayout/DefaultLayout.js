import React, { Suspense } from "react";
import "antd/dist/antd.css";
import { Layout, Breadcrumb } from "antd";

import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes";

import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";
import DefaultSideBar from "./DefaultSideBar";

const { Content, Footer } = Layout;

const DefaultLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <DefaultSideBar />

      <Layout className="site-layout">
        <Suspense>
          <DefaultHeader />
        </Suspense>
        <Suspense>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Name-Page</Breadcrumb.Item>
              <Breadcrumb.Item>Child-Page</Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
              {routes.map((route, idx) => {
                return route.name === "profile" ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={route.component}
                  />
                ) : (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={route.component}
                  />
                );
              })}
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </Content>
        </Suspense>
        <Suspense>
          <Footer style={{ textAlign: "center" }}>
            <DefaultFooter />
          </Footer>
        </Suspense>
      </Layout>
    </Layout>
  );
};

// ReactDOM.render(<SiderDemo />, mountNode);

export default DefaultLayout;
