import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Layout } from "antd";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { fetchLocalUsers, checkUserInput } from "../../../redux/actions";
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

const Login = ({ fetchLocalUsers, checkUserInput, matchData, user, error }) => {
  let history = useHistory();
  //NEED TO HELP
  const onFinish = (values) => {
    checkUserInput(values);
  };
  //end NEED TO HELP

  useEffect(() => {
    fetchLocalUsers();
  }, []);

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
        {/* {errors.email && <p className="error">{errors.email}</p>} */}
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Link
            to="/register-page"
            type="primary"
            className="ant-btn ant-btn-primary"
          >
            Register Now !
          </Link>
        </Form.Item>
      </Form>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  const {
    appReducers: { users, matchData, user, error },
  } = state;
  return {
    users,
    matchData,
    user,
    error,
  };
};
const mapDispatchToProps = {
  fetchLocalUsers,
  checkUserInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;
