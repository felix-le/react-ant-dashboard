import React, { useState, Suspense } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Redirect, Route, Switch } from "react-router-dom";
import Routes from "../../routes";

import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const DefaultLayout = () => {
  const [state, setState] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
        <div className="logo" style={{ color: "white", textAlign: "center" }}>
          {" "}
          Viet Anh le{" "}
        </div>
        {/* Tại sao lại có {" "} */}
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <span>Management</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <TeamOutlined />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <FileOutlined />
          </Menu.Item>
        </Menu>
      </Sider>

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
              {Routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    component={route.component}
                  />
                ) : null;
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
