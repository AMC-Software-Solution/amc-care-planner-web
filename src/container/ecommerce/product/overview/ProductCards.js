import React from 'react';
import { Rate } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Heading from '../../../../components/heading/heading';
import { Button } from '../../../../components/buttons/buttons';
import { ProductCard } from '../../Style';
import { updateWishList } from '../../../../redux/product/actionCreator';

const ProductCards = ({ product }) => {
  const { id, name, rate, price, oldPrice, popular, img } = product;
  const dispatch = useDispatch();

  return (
    <ProductCard style={{ marginBottom: 30 }}>
      <figure>
        <img src={require(`../../../../${img}`)} alt={`img${id}`} />
      </figure>
      <figcaption>
        <Link onClick={() => dispatch(updateWishList(id))} className="btn-heart" to="#">
          <FeatherIcon
            icon="heart"
            size={14}
            color={popular ? '#FF4D4F' : '#9299B8'}
            fill={popular ? '#FF4D4F' : 'none'}
          />
        </Link>
        <Heading className="product-single-title" as="h5">
          <Link to={`/admin/ecommerce/productDetails/${id}`}>{name}</Link>
        </Heading>
        <p className="product-single-price">
          <span className="product-single-price__new">${price} </span>
          {oldPrice && (
            <>
              <del className="product-single-price__old"> ${oldPrice} </del>
              <span className="product-single-price__offer"> 60% Off</span>
            </>
          )}
        </p>
        <div className="product-single-rating">
          <Rate allowHalf defaultValue={rate} disabled /> 4.9
          <span className="total-reviews"> 778 Reviews</span>
        </div>

        <div className="product-single-action">
          <Button size="small" type="white" className="btn-cart" outlined>
            <FeatherIcon icon="shopping-bag" size={14} />
            Add To Cart
          </Button>
          <Button size="small" type="primary">
            Buy Now
          </Button>
        </div>
      </figcaption>
    </ProductCard>
  );
};

ProductCards.propTypes = {
  product: PropTypes.object,
};

export default ProductCards;
