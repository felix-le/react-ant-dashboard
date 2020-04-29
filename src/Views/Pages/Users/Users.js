import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Button, Modal } from "antd";
import axios from "axios";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import URL_PAGE from "../../../configs/url";
const { confirm } = Modal;

const Users = () => {
  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState("");
  const [selectedRows, setSelectedRows] = useState("");
  const [recordItem, setRecordItem] = useState("");

  let history = useHistory();

  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      setRecordItem(record);
      // console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  const _handleDeleteAll = () => {
    confirm({
      title: "Are you sure delete All tasks?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log(...selectedRowKeys);
        const dataSource = [...data];
        dataSource.splice(selectedRows, selectedRows.length);
        setData(dataSource);
        setSelectedRowKeys([]);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  if (Object.keys(recordItem).length > 0) {
    console.log(recordItem.login.uuid);
  } else {
  }

  const handleDelete = (record) => () => {
    console.log(record);
    // confirm({
    //   title: "Are you sure delete the task?",
    //   icon: <ExclamationCircleOutlined />,
    //   content: "Some descriptions",
    //   okText: "Yes",
    //   okType: "danger",
    //   cancelText: "No",
    //   onOk() {
    //     const deleteArr = data.filter(
    //       (item) => item.login.uuid !== recordItem.login.uuid
    //     );
    //     setData(deleteArr);
    //   },
    //   onCancel() {
    //     console.log("Cancel");
    //   },
    // });
  };

  useEffect(() => {
    const fectchUsers = async () => {
      const res = await axios.get(
        "https://randomuser.me/api/?page=1&results=100"
      );
      setData(res.data.results);
    };
    fectchUsers();
  }, []);

  const handleViewDetail = () => {
    history.push(URL_PAGE.USERS_DETAIL);
  };

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
      render: (record) => {
        return (
          <div className="table__action">
            <Button
              type="primary"
              className="btn-success"
              style={{ marginRight: 16 }}
              onClick={handleViewDetail}
            >
              View
            </Button>
            <Button type="primary" danger onClick={handleDelete(record)}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Button
        type="primary"
        danger
        onClick={() => {
          // e.stopPropagation();
          _handleDeleteAll();
        }}
        style={{ marginBottom: 16 }}
      >
        Delete Seleted Item
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.login.uuid}
        scroll={{ x: 1500, y: 300 }}
        pagination={{ pageSize: 5 }}
        rowSelection={rowSelection}
      />
    </>
  );
};

export default Users;
