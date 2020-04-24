import React, { useState } from "react";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
const { SubMenu } = Menu;
const DefaultSideBar = () => {
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
            <span>45456</span>
          </Menu.Item>
          {/* <Menu.Item key="2">
            <DesktopOutlined />
            <span>Management</span>
          </Menu.Item> */}
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>Management</span>
              </span>
            }
          >
            <Menu.Item key="3">Member</Menu.Item>
            {/* <Menu.Item key="4">Bill</Menu.Item> */}
            {/* <Menu.Item key="5">Alex</Menu.Item> */}
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
    </Layout>
  );
};

export default DefaultSideBar;
