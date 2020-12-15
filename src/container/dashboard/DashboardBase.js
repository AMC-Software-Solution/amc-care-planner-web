import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { DashboardBaseStyleWrap } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { Main } from '../styled';
import Palette from '../../components/color-palette/palette';
import config from '../../config/config';
import Heading from '../../components/heading/heading';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

// @Todo console warning from button

const { theme } = config;
const DashboardBase = () => {
  return (
    <>
      <PageHeader
        ghost
        title="Theme Configuration"
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
        <Row gutter={15}>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Theme Colors" size="large">
                <Row gutter={15}>
                  <Col lg={2}>
                    <Palette colorCode={theme['primary-color']}>Primary</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['secondary-color']}>Secondary</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['success-color']}>Success</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['info-color']}>Info</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['warning-color']}>Warning</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['error-color']}>Error</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['dark-color']}>Dark</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['gray-color']}>Gray</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['light-color']}>Light</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['extra-light-color']}>Extra Light</Palette>
                  </Col>
                </Row>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Hover Colors" size="large">
                <Row gutter={15}>
                  <Col lg={2}>
                    <Palette colorCode={theme['primary-hover']}>Primary</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['secondary-hover']}>Secondary</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['success-hover']}>Success</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['info-hover']}>Info</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['warning-hover']}>Warning</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['error-hover']}>Error</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['dark-hover']}>Dark</Palette>
                  </Col>
                  <Col lg={2}>
                    <Palette colorCode={theme['gray-hover']}>Gray</Palette>
                  </Col>
                </Row>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Gradient Colors" size="large">
                <Row gutter={15}>
                  <Col md={5}>
                    <Palette
                      gradient
                      content
                      direction="90deg"
                      colorCode={[theme['primary-color'], theme['secondary-color']]}
                    >
                      {theme['primary-color']}
                    </Palette>
                  </Col>
                  <Col md={5}>
                    <Palette
                      gradient
                      content
                      direction="90deg"
                      colorCode={[theme['secondary-color'], theme['warning-color']]}
                    >
                      {theme['secondary-color']}
                    </Palette>
                  </Col>
                  <Col md={5}>
                    <Palette
                      gradient
                      content
                      direction="90deg"
                      colorCode={[theme['primary-color'], theme['info-color']]}
                    >
                      {theme['primary-color']}
                    </Palette>
                  </Col>
                </Row>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Border Colors" size="large">
                <Row gutter={15}>
                  <Col md={6}>
                    <Palette bordered content colorCode={theme['border-color-light']}>
                      Border Color 1
                    </Palette>
                  </Col>
                  <Col md={6}>
                    <Palette bordered content colorCode={theme['border-color-normal']}>
                      Border Color 2
                    </Palette>
                  </Col>
                  <Col md={6}>
                    <Palette bordered content colorCode={theme['border-color-deep']}>
                      Border Color 3
                    </Palette>
                  </Col>
                </Row>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Background Gray Colors" size="large">
                <Row gutter={15}>
                  <Col md={6}>
                    <Palette bg content colorCode={theme['bg-color-light']}>
                      BG Color 1
                    </Palette>
                  </Col>
                  <Col md={6}>
                    <Palette bg content colorCode={theme['bg-color-normal']}>
                      BG Color 2
                    </Palette>
                  </Col>
                  <Col md={6}>
                    <Palette bg content colorCode={theme['bg-color-deep']}>
                      BG Color 3
                    </Palette>
                  </Col>
                </Row>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Buttons" size="large">
                <Row gutter={15}>
                  <Col md={6}>
                    <Button type="primary" size="small" style={{ marginRight: '10px', marginBottom: '10px' }}>
                      Small
                    </Button>
                    <Button type="primary" style={{ marginRight: '10px', marginBottom: '10px' }}>
                      Normal
                    </Button>
                    <Button type="primary" size="large" style={{ marginRight: '10px', marginBottom: '10px' }}>
                      Large Button
                    </Button>
                    <Button outlined type="primary" size="small" style={{ marginRight: '10px', marginBottom: '10px' }}>
                      Small
                    </Button>
                    <Button outlined type="primary" style={{ marginRight: '10px', marginBottom: '10px' }}>
                      Normal
                    </Button>
                    <Button outlined type="primary" size="large" style={{ marginRight: '10px', marginBottom: '10px' }}>
                      Large Button
                    </Button>
                    <Button type="secondary" size="small" style={{ marginRight: '10px', marginBottom: '10px' }}>
                      Small
                    </Button>
                    <Button type="secondary" style={{ marginRight: '10px', marginBottom: '10px' }}>
                      Normal
                    </Button>
                    <Button type="secondary" size="large">
                      Large Button
                    </Button>
                  </Col>
                </Row>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
          <Col xs={24}>
            <DashboardBaseStyleWrap>
              <Cards headless title="Typography Inter" size="large">
                <Row gutter={15}>
                  <Col xs={24}>
                    <Row>
                      <Col lg={9} sm={24} xs={24}>
                        <Heading>h1. Default Heading</Heading>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font Size - 30px</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font weight - 600</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Line Height - 38px</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24}>
                    <Row>
                      <Col lg={9} sm={24} xs={24}>
                        <Heading as="h2">h2. Default Heading</Heading>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font Size - 24px</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font weight - 600</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Line Height - 30px</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24}>
                    <Row>
                      <Col lg={9} sm={24} xs={24}>
                        <Heading as="h3">h3. Default Heading</Heading>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font Size - 22px</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font weight - 600</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Line Height - 27px</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24}>
                    <Row>
                      <Col lg={9} sm={24} xs={24}>
                        <Heading as="h4">h4. Default Heading</Heading>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font Size - 20px</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font weight - 600</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Line Height - 24px</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24}>
                    <Row>
                      <Col lg={9} sm={24} xs={24}>
                        <Heading as="h5">h5. Default Heading</Heading>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font Size - 18px</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font weight - 600</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Line Height - 22px</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24}>
                    <Row>
                      <Col lg={9} sm={24} xs={24}>
                        <Heading as="h6">h6. Default Heading</Heading>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font Size - 16px</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Font weight - 600</p>
                      </Col>
                      <Col lg={5} sm={24} xs={24}>
                        <p>Line Height - 20px</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Cards>
            </DashboardBaseStyleWrap>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default DashboardBase;
