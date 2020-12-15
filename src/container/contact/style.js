import Styled from 'styled-components';

const Action = Styled.div`
  .active{
    color: #FA8B0C;
  }
`;
const ContactPageheaderStyle = Styled.div`
  .ant-page-header-heading-title{
    margin-right: 0;
    padding-right: 0;
    &:after{
      display: none;
    }
  }
  .ant-select .ant-select-selection-search-input{
    border-radius: 6px;
  }
`;
const ContactCardWrapper = Styled.div`
  position: relative;
  button{
    position: absolute;
    background: transparent !important;
    top: 0;
    right: 0;
    padding: 0;
    svg {      
      color: #AEB9CD;
      width: 18px;
      height: 18px;
    }
  }
  .contact-card{
    figure{
      text-align: center;
      margin: 0;
      img{
        border-radius: 50%;
      }
      figcaption{
        margin-top: 20px;
        h3{
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 0;
        }
      }
    }
    .user-info{
      margin-top: 20px;
      border-top: 1px solid #F1F2F6;
      padding-top: 25px;
      ul{
        li{
          display: flex;
          align-items: center;
          color: #8288A4;
          &:not(:last-child){
            margin-bottom: 14px;
          }
          svg{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
            color: #8288A4;
          }
        }
      }
    }
  }
`;
export { Action, ContactPageheaderStyle, ContactCardWrapper };
