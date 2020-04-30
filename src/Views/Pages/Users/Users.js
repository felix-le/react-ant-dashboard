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
  // loading,
  // error,
  // data,
  // initUsersRedux,
  visibleUsersRedux,
  fetchUsers,
  removeUser,
  removeAll
}) => {
  // const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState("");
  const [selectedRows, setSelectedRows] = useState("");
  // const [recordItem, setRecordItem] = useState("");
  const [records, setRecords] = useState([]);

  let history = useHistory();

  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      setSelectedRows(selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      // setRecordItem(record);
      const newEmails = [];
      for(const value of selectedRows) {
        newEmails.push(value.email)
      }
      setRecords(newEmails);
      // console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      // Đoạn này lỗi khi xóa all rồi, click selected all tiếp thì thằng selected rows vẫn hiển thị ra những thằng đã bị xóa với thông số là undefined
      const newEmails = [];
      for(const value of selectedRows) {
        newEmails.push(value.email)
      }
      setRecords(newEmails);
      // console.log(selected, selectedRows, changeRows);
      // console.log(selectedRows);
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
        removeAll(records)
        // console.log(...selectedRowKeys);
        // const dataSource = [...visibleUsersRedux];
        // dataSource.splice(selectedRows, selectedRows.length);
        // setShowData(dataSource);
        // setSelectedRowKeys([]);
        // setSelectedRows([]);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  // console.log(visibleUsersRedux);

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
        // setShowData(visibleUsersRedux);
        // console.log(visibleUsersRedux);
        console.log("deleted");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    fetchUsers();
    // setShowData(visibleUsersRedux);
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
      // width: "30%",
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
          // e.stopPropagation();
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
  removeAll
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
