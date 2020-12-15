import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination, Spin } from 'antd';
import { useSelector } from 'react-redux';
import ProductCardsList from './ProductCardList';
import Heading from '../../../../components/heading/heading';
import { PaginationWrapper } from '../../Style';

const List = () => {
  const { productsAll, isLoader } = useSelector(state => {
    return {
      productsAll: state.products.data,
      isLoader: state.products.loading,
    };
  });

  const [state, setState] = useState({
    products: productsAll,
    current: 0,
    pageSize: 0,
  });
  const { products } = state;

  useEffect(() => {
    if (productsAll) {
      setState({
        products: productsAll,
      });
    }
  }, [productsAll]);

  const onShowSizeChange = (current, pageSize) => {
    setState({ ...state, current, pageSize });
  };

  const onHandleChange = (current, pageSize) => {
    // You can create pagination in here
    setState({ ...state, current, pageSize });
  };

  return (
    <Row gutter={15}>
      {isLoader ? (
        <div className="spin">
          <Spin />
        </div>
      ) : products.length ? (
        products.map(({ id, name, rate, price, oldPrice, popular, description, img }) => {
          return (
            <Col xs={24} key={id}>
              <ProductCardsList product={{ id, name, rate, price, oldPrice, popular, description, img }} />
            </Col>
          );
        })
      ) : (
        <Col xs={24}>
          <Heading as="h1">Data Not Found</Heading>
        </Col>
      )}
      <Col xs={24} className="pb-30">
        {products.length ? (
          <PaginationWrapper style={{ marginTop: 20 }}>
            <Pagination
              onChange={onHandleChange}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              pageSize={10}
              defaultCurrent={1}
              total={100}
            />
          </PaginationWrapper>
        ) : null}
      </Col>
    </Row>
  );
};

export default List;
