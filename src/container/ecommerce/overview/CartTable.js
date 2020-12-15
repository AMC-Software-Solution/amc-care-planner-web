import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Form, Input, Spin } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { FigureCart, ProductTable, CouponForm } from '../Style';
import Heading from '../../../components/heading/heading';
import { Button } from '../../../components/buttons/buttons';
import { cartGetData, cartUpdateQuantity, cartDelete } from '../../../redux/cart/actionCreator';

const CartTable = () => {
  const dispatch = useDispatch();
  const { cartData, isLoading } = useSelector(state => {
    return {
      cartData: state.cart.data,
      isLoading: state.cart.loading,
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });

  const [form] = Form.useForm();
  const [state, setState] = useState({
    coupon: 0,
    promo: 0,
    current: 0,
  });

  useEffect(() => {
    if (cartGetData) {
      dispatch(cartGetData());
    }
  }, [dispatch]);

  const incrementUpdate = (id, quantity) => {
    const data = parseInt(quantity, 10) + 1;
    dispatch(cartUpdateQuantity(id, data, cartData));
  };

  const decrementUpdate = (id, quantity) => {
    const data = parseInt(quantity, 10) >= 2 ? parseInt(quantity, 10) - 1 : 1;
    dispatch(cartUpdateQuantity(id, data, cartData));
  };

  const cartDeleted = id => {
    const confirm = window.confirm('Are you sure to delete this product?');
    if (confirm) dispatch(cartDelete(id, cartData));
  };

  const productTableData = [];

  if (cartData !== null) {
    cartData.map(data => {
      const { id, img, name, quantity, price, size, color } = data;
      return productTableData.push({
        key: id,
        product: (
          <div className="cart-single">
            <FigureCart>
              <img style={{ width: 80 }} src={require(`../../../${img}`)} alt="" />
              <figcaption>
                <div className="cart-single__info">
                  <Heading as="h6">{name}</Heading>
                  <ul className="info-list">
                    <li>
                      <span className="info-title">Size :</span>
                      <span>{size}</span>
                    </li>
                    <li>
                      <span className="info-title"> Color :</span>
                      <span>{color}</span>
                    </li>
                  </ul>
                </div>
              </figcaption>
            </FigureCart>
          </div>
        ),
        price: <span className="cart-single-price">${price}</span>,
        quantity: (
          <div className="cart-single-quantity">
            <Button onClick={() => decrementUpdate(id, quantity)} className="btn-dec" type="default">
              <FeatherIcon icon="minus" size={12} />
            </Button>
            {quantity}
            <Button onClick={() => incrementUpdate(id, quantity)} className="btn-inc" type="default">
              <FeatherIcon icon="plus" size={12} />
            </Button>
          </div>
        ),
        total: <span className="cart-single-t-price">${quantity * price}</span>,
        action: (
          <div className="table-action">
            <Button
              onClick={() => cartDeleted(id)}
              className="btn-icon"
              to="#"
              size="default"
              type="danger"
              shape="circle"
              transparented
            >
              <FeatherIcon icon="trash-2" size={16} />
            </Button>
          </div>
        ),
      });
    });
  }

  const productTableColumns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
    },
  ];

  const submitCoupon = values => {
    setState({ ...state, coupon: values });
  };

  return (
    <>
      <ProductTable>
        {isLoading ? (
          <div className="sd-spin">
            <Spin />
          </div>
        ) : (
          <div className="table-cart table-responsive">
            <Table pagination={false} dataSource={productTableData} columns={productTableColumns} />
          </div>
        )}
      </ProductTable>

      <CouponForm>
        <Form form={form} name="submitCoupon" onFinish={submitCoupon}>
          <Row gutter={15}>
            <Col lg={4} sm={8} xs={24}>
              <Form.Item name="coupon" label="">
                <Input placeholder="Coupon Code" />
              </Form.Item>
            </Col>
            <Col lg={4} sm={8} xs={24}>
              <Button htmlType="submit" size="default" type="primary">
                Apply Coupon
              </Button>
            </Col>
          </Row>
        </Form>
      </CouponForm>
    </>
  );
};

export default CartTable;
