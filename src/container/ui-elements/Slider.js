import React, { useState } from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Slider } from '../../components/slider/slider';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const Sliders = () => {
  const [state, setstate] = useState({
    onChangeValue: null,
    afterChangeValue: null,
  });
  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };

  const onChange = value => {
    setstate({ ...state, onChangeValue: value });
  };

  const onAfterChange = value => {
    setstate({ ...state, afterChangeValue: value });
  };

  const style = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
  };

  return (
    <>
      <PageHeader
        ghost 
        title="Sliders"
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
          <Col md={12} sm={24} xs={24}>
            <Cards title="Basic" caption="The simplest use of slider">
              <Slider onChange={onChange} defaultValue={30} />
              <Slider onChange={onChange} range defaultValues={[20, 50]} />
            </Cards>
            <Cards title="With Input" caption="The simplest use of slider">
              <div className="slider-with-input">
                <div className="slider-with-input__single">
                  <h3>With integer</h3>
                  <Slider input min={1} max={100} />
                </div>
                <div className="slider-with-input__single">
                  <h3>With Decimal</h3>
                  <Slider input min={0} max={1} step={0.01} />
                </div>
              </div>
            </Cards>
            <Cards title="Range" caption="The simplest use of slider">
              <Slider range step={10} defaultValues={[20, 50]} onChange={onChange} onAfterChange={onAfterChange} />
            </Cards>
            <Cards title="Graduated slider vertical" caption="The simplest use of slider">
              <div>
                <div style={style}>
                  <Slider vertical defaultValue={30} />
                </div>
                <div style={style}>
                  <Slider vertical range step={10} defaultValues={[20, 50]} />
                </div>
                <div style={style}>
                  <Slider vertical range marks={marks} defaultValues={[26, 37]} />
                </div>
              </div>
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="with Icon" caption="The simplest use of slider">
              <Slider onChange={onChange} icon min={1} max={100} />
            </Cards>
            <Cards title="Graduated slider" caption="The simplest use of slider">
              <div>
                <h4>included=true</h4>
                <Slider marks={marks} defaultValue={37} />
                <Slider range marks={marks} defaultValues={[26, 37]} />

                <h4>included=false</h4>
                <Slider marks={marks} included={false} defaultValue={37} />

                <h4>marks & step</h4>
                <Slider marks={marks} step={10} defaultValue={37} />

                <h4>step=null</h4>
                <Slider marks={marks} step={null} defaultValue={37} />
              </div>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Sliders;
