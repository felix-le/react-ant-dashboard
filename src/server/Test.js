import React, { useEffect, useState } from "react";
import axios from "axios";
const Test = () => {
  const [data, setData] = useState([]);
  const [newDataObj, setNewDataObj] = useState([]);
  useEffect(() => {
    const fectchUsers = async () => {
      const res = await axios.get("http://localhost:4000/results");
      setData(res.data);
    };
    fectchUsers();
  }, []);

  const NewDataObj = data.map((item, idx) => {
    let source = { id: idx };
    const returnTarget = Object.assign(item, source);
    newDataObj.push(returnTarget);
  });
  // console.log(newDataObj);

  return <p> h1</p>;
};

export default Test;
