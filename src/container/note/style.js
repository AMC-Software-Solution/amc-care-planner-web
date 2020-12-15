import Styled from 'styled-components';
import { Table } from 'antd';

const Span = Styled.span`
    &.active{
        color: green;
        text-decoration: line-through;
    }
`;

const Style = Styled(Table)`
  margin-bottom: 30px;  
  .ant-table{
    padding-bottom: 30px;
    border-radius: 10px;
    tr{
      th,
      td{
        &:first-child{
          ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 30px;
        }
        &:last-child{
          ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 30px;
        }
      }
    }
    .ant-table-selection-extra{
      /* ${({ theme }) => (theme.rtl ? 'right: 15px;' : 'left: -15px;')} */
      right: 15px;
    }
  }
  .ant-table-thead{
    >tr{
      >th{
        background: #fff;
        &:first-child{
          ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 20px;
          border-top-left-radius: 10px !important;
        }
        &:last-child{
          border-top-right-radius: 10px !important;
        }
        .ant-table-selection-extra{
          ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: -25px
        }
        .ant-dropdown-trigger{
          svg{
            width: 20px;
            color: ${({ theme }) => theme['gray-solid']};
          }
        }
        .email-top-search{
          display: flex;
          justify-content: ${({ theme }) => (theme.rtl ? 'flex-start' : 'flex-end')};
          align-items: center;
          @media only screen and (max-width: 575px){
            display: none;
          }
          .ant-select{
            max-width: 350px;
          }
          .ant-select-selector{
            height: 46px !important;
          }
          .ant-select-selection-search{
            width: 100% !important;
            .ant-select-selection-search-input{
              text-align: right;
              border-radius: 24px;
              background: ${({ theme }) => theme['bg-color-normal']};
              border: 0 none;
              input{
                height: 44px !important;
                background: ${({ theme }) => theme['bg-color-normal']};
                &:placeholder{
                  color: ${({ theme }) => theme['extra-light-color']};
                }
              }
              .ant-input-suffix{
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0;
                .anticon-search{
                  svg{
                    color: ${({ theme }) => theme['gray-solid']};
                  }
                }
              }
            }
          }
        }
        .email-top-right{
          justify-content: flex-end;
          .email-extra{
            line-height: 1;
            a{
              color: ${({ theme }) => theme['gray-solid']};
              &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 25px;
              }
            }
          }
          .page-number{
            display: inline-block
            font-size: 14px;
            font-weight: 400;
            color: ${({ theme }) => theme['light-color']};
            @media only screen and (max-width: 575px){
              display: none;
            }
          }
          .pagination-slider{
            margin: ${({ theme }) => (theme.rtl ? '0 15px 0 20px' : '0 20px 0 15px')};
            .btn-paging{
              display: inline-flex;
              height: 30px;
              width: 30px;
              border-radius: 50%;
              align-items: center;
              justify-content: center;
              &:hover{
                background: ${({ theme }) => theme['primary-color']}10;
              }
              svg{
                color: ${({ theme }) => theme['light-color']};
              }
            }
          }
        }
      }
    }
  }

  
  .ant-table-tbody{
    .ant-table-cell{
      white-space: normal !important;
      text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
    }
    >tr{
      &:hover{
        box-shadow: 0 15px 40px ${({ theme }) => theme['gray-solid']}20;
        h1{
          font-weight: 600;
          color: ${({ theme }) => theme['dark-color']};
          a{
            color: ${({ theme }) => theme['dark-color']};
          }
        }
        .email-time{
          font-weight: 500;
          color: ${({ theme }) => theme['dark-color']};
        }
        >td{
          background: #fff !important;
          border-color: #ffffff;
        }
      }
      h1 a{
        font-weight: 500;
        transition: 0s;
      }
      &.ant-table-row-selected{
        &:hover{
            >td{
              background: #fff;
            }
        }
        >td{
          background: #fff;
        }
      }
      >td{
        padding: 15px 16px;
        &:last-child{
          text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
        }
        .ant-checkbox-wrapper{
          margin-top: 5px;
        }
        .email-time{
          font-size: 13px;
          font-weight: 400;
          color: ${({ theme }) => theme['gray-color']};
        }
      }
    }
  }
  .ant-table-thead > tr > th .ant-table-header-column {
    width: 100%;
  }
  .ant-table-thead > tr:first-child > th:last-child {
    border-top-right-radius: 4px;
    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
  }
  .ant-pagination-item {
    display: none;
  }
  .ant-table-pagination.ant-pagination {
    position: absolute;
    z-index: 1;
    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 0;
  }
  
`;

const NoteNav = Styled.nav`
  ul{
    list-style: none;
    margin: 20px 0;
    padding: 0;
    li{
      position: relative;
      &.add-label-btn{
        &:hover{
          background: transparent;
          a{
            background: transparent;
            color: ${({ theme }) => theme['primary-color']} !important;
          }
        }
        a{
          color: ${({ theme }) => theme['light-color']} !important;
          transition: .3s;
          &:hover{
            background: transparent;
            svg,
            i,
            span{
              color: ${({ theme }) => theme['primary-color']};
            }
          }
        }
      }
      a{
        padding: 8px 20px;
        display: flex;
        align-items: center;
        transition: 0.3s ease;
        border-radius: 4px;
        color: ${({ theme }) => theme['gray-color']};
        svg{
          min-width: 18px;
          ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 14px;
          color: ${({ theme }) => theme['extra-light-color']};
        }
        &.active{
          background: rgba(95,99,242,0.1);
          color: ${({ theme }) => theme['primary-color']};
          svg,
          i{
            color: ${({ theme }) => theme['primary-color']};
          }
        }
      }

      &:hover{
        a{
          background: rgba(95,99,242,0.1);
          color: ${({ theme }) => theme['primary-color']};
          svg,
          i{
            color: ${({ theme }) => theme['primary-color']};
          }
        }
      }
      .nav-text{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .add-label{
        box-shadow: 0 10px 40px rgba(146,153,184,0.2);
        padding: 25px 30px;
        position: relative;
        width: calc(100% + 60px);
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 50%;
        transform: translateX(-50%);
        background: #fff;
        border-radius: 8px;
        @media only screen and (max-width: 1199px){
          width: calc(100% + 40px);
          padding: 15px;
        }
        h1{
          text-align: left;
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 16px;
          font-weight: 500;
          transition: .3s;
          color: ${({ theme }) => theme['dark-color']};
        }
        input{
          height: 44px;
          border-radius: 2px;
          border: 1px solid ${({ theme }) => theme['border-color-light']};
        }
        .btn-group{
          margin-top: 15px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 10px -5px -5px;
          button{
            margin: 5px;
            height: 38px;
          }
          .ant-btn-default{
            padding: 0 12px;
            color: ${({ theme }) => theme['light-color']};
          }
        }
      }
    }
  }
  .nav-labels{
    margin-top: 35px;
    p{
      font-size: 12px;
      text-align: left;
      margin: 0;
      padding: 0 15px;
      color: #9299b8;
      text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
      img,
      svg,
      i{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
      }
    }
    ul{
      margin-top: 6px;
      margin-bottom: 0;
    }
  }
`;

const MessageAction = Styled.div`
  display: flex;
  align-items: center;
  margin: 0 -5px;
  @media only screen and (max-width: 575px){
    flex-flow: row !important;
    margin-bottom: 5px;
  }
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin: 0 4px;
    transition: 0.3s ease;
    @media only screen and (max-width: 575px){
      width: 25px;
      height: 25px;
    }
    svg{
      width: 16px;
      color: ${({ theme }) => theme['gray-solid']};
    }
    &:hover{
      background: rgba(95,99,242,0.05);
      svg{
        color: ${({ theme }) => theme['primary-color']};
      }
    }
  }
`;

const MailRightAction = Styled.div`
  span{
    color: ${({ theme }) => theme['light-color']};
  }
`;

const NoteCardWrap = Styled.div`
  min-height: 625px;
  @media only screen and (max-width: 1199px){
    min-height: 100%;
  }
`;

const NoteWrapper = Styled.div`
  position: relative;
  .sidebar-card{
    .ant-card{
      min-height: 710px;
      .ant-card-body{
        padding: 25px 0 !important;
      }
    }
  }
  .ant-card-body{
    padding: 30px 30px 0 30px !important;
  }
  .trigger-close.ant-btn-link{
    margin: 0 !important;
    position: absolute;
    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 20px;
    top: 20px;
    z-index: 99;
    padding: 0;
    background: transparent !important;
  }
  .trigger-col {
    @media only screen and (max-width: 991px){
      text-align: center;
    }
  }
  .ant-btn-link{
    background: #fff !important;
    margin-bottom: 25px;
    border-radius: 6px;
    color: ${({ theme }) => theme['primary-color']} !important;
    &:focus{
      color: ${({ theme }) => theme['primary-color']} !important;
    }
  }
  .note-sideabr{
    &.hide{
      transform: translateX(${({ theme }) => (theme.rtl ? '100%' : '-100%')});
      transition: .35s ease-in;
    }
    &.show{
      transform: translateX(0%);
      transition: .35s ease-in;
    }
    @media only screen and (max-width: 991px){
      display: block;
      background: #fff;
      position: fixed;
      ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
      top: 60px;
      width: 280px;
      height: 100%;
      z-index: 99;
    }
    .ant-card{
      min-height: 900px;
      .ant-card-body{
        padding: 0px !important;
      }
    }
  }

  .note-sidebar-top{
    padding: 30px 30px 0;
    @media only screen and (max-width: 991px){
      padding: 60px 30px 0;
    }
    .ant-btn{
      height: 44px;
    }
  }

  .note-sidebar-bottom{
    padding: 0 15px 25px 15px;
  }

  table{
    .ant-table-tbody{
      .ant-table-cell{
        vertical-align: top;
      }
    }
  }
`;
const Bullet = Styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
    &.personal{
        background: #5F63F2;
    }
    &.work{
        background: #20C997;
    }
    &.social{
        background: #FA8B0C;
    }
    &.important{
        background: #2C99FF;
    }
`;

export { Span, Style, NoteNav, MessageAction, MailRightAction, NoteWrapper, Bullet, NoteCardWrap };
