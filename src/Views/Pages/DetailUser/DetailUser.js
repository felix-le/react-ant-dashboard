import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Descriptions, Row, Col, Card, Avatar } from "antd";
import axios from "axios";

const DetailUser = () => {
  // const [dataUser, setDataUser] = useState({});
  // useEffect(() => {
  //   const fectchUsers = async () => {
  //     const res = await axios.get("https://randomuser.me/api/?results=1");
  //     setDataUser(res.data.results[0]);
  //   };
  //   fectchUsers();
  // }, []);
  // console.log(dataUser);

  const Description = () => {
    return (
      <>
        {/* <Descriptions title="User Info" layout="vertical" bordered>
          <Descriptions.Item label="Contact" style={{}}>
            {dataUser.cell}
          </Descriptions.Item>
          <Descriptions.Item label="Email">{dataUser.email}</Descriptions.Item>
          <Descriptions.Item label="Gender">
            {dataUser.gender}
          </Descriptions.Item>
          <Descriptions.Item label="User name">
            {dataUser.login.username}
          </Descriptions.Item>
          <Descriptions.Item label="Location" span={2}>
            {dataUser.location.country}, {dataUser.location.city},{" "}
            {dataUser.location.street.number}, {dataUser.location.street.name}
          </Descriptions.Item>
          <Descriptions.Item label="Age">
            {dataUser.dob.age}, {dataUser.dob.date}
          </Descriptions.Item>
          <Descriptions.Item label="Registered Date" span={2}>
            {dataUser.registered.date}
          </Descriptions.Item>
          <Descriptions.Item label="ID">
            {dataUser.id.name || "hidden"} {dataUser.id.value || ""}
          </Descriptions.Item>
        </Descriptions> */}
      </>
    );
  };

  // const DetailAvatar = () => {
  //   return (
  //     <>
  //       <Card>
  //         <div className="profile__avatar">
  //           <Avatar size={130} src={dataUser.picture.large} />
  //         </div>
  //         <div className="profile__info">
  //           <div className="profile__info__regency">{dataUser.name.title}</div>
  //           <div className="profile__info__name">
  //             {dataUser.name.first}. {dataUser.name.last}
  //           </div>
  //           <div className="profile__info__bio">
  //             We don&lsquo;t be scared of the truth because we need to restart
  //             the human foundation in truth And I love you like Kanye loves
  //             Kanye I love Rick Owens’ bed design.
  //           </div>
  //         </div>
  //       </Card>
  //     </>
  //   );
  // };

  return (
    <div className="detaul_userdetaul_user">
      this is detail user

      {/* {Object.keys(dataUser).length > 0 ? (
        <Row>
          <Col span={18} order={1}>
            <Description />
          </Col>
          <Col span={6} order={4} className="ant-col-profile">
            <DetailAvatar />
          </Col>
        </Row>
      ) : (
        <div>loading</div>
      )} */}
    </div>
  );
};

const mapStateToProps = state => {
  const { user } = state.userReducers;
  console.log(user);

  return {
    user
  }
}

export default connect(mapStateToProps, null)(DetailUser);
