import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Icon, IconWrapper } from './IconStyled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';
import { featherIcons } from '../../config/icon/icon.json';

const FeatherSvgIcons = () => {
  let key = 0;
  return (
    <>
      <PageHeader title="Feather Icons" />
      <Main>
        <Row gutter={15}>
          <Col md={24}>
            <IconWrapper>
              <Cards title="Simply beautiful open source icons" size="large">
                <Row gutter={25}>
                  {featherIcons.map(icon => {
                    key += 1;
                    return (
                      <Col lg={6} md={8} sm={12} xs={24} key={key}>
                        <Icon className="icon-single">
                          <FeatherIcon icon={icon} size={18} />
                          <span>{icon}</span>
                        </Icon>
                      </Col>
                    );
                  })}
                </Row>
              </Cards>
            </IconWrapper>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default FeatherSvgIcons;
