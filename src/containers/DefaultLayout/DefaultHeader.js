import React from "react";
import { Layout, Avatar, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

const DefaultHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0"></Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div
        className="avatar-wrapper"
        style={{ padding: 0, textAlign: "right" }}
      >
        <Avatar
          size="large"
          src="https://bit.ly/34SWeiX"
          style={{ right: "20px" }}
        />
      </div>
    </Header>
  );
};

export default DefaultHeader;
