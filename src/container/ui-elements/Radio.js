import React from 'react';
import { Row, Col, Radio } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Radios = () => {
  return (
    <>
      <PageHeader
        title="Radio"
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
          <Col lg={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of Radio">
              <Radio>Radio</Radio>
            </Cards>

            <Cards title="Radio Disabled" caption="The simplest use of Radio">
              <Radio.Group defaultValue="b">
                <div className="ant-radio-vertical">
                  <Radio value="a" disabled>
                    Disabled
                  </Radio>
                  <Radio value="b" disabled>
                    Disabled
                  </Radio>
                </div>
              </Radio.Group>
            </Cards>

            <Cards title="Vertical Radio" caption="The simplest use of Radio">
              <Radio.Group>
                <div className="ant-radio-vertical">
                  <Radio value={1}>A</Radio>
                  <Radio value={2}>B</Radio>
                  <Radio value={3}>C</Radio>
                  <Radio value={4}>D</Radio>
                </div>
              </Radio.Group>
            </Cards>
          </Col>

          <Col lg={12} xs={24}>
            <Cards title="Radio Style" caption="The simplest use of Radio">
              <div className="radio-size-wrap">
                <div>
                  <Radio.Group defaultValue="a">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                  </Radio.Group>
                </div>
                <div style={{ marginTop: 16 }}>
                  <Radio.Group defaultValue="a">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b" disabled>
                      Shanghai
                    </Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                  </Radio.Group>
                </div>
                <div style={{ marginTop: 16 }}>
                  <Radio.Group disabled defaultValue="a">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                  </Radio.Group>
                </div>
              </div>
            </Cards>
            <Cards title="Horizontal Radio" caption="The simplest use of Radio">
              <Radio.Group>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Radio.Group>
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <div className="radio-size-wrap">
              <Cards title="Radio Size" caption="The simplest use of Radio">
                <div>
                  <Radio.Group defaultValue="a" size="large">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                  </Radio.Group>
                </div>
                <div style={{ marginTop: 16 }}>
                  <Radio.Group defaultValue="a">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                  </Radio.Group>
                </div>
                <div style={{ marginTop: 16 }}>
                  <Radio.Group defaultValue="a" size="small">
                    <Radio.Button value="a">Hangzhou</Radio.Button>
                    <Radio.Button value="b">Shanghai</Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                  </Radio.Group>
                </div>
              </Cards>
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Radios;
