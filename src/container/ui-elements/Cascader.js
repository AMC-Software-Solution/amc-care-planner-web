import React, { useState } from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { CasCaderStyleWrapper } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Cascader } from '../../components/cascader/cascader';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];

const Cascaders = () => {
  const [state, setState] = useState({
    value: null,
    loading: [],
  });
  const onChange = value => {
    setState({ ...state, value });
  };

  const onChangeLoading = (value, selectedOptions) => {
    setState({ ...state, loading: [value, selectedOptions] });
  };

  return (
    <>
      <PageHeader
        title="Cascader"
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
            <Cards title="Basic">
              <Cascader onChange={onChange} />
            </Cards>
            {/* <Cards title="Custom trigger">
              <span>
                Unselect
                &nbsp;
                <Cascader onChange={onChange}>
                  <a href="#">Change city</a>
                </Cascader>
              </span>
            </Cards> */}
            <Cards title="Disabled option">
              <Cascader onChange={onChange} />
            </Cards>
            <Cards title="Size">
              <CasCaderStyleWrapper>
                <Cascader size="large" onChange={onChange} />
                <Cascader onChange={onChange} />
                <Cascader size="small" onChange={onChange} />
              </CasCaderStyleWrapper>
            </Cards>
            <Cards title="Search">
              <Cascader onChange={onChange} isShowSearch />
            </Cards>
            <Cards title="Custom Field Names">
              <Cascader fieldNames={{ label: 'name', value: 'code', children: 'items' }} onChange={onChange} />
            </Cards>
          </Col>

          <Col md={12} xs={24}>
            <Cards title="Default Value">
              <Cascader onChange={onChange} defaultValue={['zhejiang', 'hangzhou', 'xihu']} />
            </Cards>
            <Cards title="Hover">
              <Cascader onChange={onChange} trigger="hover" />
            </Cards>
            <Cards title="Change on select">
              <Cascader onChange={onChange} changeOnSelect />
            </Cards>
            <div className="custom-cascade-render">
              <Cards title="Custom render" style={{ width: '100%' }}>
                <Cascader onChange={onChange} />
              </Cards>
            </div>

            <Cards title="Lazy Load">
              <Cascader onChange={onChangeLoading} loading data={options} />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Cascaders;
