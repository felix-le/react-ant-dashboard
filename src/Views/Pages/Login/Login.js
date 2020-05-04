import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Layout } from "antd";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { fetchLocalUsers, activeUser } from "../../../redux/actions";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = ({ fetchLocalUsers, activeUser, user, error, users }) => {
  const [errorMatchData, setErrorMatchData] = useState("");
  let history = useHistory();

  const onFinish = (values) => {
    if (users.length > 0) {
      // users.map((user) =>
      //   user.username === values.username && user.password === values.password
      //     ? (history.push("/"), setErrorMatchData(false), activeUser(user))
      //     : (console.log("data not match"), setErrorMatchData(true))
      // );
      const accounts = users.filter((user) => user.username === values.username);

      if (accounts.length > 0) {
        setErrorMatchData(false);
        activeUser(accounts[0]);
        history.push("/");
      } else {
        setErrorMatchData(true);
      }
    } else {
      console.log("nothing to show");
    }
    //end NEED TO HELP
  };
  useEffect(() => {
    fetchLocalUsers();
  }, [fetchLocalUsers]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout className="login-page-wrapper">
      <Form
        className="login-form"
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item {...tailLayout}>
          <p>1</p>
          <p>1</p>
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        {errorMatchData && <p className="error">not match data</p>}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Link to="/register-page" type="primary" className="ant-btn ant-btn-primary">
            Register Now !
          </Link>
        </Form.Item>
      </Form>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  const {
    appReducers: { users, error },
  } = state;
  return {
    users,
    error,
  };
};
const mapDispatchToProps = {
  fetchLocalUsers,
  activeUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;
