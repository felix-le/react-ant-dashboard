import React, { Suspense } from "react";
import "antd/dist/antd.css";
import { Layout, Breadcrumb } from "antd";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes";
import last from "lodash/last";
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";
import DefaultSideBar from "./DefaultSideBar";
import { connect } from "react-redux";
const { Content, Footer } = Layout;

const DefaultLayout = ({ account }) => {
  const location = window.location.hash;

  const getNodeLabel = (node) => last(node.split("/"));

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const breadcumbLabel = capitalizeFirstLetter(getNodeLabel(location));
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
              <Breadcrumb.Item>{breadcumbLabel}</Breadcrumb.Item>
              <Breadcrumb.Item>Child-Page</Breadcrumb.Item>
            </Breadcrumb>
            <div className="container">
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
            </div>
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

const mapStateToProps = (state) => {
  const { account } = state.appReducers;
  return {
    account,
  };
};
export default connect(mapStateToProps, null)(DefaultLayout);
