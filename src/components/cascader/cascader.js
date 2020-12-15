import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CascaderStyle } from './style';

const Cascader = props => {
  const { data, defaultValue, trigger, onChange, isShowSearch, loading, placeholder } = props;

  const options = data;
  const [state, setState] = useState({
    options,
  });

  const onChangeEvent = value => {
    onChange(value);
  };

  const onChangeLoading = (value, selectedOptions) => {
    onChange(value, selectedOptions);
  };

  const filter = (inputValue, path) => {
    return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  };

  const loadData = selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setState({
        options: [...state.options],
      });
    }, 1000);
  };

  return (
    <CascaderStyle
      options={options}
      expandTrigger={trigger}
      defaultValue={defaultValue}
      onChange={loading ? onChangeLoading : onChangeEvent}
      showSearch={isShowSearch && { filter }}
      loadData={loadData}
      placeholder={placeholder}
      changeOnSelect={!!loading}
    />
  );
};

Cascader.defaultProps = {
  data: [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ],
  defaultValue: [],
  trigger: 'click',
  placeholder: 'Please select',
};

Cascader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  defaultValue: PropTypes.arrayOf(PropTypes.string),
  trigger: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  isShowSearch: PropTypes.bool,
  loading: PropTypes.bool,
};

export { Cascader };
