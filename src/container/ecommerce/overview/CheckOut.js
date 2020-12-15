import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Select, Radio, Table } from 'antd';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Steps } from '../../../components/steps/steps';
import Heading from '../../../components/heading/heading';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Button } from '../../../components/buttons/buttons';
import { BasicFormWrapper } from '../../styled';
import { FigureCart, CheckoutWrapper, ProductTable, OrderSummary } from '../Style';
import { cartGetData, cartUpdateQuantity, cartDelete } from '../../../redux/cart/actionCreator';

const { Option } = Select;
const CheckOut = ({ onCurrentChange }) => {
  const dispatch = useDispatch();
  const { cartData, rtl } = useSelector(state => {
    return {
      cartData: state.cart.data,
      isLoading: state.cart.loading,
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 1,
  });

  const { status, isFinished, current } = state;

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

  const PlaceOrder = (
    <Button className="btn-proceed" type="secondary" size="large">
      <Link to="#">Place Order</Link>
    </Button>
  );

  const next = () => {
    onCurrentChange(current, PlaceOrder);
    setState({
      ...state,
      status: 'process',
      current: current + 1,
    });
  };

  const prev = () => {
    onCurrentChange(current, PlaceOrder);
    setState({
      ...state,
      status: 'process',
      current: current - 1,
    });
  };

  const done = () => {
    const confirm = window.confirm('Are sure to submit order?');
    onCurrentChange(current, PlaceOrder);
    if (confirm) {
      setState({
        ...state,
        status: 'finish',
        isFinished: true,
        current: 0,
      });
    }
  };

  const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  const dataSource = [];

  let subtotal = 0;

  if (cartData !== null) {
    cartData.map(data => {
      const { id, img, name, quantity, price, size, color } = data;
      subtotal += parseInt(quantity, 10) * parseInt(price, 10);
      return dataSource.push({
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

  const columns = [
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
  ];

  return (
    <CheckoutWrapper>
      <Steps
        isswitch
        current={0}
        status={status}
        steps={[
          {
            title: 'Create Account',
            content: (
              <BasicFormWrapper className="basic-form-inner">
                <div className="atbd-form-checkout">
                  <Row justify="center">
                    <Col sm={22} xs={24}>
                      <div className="create-account-form">
                        <Heading as="h4">1. Please Create Your Account</Heading>
                        <Form form={form} name="account">
                          <Form.Item name="username" label="Username">
                            <Input placeholder="Username" />
                          </Form.Item>
                          <Form.Item name="email" rules={[{ type: 'email' }]} label="Email Address">
                            <Input placeholder="name@gmail.com" />
                          </Form.Item>
                          <Form.Item
                            name="password"
                            rules={[
                              {
                                min: 6,
                                message: 'Enter a valid password. Min 6 characters long.',
                              },
                            ]}
                            label="Password"
                          >
                            <Input.Password placeholder="Password" />
                            <span className="input-message">Enter a valid password. Min 6 characters long</span>
                          </Form.Item>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                </div>
              </BasicFormWrapper>
            ),
          },
          {
            title: 'Shipping Address',
            content: (
              <BasicFormWrapper className="basic-form-inner">
                <div className="atbd-form-checkout">
                  <Row justify="center">
                    <Col sm={22} xs={24}>
                      <div className="shipping-form">
                        <Heading as="h4">2. Please Fill in Your Shipping Address</Heading>
                        <Form form={form} name="address">
                          <Form.Item name="name" label="Contact Name">
                            <Input placeholder="Ibn adam" />
                          </Form.Item>
                          <Form.Item
                            name="company"
                            label={
                              <span>
                                Company Name <span>(Optional)</span>
                              </span>
                            }
                          >
                            <Input placeholder="adam" />
                          </Form.Item>
                          <Form.Item name="phone" label="Phone Number">
                            <Input placeholder="+880" />
                          </Form.Item>
                          <Form.Item name="country" initialValue="" label="Country/Region">
                            <Select style={{ width: '100%' }}>
                              <Option value="">Please Select</Option>
                              <Option value="bangladesh">Bangladesh</Option>
                              <Option value="india">India</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item name="street" label="Street Address">
                            <Input placeholder="House Number and Street Name" />
                          </Form.Item>
                          <Form.Item name="street2" label="">
                            <Input placeholder="Apartment, Suite, Unit etc." />
                          </Form.Item>
                          <Form.Item name="city" label="City">
                            <Input placeholder="Enter City" />
                          </Form.Item>
                          <Form.Item name="zip" label="Zip/Postal Code">
                            <Input placeholder="Enter Zip" />
                          </Form.Item>
                        </Form>
                      </div>
                    </Col>
                  </Row>
                </div>
              </BasicFormWrapper>
            ),
          },
          {
            title: 'Payment Method',
            content: (
              <BasicFormWrapper className="basic-form-inner">
                <div className="atbd-form-checkout">
                  <Row justify="center">
                    <Col sm={22} xs={24}>
                      <div className="payment-method-form">
                        <Heading as="h4">3. Please Please Select Your Payment Method</Heading>
                        <div className="shipping-selection">
                          <Radio.Group style={{ width: '100%' }}>
                            <div className="shipping-selection__card">
                              <Radio style={{ width: '100%' }} value="card">
                                <Cards
                                  headless
                                  bodyStyle={{
                                    backgroundColor: '#F8F9FB',
                                    borderRadius: '20px',
                                    border: '1px solid #F1F2F6',
                                  }}
                                >
                                  <div className="supported-card d-flex">
                                    <span>Credit/Debit Card</span>
                                    <div className="supported-card_logos">
                                      <img
                                        style={{ width: '50px' }}
                                        src={require('../../../static/img/cards-logo/ms.png')}
                                        alt=""
                                      />
                                      <img
                                        style={{ width: '50px' }}
                                        src={require('../../../static/img/cards-logo/american-express.png')}
                                        alt=""
                                      />
                                      <img
                                        style={{ width: '50px' }}
                                        src={require('../../../static/img/cards-logo/visa.png')}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <Cards headless style={{ marginBottom: 0 }}>
                                    <Form form={form} name="info">
                                      <Form.Item name="number" label="Card Number">
                                        <Input placeholder="6547-8702-6987-2527" />
                                      </Form.Item>
                                      <Form.Item name="name" label="Name on Card">
                                        <Input placeholder="Full name" />
                                      </Form.Item>
                                      <Form.Item name="month" initialValue="" label="Expiration Date">
                                        <Select style={{ width: '100%' }}>
                                          <Option value="">MM</Option>
                                          {month.map(value => (
                                            <Option key={value} value={value}>
                                              {value}
                                            </Option>
                                          ))}
                                        </Select>
                                      </Form.Item>
                                      <Form.Item name="year" initialValue="">
                                        <Select style={{ width: '100%' }}>
                                          <Option value="">YY</Option>
                                          <Option value={new Date().getFullYear()}>{new Date().getFullYear()}</Option>
                                          {month.map(value => (
                                            <Option
                                              key={value}
                                              value={parseInt(new Date().getFullYear(), 10) + parseInt(value, 10)}
                                            >
                                              {parseInt(new Date().getFullYear(), 10) + parseInt(value, 10)}
                                            </Option>
                                          ))}
                                        </Select>
                                      </Form.Item>
                                      <Form.Item name="cvv" label="CVV">
                                        <div className="cvv-wrap">
                                          <Input style={{ width: '60%' }} placeholder="XXX" />
                                          <Link className="input-leftText" to="#">
                                            What is this?
                                          </Link>
                                        </div>
                                      </Form.Item>
                                    </Form>
                                  </Cards>
                                </Cards>
                              </Radio>
                            </div>
                            <div className="shipping-selection__paypal">
                              <Radio value="payPal" style={{ width: '100%' }}>
                                Pay With PayPal
                                <img src={require('../../../static/img/PayPalLogo.png')} alt="paypal" />
                              </Radio>
                            </div>
                            <div className="shipping-selection__cash">
                              <Radio value="cash" style={{ width: '100%' }}>
                                Cash on delivery
                              </Radio>
                            </div>
                          </Radio.Group>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </BasicFormWrapper>
            ),
          },
          {
            title: 'Review Order',
            content:
              status !== 'finish' ? (
                <BasicFormWrapper style={{ width: '100%' }}>
                  <div className="atbd-review-order" style={{ width: '100%' }}>
                    <Heading as="h4">4. Review and confirm Order</Heading>
                    <Cards bodyStyle={{ backgroundColor: '#F8F9FB', borderRadius: 10 }} headless>
                      <div className="atbd-review-order__single">
                        <Cards headless>
                          <div className="atbd-review-order__shippingTitle">
                            <Heading as="h5">
                              Shipping Information
                              <Link to="#">
                                <FeatherIcon icon="edit" />
                                Edit
                              </Link>
                            </Heading>
                          </div>
                          <article className="atbd-review-order__shippingInfo">
                            <Radio.Group style={{ width: '100%' }}>
                              <Radio value="ms" style={{ width: '100%' }}>
                                <div className="shipping-info-text">
                                  <Heading as="h6">Ibn Adam</Heading>
                                  <Heading as="h6">Phone: +61412345678</Heading>
                                  <p>
                                    795 Folsom Ave, Suite 600 <br />
                                    San Francisco, CA 94107 <br />
                                    United States
                                  </p>
                                </div>
                              </Radio>
                            </Radio.Group>
                            <Link className="btn-addNew" to="#">
                              + Add New Address
                            </Link>
                          </article>
                        </Cards>
                      </div>
                      <div className="atbd-review-order__single">
                        <Cards headless>
                          <div>
                            <Heading as="h5">Payment Method</Heading>
                          </div>
                          <Radio.Group style={{ width: '100%' }}>
                            <Radio value="ms" style={{ width: '100%' }}>
                              <div className="method-info">
                                <img src={require('../../../static/img/ms.svg')} alt="" />
                                **** **** **** 2597
                              </div>
                            </Radio>
                          </Radio.Group>
                          <Link className="btn-addCard" to="#">
                            + Add New Card
                          </Link>
                        </Cards>
                      </div>

                      <div className="atbd-review-order__single">
                        <Cards headless>
                          <>
                            <ProductTable>
                              <div className="table-cart table-responsive">
                                <Table pagination={false} dataSource={dataSource} columns={columns} />
                              </div>
                            </ProductTable>

                            <Row justify="end">
                              <Col xxl={8} xl={5} md={9} sm={14} xs={24} offset={!rtl ? 10 : 0}>
                                <OrderSummary>
                                  <div className="invoice-summary-inner">
                                    <ul className="summary-list">
                                      <li>
                                        <span className="summary-list-title">Subtotal :</span>
                                        <span className="summary-list-text">{`$${subtotal}`}</span>
                                      </li>
                                      <li>
                                        <span className="summary-list-title">Discount :</span>
                                        <span className="summary-list-text">{`$${-20}`}</span>
                                      </li>
                                      <li>
                                        <span className="summary-list-title">Shipping Charge :</span>
                                        <span className="summary-list-text">{`$${30}`}</span>
                                      </li>
                                    </ul>
                                    <Heading className="summary-total" as="h4">
                                      <span className="summary-total-label">Total : </span>
                                      <span className="summary-total-amount">{`$${subtotal + 30 - 20}`}</span>
                                    </Heading>
                                  </div>
                                </OrderSummary>
                              </Col>
                            </Row>
                          </>
                        </Cards>
                      </div>
                    </Cards>
                  </div>
                </BasicFormWrapper>
              ) : (
                <Row justify="start" style={{ width: '100%' }}>
                  <Col xl={20} xs={24}>
                    <div className="checkout-successful">
                      <Cards
                        headless
                        bodyStyle={{
                          backgroundColor: '#F8F9FB',
                          borderRadius: '20px',
                        }}
                      >
                        <Cards headless>
                          <span className="icon-success">
                            <FeatherIcon icon="check" />
                          </span>
                          <Heading as="h3">Payment Successful</Heading>
                          <p>Thank you! We have received your Payment</p>
                        </Cards>
                      </Cards>
                    </div>
                  </Col>
                </Row>
              ),
          },
        ]}
        onNext={next}
        onPrev={prev}
        onDone={done}
        isfinished={isFinished}
      />
    </CheckoutWrapper>
  );
};

CheckOut.propTypes = {
  onCurrentChange: PropTypes.func,
};

export default CheckOut;
