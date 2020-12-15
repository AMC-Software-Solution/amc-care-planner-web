import React, { useLayoutEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { Line } from 'peity-react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const Peity = () => {
  const [state, setState] = useState({
    responsive: 0,
  });
  const { responsive } = state;

  useLayoutEffect(() => {
    function updateSize() {
      const element = document.querySelector('.recharts-wrapper');
      const width =
        element !== null
          ? element.closest('.ant-card-body').clientWidth
          : document.querySelector('.ant-card-body').clientWidth;
      setState({ responsive: width });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <>
      <PageHeader title="Peity Charts" />
      <Main>
        <Row gutter={25}>
          <Col md={12} sm={24} xs={24}>
            <Cards title="LINE CHART" size="large">
              <Line
                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                height={300}
                width={responsive - 50}
                fillColor="none"
              />
            </Cards>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <Cards title="AREA CHART" size="large">
              <Line
                values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2]}
                height={300}
                width={responsive - 50}
              />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Peity;
