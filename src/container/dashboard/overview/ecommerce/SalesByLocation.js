import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import { LocationMapWrapper } from '../../style';
import { locationGetData, locationFilterData } from '../../../../redux/chartContent/actionCreator';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const SalesByLocation = () => {
  const dispatch = useDispatch();
  const { locationState, topMenu } = useSelector(state => {
    return {
      locationState: state.chartContent.locationData,
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });
  const [state, setState] = useState({
    location: 'today',
  });
  useEffect(() => {
    if (locationGetData) {
      dispatch(locationGetData());
    }
  }, [dispatch]);
  const handleActiveChangeLocation = value => {
    setState({
      ...state,
      location: value,
    });
    dispatch(locationFilterData(value));
  };

  const locationData = [];

  if (locationState !== null) {
    locationState.map(value => {
      const { key, location, order, revenue } = value;
      return locationData.push({
        key,
        location,
        order,
        revenue,
      });
    });
  }

  const locationColumns = [
    {
      title: 'Top Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
    },
  ];

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

  const markers = [
    {
      markerOffset: -30,
      name: 'Buenos Aires',
      coordinates: [-58.3816, -34.6037],
    },
    { markerOffset: 15, name: 'La Paz', coordinates: [-68.1193, -16.4897] },
    { markerOffset: 15, name: 'Quito', coordinates: [-78.4678, -0.1807] },
    { markerOffset: -30, name: 'Georgetown', coordinates: [-58.1551, 6.8013] },
    { markerOffset: 15, name: 'Caracas', coordinates: [-66.9036, 10.4806] },
    { markerOffset: 15, name: 'Lima', coordinates: [-77.0428, -12.0464] },
  ];

  return (
    <LocationMapWrapper>
      <div className="full-width-table">
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.location === 'today' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeLocation('today')} to="#">
                    Today
                  </Link>
                </li>
                <li className={state.location === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeLocation('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.location === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeLocation('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.location === 'year' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeLocation('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          title="Sales By Location"
          size="large"
        >
          <div className="location-map d-flex justify-content-center">
            <div>
              <ReactTooltip>{content}</ReactTooltip>
              <ComposableMap
                data-tip=""
                projectionConfig={!topMenu ? { scale: window.innerWidth <= 479 ? 140 : 115 } : { scale: 100 }}
                viewBox={`40, ${!topMenu ? (window.innerWidth <= 479 ? 130 : 140) : 160}, 800, 290`}
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
                          fill="#DDD"
                          stroke="#FFF"
                          style={{
                            default: {
                              fill: '#E3E6EF',
                              outline: 'none',
                            },
                            hover: {
                              fill: 'rgb(95, 99, 242)',
                              outline: 'none',
                            },
                            pressed: {
                              fill: '#E42',
                              outline: 'none',
                            },
                          }}
                        />
                      ))
                    }
                  </Geographies>
                  {markers.map(({ name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates}>
                      <g id="Ellipse_33" data-name="Ellipse 33" fill="#fff" stroke="#5f63f2" strokeWidth="6">
                        <circle cx="8" cy="8" r="8" stroke="none" />
                        <circle cx="8" cy="8" r="6" fill="none" />
                      </g>
                    </Marker>
                  ))}
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
          </div>

          <div className="location-table">
            <Table columns={locationColumns} dataSource={locationData} pagination={false} />
          </div>
        </Cards>
      </div>
    </LocationMapWrapper>
  );
};

export default SalesByLocation;
