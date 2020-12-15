import React from 'react';
import { Rate, Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Heading from '../../../../components/heading/heading';
import { Button } from '../../../../components/buttons/buttons';
import { ProductCard } from '../../Style';
import { updateWishList } from '../../../../redux/product/actionCreator';

const ProductCardsList = ({ product }) => {
  const { id, name, rate, price, oldPrice, popular, img, description } = product;
  const dispatch = useDispatch();

  return (
    <ProductCard className="list-view" style={{ marginBottom: 20 }}>
      <div className="product-list">
        <Row gutter={15}>
          <Col md={6} xs={24}>
            <figure>
              <img style={{ width: '100%' }} src={require(`../../../../${img}`)} alt="" />
            </figure>
          </Col>
          <Col md={12} xs={24}>
            <div className="product-single-description">
              <Heading className="product-single-title" as="h5">
                <NavLink to={`/admin/ecommerce/productDetails/${id}`}>{name}</NavLink>
              </Heading>
              <p>{description}</p>
            </div>
          </Col>
          <Col md={6} xs={24}>
            <div className="product-single-info">
              <Link onClick={() => dispatch(updateWishList(id))} className="btn-heart" to="#">
                <FeatherIcon
                  icon="heart"
                  size={14}
                  color={popular ? '#FF4D4F' : '#9299B8'}
                  fill={popular ? '#FF4D4F' : 'none'}
                />
              </Link>
              <p className="product-single-price">
                <span className="product-single-price__new">${price} </span>
                {oldPrice && (
                  <>
                    <del> ${oldPrice} </del>
                    <span className="product-single-price__offer"> 60% Off</span>
                  </>
                )}
              </p>
              <div className="product-single-rating">
                <Rate allowHalf defaultValue={rate} disabled /> 4.9
                <span className="total-reviews"> 778 Reviews</span>
              </div>
              <div className="product-single-action">
                <Button className="btn-cart" size="small" type="white" outlined>
                  <FeatherIcon icon="shopping-bag" size={14} />
                  Add To Cart
                </Button>
                <Button size="small" type="primary">
                  Buy Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </ProductCard>
  );
};

ProductCardsList.propTypes = {
  product: PropTypes.object,
};

export default ProductCardsList;
