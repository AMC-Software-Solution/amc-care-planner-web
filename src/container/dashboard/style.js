import Styled from 'styled-components';

const RowWrapper = Styled.div`
  color: red;
`;

const DashboardBaseStyleWrap = Styled.div`
    h1{
        margin-bottom: 30px;
    }
    .ant-row{
        margin: -5px 0;
    }
    .ant-col{
        margin: 5px 0;
    }
`;

export { RowWrapper, DashboardBaseStyleWrap };
