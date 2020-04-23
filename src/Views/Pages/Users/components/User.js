import React from "react";
import Button from "./Button";

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
        <Button
          handleClick={props.handleUpdate}
          nameBtn="Update"
          btnType="btn-primary btn-block"
        />
        <Button
          handleClick={props.handleView}
          nameBtn="View"
          btnType="btn-info btn-block"
        />
        <Button
          handleClick={props.handleDelete}
          nameBtn="Delete"
          btnType="btn-danger btn-block"
        />
      </td>
      
    </>
  );
};
export default User;
