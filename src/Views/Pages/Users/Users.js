import React, { useState, useRef, useEffect } from "react";
import { Spin, Radio, Button, Table, Input } from "antd";
// import { connect } from "react-redux";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
// import { fectchUsers } from "./redux/actions";

// import { fectchUsers } from "./redux/actions";

const Users = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [data, setData] = useState([]);
  let searchInput = useRef(null);

  useEffect(() => {
    const fectchUsers = async () => {
      const res = await axios.get(
        "https://randomuser.me/api/?page=1&results=5"
      );
      console.log(res.data.results);
      setData(res.data.results);
    };
    fectchUsers();
  }, []);
  // console.log(data);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...getColumnSearchProps("age"),
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: "20%",
      ...getColumnSearchProps("address"),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        console.log("OUTPUT: Users -> text, record", text, record);
        return (
          <span>
            <Button type="primary">View</Button>
            <span style={{ margin: "20px" }}></span>
            <Button type="primary" danger>
              Delete
            </Button>
          </span>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Users;
