import React from 'react';
import { Row, Col, Input } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideNav from './overview/SideNav';
import { Header } from './Style';
import MainContent from './overview/MainContent';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const DocumentManager = () => {
  const { FileManagerData } = useSelector(state => {
    return {
      FileManagerData: state.FileManager.reData,
    };
  });

  return (
    <>
      <PageHeader
        title="Documents"
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
          <Col sm={6} xs={24}>
            <SideNav />
          </Col>
          <Col md={18}>
            <Cards bodyStyle={{ height: '600px' }} headless>
              <Header>
                <Input
                  style={{ width: '350px' }}
                  size="large"
                  placeholder="large size"
                  prefix={<FeatherIcon icon="search" />}
                />
                <div className="list">
                  <NavLink to="#">
                    <FeatherIcon icon="grid" />
                  </NavLink>
                  <NavLink to="#">
                    <FeatherIcon icon="list" />
                  </NavLink>
                </div>
              </Header>
              {/* <h2>Quick Access</h2> */}
              <Row gutter={15}>
                {FileManagerData.length
                  ? FileManagerData[0].folder.map(folder => {
                      return (
                        <Col key={folder.id} md={6}>
                          <MainContent folder={folder} />
                        </Col>
                      );
                    })
                  : null}
                {FileManagerData.length
                  ? FileManagerData[0].file.map(file => {
                      return (
                        <Col key={file.id} md={6}>
                          <MainContent folder={file} />
                        </Col>
                      );
                    })
                  : null}
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

DocumentManager.propTypes = {};

export default DocumentManager;
