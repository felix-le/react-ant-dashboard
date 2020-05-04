import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import URL_PAGE from "../../../configs/url";
import { connect } from "react-redux";
import { detailUser, fetchUsers, removeUser, removeAll } from "./redux/actions";
const { confirm } = Modal;

const Users = ({
  detailUser,
  visibleUsersRedux,
  fetchUsers,
  removeUser,
  removeAll,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState("");
  const [selectedRows, setSelectedRows] = useState("");
  const [records, setRecords] = useState([]);

  let history = useHistory();
  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);
      
    },
    onSelect: (record, selected, selectedRows) => {
      const newEmails = [];
      for (const value of selectedRows) {
        newEmails.push(value.email);
      }
      setRecords(newEmails);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      const newEmails = [];
      for (const value of selectedRows) {
        newEmails.push(value.email);
      }
      setRecords(newEmails);
    },
  };
  console.log(selectedRowKeys, selectedRows)
  const _handleDeleteAll = () => {
    confirm({
      title: "Are you sure delete All tasks?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        removeAll(records);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleDelete = (record) => () => {
    confirm({
      title: "Are you sure delete the task?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        removeUser(record);
        console.log("deleted");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleViewDetail = (record) => () => {
    detailUser(record);
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
      render: (record) => {
        return (
          <div className="table__action">
            <Button
              type="primary"
              className="btn-success"
              style={{ marginRight: 16 }}
              onClick={handleViewDetail(record)}
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
          _handleDeleteAll();
        }}
        style={{ marginBottom: 16 }}
      >
        Delete Seleted Item
      </Button>
      <Table
        columns={columns}
        dataSource={visibleUsersRedux}
        rowKey={(record) => record.login.uuid}
        scroll={{ x: 1500, y: 300 }}
        pagination={{ pageSize: 5 }}
        rowSelection={rowSelection}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    userReducers: {
      user,
      loading,
      error,
      data,
      initUsersRedux,
      visibleUsersRedux,
    },
  } = state;
  return {
    user,
    loading,
    error,
    data,
    initUsersRedux,
    visibleUsersRedux,
  };
};

const mapDispatchToProps = {
  detailUser,
  fetchUsers,
  removeUser,
  removeAll,
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
