import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Layout } from "antd";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

import { setUser } from "../../../redux/actions";
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

const Login = ({ setUser }) => {
  const [account, setAccount] = useState({
    userInput: "",
    UserPassword: "",
  });
  let history = useHistory();

  const onFinish = (values) => {
    setUser(account.userInput, account.UserPassword);
    history.push("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const _handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setAccount({ ...account, [name]: value });
  };
  // console.log(account);

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
          <Input name="userInput" onChange={(evt) => _handleOnChange(evt)} />
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
          <Input name="UserPassword" onChange={(evt) => _handleOnChange(evt)} />
        </Form.Item>
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  const {
    appReducers: { data },
  } = state;
  console.log(state);
  return {
    data,
  };
};
// Đéo hiểu sao lại có thằng email xuất hiệntrong state
const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
