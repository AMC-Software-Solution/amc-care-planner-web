import React from 'react';
import { Row, Col, Input } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Image } from 'antd';
// import MainContent from './overview/MainContent';
import { FileManagerContentWrap } from './Style';
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
          <Col sm={5} xs={24}>
            {/* <SideNav /> */}
          </Col>
          <Col md={24}>
            <FileManagerContentWrap>
              <Cards headless>
                <div className="file-manager-header">
                  <Input
                    style={{ width: '350px' }}
                    size="large"
                    placeholder="large size"
                    prefix={<FeatherIcon icon="search" />}
                  />
                  <div className="view-mode">
                    <NavLink to="#">
                      <FeatherIcon icon="grid" />
                    </NavLink>
                    <NavLink to="#">
                      <FeatherIcon icon="list" />
                    </NavLink>
                  </div>
                </div>
                <div className="file-manager-content">
                  <h2 className="file-manager-content__title">Employee Documents</h2>
                  <Row gutter={15}>
                    <Col style={{ display: 'flex' }}>
                      <Image
                        width={200}
                        src="https://templatelab.com/wp-content/uploads/2019/06/letter-of-application-43.jpg"
                      />
                    </Col>
                    <Col style={{ display: 'flex' }}>
                      <Image
                        width={200}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSza2NJSbQYRrcsONdBtQvsrTpw8-pn5psfiQ&usqp=CAU"
                      />
                    </Col>
                    <Col style={{ display: 'flex' }}>
                      <Image
                        width={200}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSSC4CAWu8OEg6sOnhNdJBa8Q0di-YY4yXQ&usqp=CAU"
                      />
                    </Col>
                    <Col style={{ display: 'flex' }}>
                      <Image
                        width={200}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvg-q4793ZykDo-mxYJX-K6EoZ6wU7mWMo1w&usqp=CAU"
                      />
                    </Col>
                    {/* {FileManagerData.length
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
                      : null} */}
                  </Row>
                  {/* <Row>
                    <Col xs={24}>
                      <RecentFileTable />
                    </Col>
                  </Row> */}
                </div>
              </Cards>
            </FileManagerContentWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
};

DocumentManager.propTypes = {};

export default DocumentManager;
