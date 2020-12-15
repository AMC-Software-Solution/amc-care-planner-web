import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Table } from 'antd';
import { RevenueTableWrapper } from '../../style';
import { ChartjsLineChart } from '../../../../components/charts/chartjs';
import { generatedFilterData, generatedGetData } from '../../../../redux/chartContent/actionCreator';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const RevenueGenerated = () => {
  const dispatch = useDispatch();
  const { generatedState } = useSelector(state => {
    return {
      generatedState: state.chartContent.generatedData,
    };
  });
  const [state, setState] = useState({
    generated: 'year',
  });
  useEffect(() => {
    if (generatedGetData) {
      dispatch(generatedGetData());
    }
  }, [dispatch]);

  const handleActiveChangeGenerated = value => {
    setState({
      ...state,
      generated: value,
    });
    dispatch(generatedFilterData(value));
  };

  const revenueColumns = [
    {
      title: 'Name of Source',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Visitors',
      dataIndex: 'visitors',
      key: 'visitors',
    },
    {
      title: 'Page View',
      dataIndex: 'page_View',
      key: 'page_View',
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
    },
    {
      title: 'Trend',
      dataIndex: 'trend',
      key: 'trend',
      width: 120,
    },
  ];

  const revenueData = [];
  if (generatedState !== null)
    generatedState.map(value => {
      const { key, name, visitors, page_View, revenue, trend } = value;

      return revenueData.push({
        key,
        name,
        visitors,
        page_View,
        revenue,
        trend: (
          <ChartjsLineChart
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
            datasets={[
              {
                data: trend.data,
                borderColor: trend.borderColor,
                borderWidth: 2,
                fill: false,
              },
            ]}
            height={30}
            width={120}
            options={{
              legend: {
                display: false,
                labels: {
                  display: false,
                },
              },
              scales: {
                yAxes: [
                  {
                    stacked: true,
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    stacked: true,
                    barPercentage: 1,
                    gridLines: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                ],
              },
              elements: {
                point: {
                  radius: 0,
                },
              },
            }}
          />
        ),
      });
    });

  return (
    <RevenueTableWrapper>
      <div className="full-width-table">
        <Cards
          isbutton={
            <div className="card-nav">
              <ul>
                <li className={state.generated === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeGenerated('week')} to="#">
                    Week
                  </Link>
                </li>
                <li className={state.generated === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeGenerated('month')} to="#">
                    Month
                  </Link>
                </li>
                <li className={state.generated === 'year' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeGenerated('year')} to="#">
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          more={
            <>
              <NavLink to="#">
                <FeatherIcon size={16} icon="printer" />
                <span>Printer</span>
              </NavLink>
              <NavLink to="#">
                <FeatherIcon size={16} icon="book-open" />
                <span>PDF</span>
              </NavLink>
              <NavLink to="#">
                <FeatherIcon size={16} icon="file-text" />
                <span>Google Sheets</span>
              </NavLink>
              <NavLink to="#">
                <FeatherIcon size={16} icon="x" />
                <span>Excel (XLSX)</span>
              </NavLink>
              <NavLink to="#">
                <FeatherIcon size={16} icon="file" />
                <span>CSV</span>
              </NavLink>
            </>
          }
          title="Source Of Revenue Generated"
          size="large"
        >
          <div className="table-bordered revenue-table table-responsive">
            <Table columns={revenueColumns} dataSource={revenueData} pagination={false} />
          </div>
        </Cards>
      </div>
    </RevenueTableWrapper>
  );
};

export default RevenueGenerated;
