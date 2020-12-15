import Styled from 'styled-components';
import { Slider } from 'antd';

const IconWrapper = Styled.div`
    position: relative;
    padding: 0px 30px;
    .anticon {
      position: absolute;
      top: -2px;
      width: 16px;
      height: 16px;
      line-height: 1;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.25);
    }      
    .anticon:first-child {
      left: 0;
    }      
    .anticon:last-child {
      right: 0;
    }
`;

const SliderStyle = Styled(Slider)`

`;

export { IconWrapper, SliderStyle };
