import React, { useState } from 'react';
import { Row, Col, Input } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useSelector } from 'react-redux';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, AutoCompleteWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AutoComplete } from '../../components/autoComplete/autoComplete';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { TextArea } = Input;
const AutoCompletess = () => {
  const searchData = useSelector(state => state.headerSearchData);

  const [state, setState] = useState({
    dataSource: [],
    notData: searchData,
  });
  const { dataSource, notData } = state;

  const onSearch = searchText => {
    let arrayData = [];
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    if (data.length) {
      data.map(item => arrayData.push(item.title));
    } else {
      arrayData = ['Data Not Found!'];
    }
    setState({
      dataSource: !searchText ? [] : arrayData,
    });
  };

  const patternSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      notData: data,
    });
  };

  return (
    <>
      <PageHeader
        title="AutoComplete"
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
        <AutoCompleteWrapper>
          <Row gutter={25}>
            <Col md={12} sm={24} xs={24}>
              <Cards title="Basic Usage">
                <div className="auto-complete-input">
                  <AutoComplete dataSource={dataSource} onSearch={onSearch} />
                  <AutoComplete dataSource={dataSource} onSearch={onSearch} />
                </div>
              </Cards>
              <Cards title="Customize Input Component">
                <div className="auto-complete-input">
                  <AutoComplete
                    customComponent={<TextArea placeholder="input here" className="custom" style={{ height: 50 }} />}
                    dataSource={dataSource}
                    onSearch={onSearch}
                  />
                </div>
              </Cards>
              <Cards title="Lookup-Patterns - Certain Category">
                <AutoComplete onSearch={patternSearch} dataSource={notData} width="100%" patterns />
              </Cards>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className="auto-complete-input">
                <Cards title="Customize">
                  <AutoComplete dataSource={dataSource} onSearch={onSearch} />
                </Cards>
              </div>

              <Cards title="Lookup-Patterns - Uncertain Category">
                <AutoComplete dataSource={notData} onSearch={patternSearch} width="100%" patterns patternButtons />
              </Cards>
            </Col>
          </Row>
        </AutoCompleteWrapper>
      </Main>
    </>
  );
};

export default AutoCompletess;
