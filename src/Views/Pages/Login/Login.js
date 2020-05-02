import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Layout } from "antd";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { fetchLocalUser, getInputUser } from "../../../redux/actions";
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

const Login = ({ fetchLocalUser, getInputUser }) => {
  const [account, setAccount] = useState({
    inputUser: "",
    inputPass: "",
  });
  // const [matchData, setMatchData] = useState(false);
  // const [localUsers, setLocalUsers] = useState([]);
  // let history = useHistory();

  const onFinish = (values) => {
    getInputUser(values);
    // if (localUsers.length > 0) {
    //   localUsers.map((user) => {
    //     if (
    //       user.username === values.username &&
    //       user.password === values.password
    //     ) {
    //       setMatchData(true);
    //       history.push("/");
    //     } else {
    //       setMatchData(false);
    //     }
    //   });
    // }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const _handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setAccount({ ...account, [name]: value });
  };

  useEffect(() => {
    fetchLocalUser();
  }, []);

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
    appReducers: { users, user },
  } = state;
  // console.log(state);
  return {
    users,
  };
};
const mapDispatchToProps = {
  fetchLocalUser,
  getInputUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;
