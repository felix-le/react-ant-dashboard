import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Layout } from "antd";
// import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";

// import { setUser } from "../../../redux/actions";
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
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const Login = () => {
  const [account, setAccount] = useState({
    inputUser: "",
    inputPass: "",
  });
  const [matchData, setMatchData] = useState(false);
  const [localUsers, setLocalUsers] = useState([]);
  let history = useHistory();

  const onFinish = (values) => {
    if (localUsers.length > 0) {
      localUsers.map((user) => {
        if (
          user.username === values.username &&
          user.password === values.password
        ) {
          setMatchData(true);
          history.push("/");
        } else {
          setMatchData(false);
        }
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const _handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setAccount({ ...account, [name]: value });
  };

  useEffect(() => {
    getLocalUsers();
  }, []);

  // Tại sao chỗ này phải parse 2 lần?

  const getLocalUsers = () => {
    const readDataLocalStorage = JSON.parse(
      window.localStorage.getItem("persist:root")
    );
    if (Object.keys(readDataLocalStorage).length > 0) {
      const localUsers = JSON.parse(readDataLocalStorage.appReducers).users
        ? JSON.parse(readDataLocalStorage.appReducers).users
        : {};
      setLocalUsers(localUsers);
    }
  };
  // Tại sao chỗ này phải parse 2 lần?

  console.log(localUsers);
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

// const mapStateToProps = (state) => {
//   const {
//     appReducers: { data },
//   } = state;
//   console.log(state);
//   return {
//     data,
//   };
// };
// const mapDispatchToProps = {
//   setUser,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;
