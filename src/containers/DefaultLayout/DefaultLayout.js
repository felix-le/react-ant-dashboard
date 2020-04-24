import React, { useState, Suspense } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Redirect, Route, Switch, Link, useHistory } from "react-router-dom";
import routes from "../../routes";

import { URL_PAGE } from "../../configs";

import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";
import DefaultSideBar from "./DefaultSideBar";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const DefaultLayout = () => {
  const [state, setState] = useState(false);

  let history = useHistory();

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };
  // const _handleClickUsers = () => {
  //   console.log("1");
  //   history.push(`${URL_PAGE.USERS}`);
  // };
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
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
              {routes.map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={route.component}
                />
              ))}
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
