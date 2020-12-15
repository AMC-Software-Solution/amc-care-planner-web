/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import { InputNumber, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { FrownOutlined } from '@ant-design/icons';
import { IconWrapper, SliderStyle } from './style';

const Slider = props => {
  const {
    defaultValue,
    range,
    min,
    max,
    step,
    input,
    icon,
    marks,
    vertical,
    defaultValues,
    onAfterChange,
    onChange,
  } = props;

  const [state, setState] = useState({
    inputValue: 1,
    mini: min,
    maxi: max,
  });

  const onChanges = value => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(value)) {
      return;
    }

    setState({
      ...state,
      inputValue: value,
    });
    if (onChange) onChange(value);
  };

  const handleChange = value => {
    setState({ ...state, value });
    if (onChange) onChange(value);
  };

  const { inputValue, value, mini, maxi } = state;
  const mid = ((maxi - mini) / 2).toFixed(5);
  const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
  const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';

  const onAfterChanges = values => {
    if (onAfterChange) onAfterChange(values);
  };

  return input ? (
    <Row>
      <Col xl={20} xs={24}>
        <SliderStyle
          min={min}
          max={max}
          onChange={onChanges}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={step}
        />
      </Col>
      <Col xl={4} xs={24}>
        <InputNumber min={min} max={max} value={inputValue} onChange={onChanges} step={step} />
      </Col>
    </Row>
  ) : icon ? (
    <IconWrapper>
      <FrownOutlined style={{ color: preColor }} />
      <SliderStyle min={mini} max={maxi} onChange={handleChange} value={value} />
      <FrownOutlined style={{ color: nextColor }} />
    </IconWrapper>
  ) : (
        <SliderStyle
          marks={marks}
          defaultValue={defaultValue || defaultValues}
          range={range}
          step={step}
          vertical={vertical}
          onAfterChange={onAfterChanges}
          onChange={onChange}
          max={max}
          min={min}
        />
      );
};

Slider.propTypes = {
  defaultValue: PropTypes.number,
  defaultValues: PropTypes.array,
  range: PropTypes.bool,
  step: PropTypes.number,
  input: PropTypes.bool,
  icon: PropTypes.bool,
  marks: PropTypes.object,
  vertical: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  onAfterChange: PropTypes.func,
  onChange: PropTypes.func,
};

export { Slider };
