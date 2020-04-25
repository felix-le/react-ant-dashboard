import React from "react";
import { Button } from "antd";
const User = (props) => {
  return (
    <>
      <td className="user-subtitle number-user">{props.idx}</td>
      <td className="user-subtitle  avatar-user-wrapper">
        <img src={props.avatar} alt={props.name} className="avatar-user" />
      </td>
      <td className="user-subtitle user-subtitle  name-user">{props.name}</td>
      <td className="user-subtitle role-user">{props.role}</td>
      <td className="user-subtitle gender-user">{props.gender}</td>
      <td className="user-subtitle email-user">{props.email}</td>
      <td className="user-subtitle btn-container">
        <Button onClick={props.handleView} type="primary">
          {props.nameBtn}
        </Button>
        <Button onClick={props.handleDelete} type="primary" danger>
          {props.nameBtn}
        </Button>
      </td>
    </>
  );
};
export default User;
