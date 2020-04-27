import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Layout } from "antd";
import { connect } from "react-redux";
import {
  // Router,
  // Switch,
  // Route,
  // Link,
  // Redirect,
  BrowserRouter as useHistory,
  // useLocation,
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
    inputUser: "",
    inputPass: "",
  });
  let history = useHistory();

  const onFinish = (values) => {
    console.log(values);
    setUser(values.username, values.password);
    history.push("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const _handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setAccount({ ...account, [name]: value });
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
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          onChange={(evt) => _handleOnChange(evt)}
        >
          <Input name="inputUser" />
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
          onChange={(evt) => _handleOnChange(evt)}
        >
          <Input.Password name="inputPass" />
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
