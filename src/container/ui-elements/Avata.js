import React, { useState } from 'react';
import { Row, Col, Avatar, Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { AvatarWraperStyle } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

const Avatars = () => {
  const rtl = useSelector(state => state.ChangeLayoutMode.rtlData);
  const [user, setUser] = useState(UserList[0]);
  const [color, setColor] = useState(ColorList[0]);
  const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
    setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
  };

  return (
    <>
      <PageHeader
        title="Avatar"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Basic">
              <AvatarWraperStyle style={{ marginBottom: 10 }}>
                <Avatar size={64} icon={<UserOutlined />} />
                <Avatar size="large" icon={<UserOutlined />} />
                <Avatar icon={<UserOutlined />} />
                <Avatar size="small" icon={<UserOutlined />} />
              </AvatarWraperStyle>
              <AvatarWraperStyle>
                <Avatar shape="square" size={64} icon={<UserOutlined />} />
                <Avatar shape="square" size="large" icon={<UserOutlined />} />
                <Avatar shape="square" icon={<UserOutlined />} />
                <Avatar shape="square" size="small" icon={<UserOutlined />} />
              </AvatarWraperStyle>
            </Cards>
            <Cards title="Autoset Font Size">
              <AvatarWraperStyle>
                <div>
                  <Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="large">
                    {user}
                  </Avatar>
                  <Button
                    size="extra-small"
                    className="btn-outlined"
                    type="light"
                    outlined
                    style={{ margin: '0 10px', verticalAlign: 'middle', color: '#ADB4D2' }}
                    onClick={changeUser}
                  >
                    Change
                  </Button>
                </div>
              </AvatarWraperStyle>
            </Cards>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Cards title="Type">
              <AvatarWraperStyle>
                <Avatar icon={<UserOutlined />} />
                <Avatar icon={<UserOutlined />} />
                <Avatar>U</Avatar>
                <Avatar>USER</Avatar>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                <Avatar style={{ backgroundColor: '#20C997' }} icon={<UserOutlined />} />
              </AvatarWraperStyle>
            </Cards>
            <Cards title="with badge">
              <AvatarWraperStyle>
                <span style={{ [!rtl ? 'marginRight' : 'marginLeft']: 10 }}>
                  <Badge count={1}>
                    <Avatar shape="square" icon={<UserOutlined />} />
                  </Badge>
                </span>
                <span>
                  <Badge dot>
                    <Avatar shape="square" icon={<UserOutlined />} />
                  </Badge>
                </span>
              </AvatarWraperStyle>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Avatars;
