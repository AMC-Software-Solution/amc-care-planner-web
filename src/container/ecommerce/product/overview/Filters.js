import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Rate } from 'antd';
import { useDispatch } from 'react-redux';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import Heading from '../../../../components/heading/heading';
import { Slider } from '../../../../components/slider/slider';
import { CheckboxGroup } from '../../../../components/checkbox/checkbox';
import { Sidebar, SidebarSingle } from '../../Style';
import {
  filterByPriceRange,
  filterByRating,
  filterByBrand,
  filterByCategory,
} from '../../../../redux/product/actionCreator';

const Filters = () => {
  const [state, setState] = useState({
    min: 0,
    max: 1500,
  });
  const dispatch = useDispatch();

  const { min, max } = state;
  const onChange = value => {
    setState({
      ...state,
      min: value[0],
      max: value[1],
    });
    dispatch(filterByPriceRange(value));
  };
  const onChangeRating = checkValue => {
    dispatch(filterByRating([checkValue]));
  };
  const onChangeBrand = checkValue => {
    dispatch(filterByBrand([checkValue]));
  };
  const options = [
    {
      label: (
        <>
          <span className="rating-left">
            <Rate allowHalf defaultValue={5} disabled />
          </span>
          <span className="rating-right">25</span>
        </>
      ),
      value: 5,
    },
    {
      label: (
        <>
          <span className="rating-left">
            <Rate allowHalf defaultValue={4} disabled />
            and up
          </span>
          <span className="rating-right">25</span>
        </>
      ),
      value: 4,
    },
    {
      label: (
        <>
          <span className="rating-left">
            <Rate allowHalf defaultValue={3} disabled />
            and up
          </span>
          <span className="rating-right">25</span>
        </>
      ),
      value: 3,
    },
    {
      label: (
        <>
          <span className="rating-left">
            <Rate allowHalf defaultValue={2} disabled />
            and up
          </span>
          <span className="rating-right">25</span>
        </>
      ),
      value: 2,
    },
    {
      label: (
        <>
          <span className="rating-left">
            <Rate allowHalf defaultValue={1} disabled />
            and up
          </span>
          <span className="rating-right">25</span>
        </>
      ),
      value: 1,
    },
  ];

  const optionsBrand = [
    {
      label: (
        <>
          Cup <span className="brand-count">25</span>
        </>
      ),
      value: 'cup',
    },
    {
      label: (
        <>
          Plate <span className="brand-count">25</span>
        </>
      ),
      value: 'plate',
    },
    {
      label: (
        <>
          Chair <span className="brand-count">25</span>
        </>
      ),
      value: 'chair',
    },
    {
      label: (
        <>
          Juice <span className="brand-count">25</span>
        </>
      ),
      value: 'juice',
    },
  ];

  const onChangeCategory = value => {
    dispatch(filterByCategory(value));
  };

  return (
    <Sidebar>
      <Cards
        title={
          <span>
            <FeatherIcon icon="sliders" size={14} />
            Filters
          </span>
        }
      >
        <SidebarSingle style={{ marginBottom: 32 }}>
          <Heading as="h5">Price Range</Heading>
          <Slider max={1500} onChange={onChange} range defaultValues={[min, max]} />
          <p className="price-range-text">
            ${min} - ${max}
          </p>
        </SidebarSingle>
        <SidebarSingle style={{ marginBottom: 32 }}>
          <Heading as="h5">Category</Heading>

          <nav>
            <ul className="atbd-category-list">
              <li>
                <Link onClick={() => onChangeCategory('all')} to="#">
                  <span>All</span>
                  <span className="category-count">25</span>
                </Link>
              </li>
              <li>
                <Link onClick={() => onChangeCategory('accessories')} to="#">
                  <span>Accessories</span>
                  <span className="category-count">25</span>
                </Link>
              </li>
              <li>
                <Link onClick={() => onChangeCategory('appliance')} to="#">
                  <span>Appliances</span>
                  <span className="category-count">25</span>
                </Link>
              </li>
              <li>
                <Link onClick={() => onChangeCategory('bags')} to="#">
                  <span>Bags</span>
                  <span className="category-count">25</span>
                </Link>
              </li>
              <li>
                <Link onClick={() => onChangeCategory('electronic')} to="#">
                  <span>Electronic</span>
                  <span className="category-count">25</span>
                </Link>
              </li>
              <li>
                <Link onClick={() => onChangeCategory('entertainment')} to="#">
                  <span>Entertainment</span>
                  <span className="category-count">25</span>
                </Link>
              </li>
              <li>
                <Link onClick={() => onChangeCategory('induction')} to="#">
                  <span>Induction</span>
                  <span className="category-count">25</span>
                </Link>
              </li>
              <li>
                <Link onClick={() => onChangeCategory('mobile')} to="#">
                  <span>Mobile Phone</span>
                  <span className="category-count">25</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="sidebar-single__action">
            <Link className="btn-seeMore" to="#">
              See more
            </Link>
          </div>
        </SidebarSingle>

        <SidebarSingle style={{ marginBottom: 32 }}>
          <Heading as="h5">Brands</Heading>
          <CheckboxGroup options={optionsBrand} onChange={onChangeBrand} />

          <div className="sidebar-single__action">
            <Link className="btn-seeMore" to="#">
              See more
            </Link>
          </div>
        </SidebarSingle>

        <SidebarSingle>
          <Heading as="h5">Ratings</Heading>
          <CheckboxGroup options={options} onChange={onChangeRating} />
        </SidebarSingle>
      </Cards>
    </Sidebar>
  );
};

export default Filters;
