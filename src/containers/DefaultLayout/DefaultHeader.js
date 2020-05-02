import React from "react";
import { Layout, Avatar, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { URL_PAGE } from "../../configs";
const { Header } = Layout;

const DefaultHeader = () => {
  const _handleLogOut = () => {};

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to={URL_PAGE.PROFILE}>Profile</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={URL_PAGE.CHANGE_PASSWORD}>Change Password</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Link to={"/login"} onClick={() => _handleLogOut}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div
        className="avatar-wrapper"
        style={{ padding: 0, textAlign: "right" }}
      >
        <Dropdown overlay={menu} trigger={["click"]}>
          <Avatar
            size="large"
            src="https://bit.ly/34SWeiX"
            style={{ right: "20px" }}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default DefaultHeader;
