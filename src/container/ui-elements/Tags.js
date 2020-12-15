import React, { useState } from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Tag } from '../../components/tags/tags';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Tags = () => {
  const [state, setstate] = useState({
    checke: null,
  });
  const log = () => {
    // console.log(e);
  };

  const checked = checke => {
    setstate({ ...state, checke });
  };

  const preventDefault = () => {
    // console.log('Clicked! But prevent default.');
  };

  return (
    <>
      <PageHeader
        title="Tags"
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
          <Col md={12} xs={24}>
            <Cards title="Basic" caption="The simplest use of tags">
              <div className="taglist-wrap">
                <Tag>Tag 1</Tag>
                <Tag>
                  <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
                </Tag>
                <Tag closable onClose={log}>
                  Tag 2
                </Tag>
                <Tag closable onClose={preventDefault}>
                  Prevent Default
                </Tag>
              </div>
            </Cards>
            <Cards title="Hot Tag" caption="The simplest use of tags">
              <Tag hottags onChange={checked} data={['Movies', 'Books', 'Music', 'Sports']} />
            </Cards>
          </Col>
          <Col md={12} xs={24}>
            <Cards title="Colorful Tag" caption="The simplest use of tags">
              <h4 style={{ marginBottom: 16 }}>Presets:</h4>
              <div className="taglist-wrap">
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
              </div>
              <h4 style={{ margin: '16px 0' }}>Custom:</h4>
              <div className="taglist-wrap">
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
              </div>
            </Cards>
            <Cards title="Animated Tag" caption="The simplest use of tags">
              <Tag animate onChange={checked} data={['Movies', 'Books', 'Music', 'Sports']} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Tags;
