import React, { useState } from 'react';
import { Row, Col, Carousel, Radio } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { CarouselStyleWraper } from './ui-elements-styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Carousels = () => {
  const [state, setState] = useState({
    dotPosition: 'top',
    changeValues: [],
  });
  const onChange = (a, b, c) => {
    setState({ ...state, changeValues: [a, b, c] });
  };

  const handlePositionChange = ({ target: { value: dotPosition } }) => setState({ dotPosition });
  const { dotPosition } = state;

  return (
    <>
      <PageHeader 
        title="Carousel"
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
          <Col md={12}>
            <Cards title="Basic">
              <CarouselStyleWraper>
                <Carousel afterChange={onChange}>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                </Carousel>
              </CarouselStyleWraper>
            </Cards>

            <Cards title="Scroll automatically">
              <CarouselStyleWraper>
                <Carousel autoplay>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                </Carousel>
              </CarouselStyleWraper>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Position">
              <CarouselStyleWraper>
                <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{ marginBottom: 8 }}>
                  <Radio.Button value="top">Top</Radio.Button>
                  <Radio.Button value="bottom">Bottom</Radio.Button>
                  <Radio.Button value="left">Left</Radio.Button>
                  <Radio.Button value="right">Right</Radio.Button>
                </Radio.Group>
                <Carousel dotPosition={dotPosition}>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                </Carousel>
              </CarouselStyleWraper>
            </Cards>
            <Cards title="Fade in">
              <CarouselStyleWraper>
                <Carousel effect="fade">
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                </Carousel>
              </CarouselStyleWraper>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Carousels;
