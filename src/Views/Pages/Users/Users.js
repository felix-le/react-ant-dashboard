import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { Table } from "antd";

const columns = [
  {
    title: "No.",
    dataIndex: "number",
    key: "number",
    width: 50,
    fixed: "left",
    key: "0",
  },
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "5",
  },
  {
    title: "gender",
    width: 100,
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "1",
    width: 150,
  },
  {
    title: "Column 2",
    dataIndex: "address",
    key: "2",
    width: 150,
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150,
  },

  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a>action</a>,
  },
];

const Users = () => {
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    const fectchUsers = async () => {
      const res = await axios.get(
        "https://randomuser.me/api/?page=1&results=10"
      );
      setDataApi(res.data.results);
    };
    fectchUsers();
  }, []);
  console.log("dataApi", dataApi);

  const data = [...dataApi];
  if (data.length > 0) {
    data.map((item, idx) => {
      console.log(item);
      return (
        <div key={idx}>
          number: {idx}
          name: item.name.first
        </div>
      );
    });
    // for (let i = 0; i < 100; i++) {
    //   data.push({
    //     key: `data[i].id.name`,
    //     number: `${i}`,
    //     name: data[i].name,
    //     gender: data[i].gender,
    //     address: `London Park no. ${i}`,
    //   });
    // }
  }
  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
      ,
    </div>
  );
};

export default Users;
