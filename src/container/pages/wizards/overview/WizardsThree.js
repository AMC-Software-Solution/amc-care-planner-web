import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Checkbox } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useDispatch } from 'react-redux';
import { WizardWrapper, WizardThree } from '../Style';
import { Steps } from '../../../../components/steps/steps';
import Heading from '../../../../components/heading/heading';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { BasicFormWrapper } from '../../../styled';
import { cartGetData } from '../../../../redux/cart/actionCreator';

const WizardsThree = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [state, setState] = useState({
    status: 'process',
    isFinished: false,
    current: 1,
    profile: {
      fname: '',
      lname: '',
      email: '',
      address: '',
    },
  });

  const { status, isFinished, current, profile } = state;

  useEffect(() => {
    if (cartGetData) {
      dispatch(cartGetData());
    }
  }, [dispatch]);

  const next = () => {
    setState({
      ...state,
      status: 'process',
      current: current + 1,
    });
  };

  const prev = () => {
    setState({
      ...state,
      status: 'process',
      current: current - 1,
    });
  };

  const done = () => {
    const confirm = window.confirm('Are sure to submit order?');
    if (confirm) {
      setState({
        ...state,
        status: 'finish',
        isFinished: true,
        current: 0,
      });
    }
  };

  const onHandleProfile = event => {
    setState({
      ...state,
      profile: {
        ...profile,
        [event.target.name]: event.target.value,
      },
    });
  };
  return (
    <WizardWrapper>
      <WizardThree>
        <Steps
          isswitch
          current={0}
          status={status}
          steps={[
            {
              title: 'Start',
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
                            </Form.Item>
                            <Form.Item
                              name="retype"
                              rules={[
                                {
                                  min: 6,
                                  message: 'Enter a valid password. Min 6 characters long.',
                                },
                              ]}
                              label="Confirm Password"
                            >
                              <Input.Password placeholder="Confirm Password" />
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
              title: 'Profile',
              content: (
                <BasicFormWrapper className="basic-form-inner">
                  <div className="atbd-form-checkout">
                    <Row justify="center">
                      <Col sm={22} xs={24}>
                        <div className="shipping-form">
                          <Heading as="h4">2. please setup your profile</Heading>
                          <Form form={form} name="address">
                            <Form.Item label="First Name">
                              <Input onChange={onHandleProfile} name="fname" placeholder="First Name" />
                            </Form.Item>
                            <Form.Item label="Last Name">
                              <Input onChange={onHandleProfile} name="lname" placeholder="Last Name" />
                            </Form.Item>
                            <Form.Item rules={[{ type: 'email' }]} label="Email Address">
                              <Input name="email" onChange={onHandleProfile} placeholder="name@gmail.com" />
                            </Form.Item>
                            <Form.Item label="Address">
                              <Input name="address" onChange={onHandleProfile} placeholder="Address" />
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
              title: 'Hints',
              content: (
                <BasicFormWrapper className="basic-form-inner">
                  <div className="atbd-form-checkout">
                    <Row justify="center">
                      <Col sm={22} xs={24}>
                        <div className="payment-method-form profile-hints">
                          <Heading as="h4">3. Please see your hints</Heading>
                          <p>First Name : <span>{profile.fname}</span></p>
                          <p>Last Name : <span>{profile.lname}</span></p>
                          <p>Email Address : <span>{profile.email}</span></p>
                          <p>Address : <span>{profile.address}</span></p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </BasicFormWrapper>
              ),
            },
            {
              title: 'Finish',
              content:
                status !== 'finish' ? (
                  <BasicFormWrapper style={{ width: '100%' }}>
                    <div className="atbd-finish-order" style={{ width: '100%' }}>
                      <Heading as="h4">4. Let's Finished</Heading>
                      <Checkbox /> <span className="checkbox-label">I Agree with the Terms and Conditions.</span>
                    </div>
                  </BasicFormWrapper>
                ) : (
                  <Row justify="center" style={{ width: '100%' }}>
                    <Col xl={21} xs={24}>
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
                            <Heading as="h3">Thank You</Heading>
                            <p>Your registration completed successfully</p>
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
      </WizardThree>
    </WizardWrapper>
  );
};

export default WizardsThree;
