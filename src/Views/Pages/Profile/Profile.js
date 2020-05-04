import React from "react";
import { connect } from "react-redux";
import { Descriptions, Row, Col } from "antd";

const Profile = ({ account }) => {
  // const [dataUser, setDataUser] = useState({});
  console.log(account);

  const Description = () => {
    const { username, email, password, prefix, phone, website } = account;
    return (
      <>
        <Descriptions title="User Info" layout="vertical" bordered>
          <Descriptions.Item label="Contact" style={{}}>
            {username}
          </Descriptions.Item>
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
          <Descriptions.Item label="Gender">{password}</Descriptions.Item>

          <Descriptions.Item label="Prefix">{prefix}</Descriptions.Item>
          <Descriptions.Item label="Phone">{phone}</Descriptions.Item>
          <Descriptions.Item label="website">{website}</Descriptions.Item>
        </Descriptions>
      </>
    );
  };

  return (
    <div className="detaul_userdetaul_user">
      <>
        <Row>
          <Col span={12} offset={6} className="ant-col-profile">
            <p>this is avatar place</p>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <Description />
          </Col>
        </Row>
      </>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { account } = state.appReducers;
  return {
    account,
  };
};

export default connect(mapStateToProps, null)(Profile);
