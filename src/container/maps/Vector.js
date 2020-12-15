import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Main } from '../styled';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const VectorMaps = () => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [content, setContent] = useState('');
  const rounded = num => {
    if (num > 1000000000) {
      return `${Math.round(num / 100000000) / 10}Bn`;
    }
    if (num > 1000000) {
      return `${Math.round(num / 100000) / 10}M`;
    }
    return `${Math.round(num / 100) / 10}K`;
  };
  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }
  return (
    <>
      <PageHeader title="Vector Map" />
      <Main>
        <Row gutter={25}>
          <Col xs={24}>
            <div className="rsm_map">
              <Cards title="World Map" size="large">
                <div className="world-map">
                  <ReactTooltip>{content}</ReactTooltip>
                  <ComposableMap
                    data-tip=""
                    data-html
                    projectionConfig={{
                      scale: window.innerWidth <= 479 ? 190 : 120,
                    }}
                    viewBox={`20, ${window.innerWidth <= 479 ? 20 : 150}, 800, ${window.innerWidth <= 479 ? 500 : 320}`}
                  >
                    <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}>
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map(geo => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              onMouseEnter={() => {
                                const { NAME, POP_EST } = geo.properties;
                                setContent(`${NAME} — ${rounded(POP_EST)}`);
                              }}
                              onMouseLeave={() => {
                                setContent('');
                              }}
                              fill="#DBE1E8"
                              stroke="#FFF"
                              strokeWidth={0.5}
                              style={{
                                default: {
                                  fill: '#DBE1E8',
                                  outline: 'none',
                                },
                                hover: {
                                  fill: '#5F63F2',
                                  outline: 'none',
                                },
                                pressed: {
                                  fill: '#5F63F2',
                                  outline: 'none',
                                },
                              }}
                            />
                          ))
                        }
                      </Geographies>
                    </ZoomableGroup>
                  </ComposableMap>

                  <div className="controls">
                    <button type="button" onClick={handleZoomIn}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                    <button type="button" onClick={handleZoomOut}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Cards>
            </div>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default VectorMaps;
