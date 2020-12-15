import React from 'react';
import { Row, Col } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Icons from '@ant-design/icons';
import { AnIcon, IconWrapper } from './IconStyled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const FeatherSvgIcons = () => {
  return (
    <>
      <PageHeader title="Antd Icons" />
      <Main>
        <Row gutter={15}>
          <Col xs={24}>
            <IconWrapper>
              <Cards title="Simply beautiful open source icons" size="large">
                <Row gutter={15}>
                  {Object.keys(Icons)
                    .filter(
                      item =>
                        item !== 'default' &&
                        item !== 'setTwoToneColor' &&
                        item !== 'getTwoToneColor' &&
                        item !== 'createFromIconfontCN',
                    )
                    .map(icon => {
                      const CustomTag = Icons[icon];
                      return (
                        <Col xl={6} md={12} xs={24} key={icon}>
                          <AnIcon className="icon-single">
                            <CustomTag />
                            <span> {icon}</span>
                          </AnIcon>
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
