import React, { useState } from "react";
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { URL_PAGE } from "../../configs";
const { Sider } = Layout;
const { SubMenu } = Menu;
const DefaultSideBar = () => {
  const [state, setState] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };

  return (
    <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
      <div className="logo" style={{ color: "white", textAlign: "center" }}>
        Viet Anh le
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">
          <Link to={URL_PAGE.DASHBOARD}>
            <PieChartOutlined />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>

        <SubMenu
          key="sub1"
          title={
            <span>
              <UserOutlined />
              <span>Management</span>
            </span>
          }
        >
          <Menu.Item key="3">
            <Link to={URL_PAGE.USERS}>
              <span>User List</span>
            </Link>
          </Menu.Item>
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
  );
};

export default DefaultSideBar;
