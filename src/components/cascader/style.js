import Styled from 'styled-components';
import { Cascader } from 'antd';

const CascaderStyle = Styled(Cascader)`
    .ant-input{
        padding: 5.5px 20px;
    }
    .anticon svg{
        width: 10px;
        height: 8.5px;
    }
`;

export { CascaderStyle };
