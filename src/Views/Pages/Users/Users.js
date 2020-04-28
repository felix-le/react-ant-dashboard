import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Button, Modal } from "antd";
import axios from "axios";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

const Users = () => {
  const [data, setData] = useState([]);

  const _handleDelete = (id) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("OK", id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    const fectchUsers = async () => {
      const res = await axios.get(
        "https://randomuser.me/api/?page=1&results=100"
      );
      console.log(res.data.results);
      setData(res.data.results);
    };
    fectchUsers();
  }, []);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "picture",
      render: (picture) => (
        <img src={picture.thumbnail} title="Avatar" alt="Avatar" />
      ),
      width: "5%",
      fixed: "left",
    },
    {
      title: "Full Name",
      width: "15%",
      dataIndex: "name",
      key: "name",
      render: (name) => `${name.title}. ${name.first} ${name.last}`,
      fixed: "left",
    },
    {
      title: "Email",
      width: "15%",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "gender",
      dataIndex: "gender",
      key: "1",
      width: "10",
    },

    {
      title: "Action",
      key: "operation",
      fixed: "right",
      // width: "30%",
      render: () => {
        return (
          <div className="table__action">
            <Button type="primary">Update</Button>
            <Button type="primary" className="btn-success">
              View
            </Button>
            <Button
              type="primary"
              danger
              onClick={(id) => {
                // e.stopPropagation();
                _handleDelete(id);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record) => record.login.uuid}
      scroll={{ x: 1500, y: 300 }}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default Users;
