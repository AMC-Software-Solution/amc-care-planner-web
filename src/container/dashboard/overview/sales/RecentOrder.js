import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Table } from 'antd';
import { topSaleGetData, topSaleFilterData } from '../../../../redux/chartContent/actionCreator';
import { Cards } from '../../../../components/cards/frame/cards-frame';

const RecentOrder = () => {
  const dispatch = useDispatch();
  const { topSaleState } = useSelector(state => {
    return {
      topSaleState: state.chartContent.topSaleData,
    };
  });
  const [state, setState] = useState({
    products: 'year',
  });
  useEffect(() => {
    if (topSaleGetData) {
      dispatch(topSaleGetData());
    }
  }, [dispatch]);

  const handleActiveChangeProducts = value => {
    setState({
      ...state,
      products: value,
    });
    dispatch(topSaleFilterData(value));
  };

  const sellingData = [];
  if (topSaleState !== null) {
    topSaleState.map(value => {
      const { key, name, price, sold, revenue } = value;
      return sellingData.push({
        key,
        name,
        price,
        sold,
        revenue,
      });
    });
  }

  const moreContent = (
    <>
      <NavLink to="#">
        <span>2 years</span>
      </NavLink>
      <NavLink to="#">
        <span>3 years</span>
      </NavLink>
      <NavLink to="#">
        <span>4 years</span>
      </NavLink>
    </>
  );

  const sellingColumns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Sold',
      dataIndex: 'sold',
      key: 'sold',
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
    },
  ];

  return (
    <div className="full-width-table">
      <Cards
        isbutton={
          <div className="card-nav">
            <ul>
              <li className={state.products === 'today' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeProducts('today')} to="#">
                  Today
                </Link>
              </li>
              <li className={state.products === 'week' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeProducts('week')} to="#">
                  Week
                </Link>
              </li>
              <li className={state.products === 'month' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeProducts('month')} to="#">
                  Month
                </Link>
              </li>
              <li className={state.products === 'year' ? 'active' : 'deactivate'}>
                <Link onClick={() => handleActiveChangeProducts('year')} to="#">
                  Year
                </Link>
              </li>
            </ul>
          </div>
        }
        title="Recent Orders"
        size="large"
        bodypadding="0px"
        more={moreContent}
      >
        <div className="table-bordered top-seller-table table-responsive">
          <Table columns={sellingColumns} dataSource={sellingData} pagination={false} />
        </div>
      </Cards>
    </div>
  );
};

export default RecentOrder;
