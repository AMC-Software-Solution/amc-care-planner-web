import Styled from 'styled-components';

const Icon = Styled.div`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    span {
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 10px;
    }
`;

const AnIcon = Styled.div`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    span {
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 10px;
    }
`;

const IconWrapper = Styled.div`
    .ant-card{
        .ant-card-body{
            padding: 15px 10px 10px 10px !important;
        }
    }

    .icon-single{
        span{
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
        }
        span.fa,
        svg,
        i{
            font-size: 18px;
            min-width: 20px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        }
    }
`;

export { Icon, AnIcon, IconWrapper };
