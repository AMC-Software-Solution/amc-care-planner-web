import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { cartGetData } from '../../redux/cart/actionCreator';

const Checkout = lazy(() => import('./overview/CheckOut'));
const CartTable = lazy(() => import('./overview/CartTable'));
const Ordersummary = lazy(() => import('./overview/Ordersummary'));

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cartData } = useSelector(state => {
    return {
      cartData: state.cart.data,
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });
  const { path, isExact } = useRouteMatch();
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

  let subtotal = 0;

  if (cartData !== null) {
    cartData.map(data => {
      const { quantity, price } = data;
      subtotal += parseInt(quantity, 10) * parseInt(price, 10);
      return subtotal;
    });
  }

  const onHandleCurrent = current => {
    setState({
      ...state,
      current,
    });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Shopping Cart"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader key="1" />
            <ExportButtonPageHeader key="2" />
            <ShareButtonPageHeader key="3" />
            <Button size="small" key="4" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <div className={isExact ? 'cartWraper' : 'checkoutWraper'}>
          <Row gutter={15}>
            <Col md={24}>
              <Cards headless>
                <Row gutter={30}>
                  <Col xxl={17} xs={24}>
                    <Switch>
                      <Suspense
                        fallback={
                          <Cards headless>
                            <Skeleton paragraph={{ rows: 10 }} active />
                          </Cards>
                        }
                      >
                        <Route
                          path={`${path}/checkout`}
                          render={() => <Checkout onCurrentChange={onHandleCurrent} />}
                        />
                        <Route exact path={path} component={CartTable} />
                      </Suspense>
                    </Switch>
                  </Col>
                  <Col xxl={7} xs={24}>
                    <Suspense
                      fallback={
                        <Cards headless>
                          <Skeleton paragraph={{ rows: 10 }} active />
                        </Cards>
                      }
                    >
                      <Ordersummary subtotal={subtotal} isExact={isExact} path={path} />
                    </Suspense>
                  </Col>
                </Row>
              </Cards>
            </Col>
          </Row>
        </div>
      </Main>
    </>
  );
};

export default ShoppingCart;
