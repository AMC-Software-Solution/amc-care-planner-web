import Styled from 'styled-components';

const ChatWrapper = Styled.div`
  .create-action{
    padding: 0 25px;
    margin: 25px 0 18px;
    @media only screen and (max-width: 379px){
      padding: 0 20px;
    }
    .btn-add{
      width: 100%;
      height: 44px;
      text-align: center;
      border: 1px solid ${({ theme }) => theme['border-color-light']};
      background: ${({ theme }) => theme['bg-color-light']};
      color: ${({ theme }) => theme['gray-color']};
      svg,
      img,
      i{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
      }
    }
  }
`;

const UL = Styled.ul`
  list-style-type: none;
  li {
    display: inline-block;
    padding: 5px;
  }
`;

const Content = Styled.div`
  height: 495px;
  overflow-y: auto;
  overflow-x: hidden;
  ul{
    overflow-x: hidden;
  }
  .chat-link-signle{
    position: relative;
    background: #fff;
    border-radius: 4px;
    width: 100%;
    margin: 0;
    &:before{
      content: '';
      position: absolute;
      width: calc(100% + 20px);
      height: 100%;
      background: #fff;
      right: -10px;
      left: -10px;
      box-shadow: 0 15px 50px ${({ theme }) => theme['light-color']}20;
      border-radius: 4px;
      visibility: hidden;
      opacity: 0;
      transition: 0.3s ease;
      z-index: 1;
    }
    &:hover:before{
      visibility: visible;
      opacity: 1;
    }
    a{
      display: flex;
      padding: 20px 24px;
      position: relative;
      z-index: 1;
    }
    .author-figure{
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
      flex: .1;
      img{
        max-width: 46px;
        border-radius: 50%;
      }
    }
    .author-info{
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
      flex: .76;
      .author-name{
        font-weight: 600;
        color: ${({ theme }) => theme['dark-color']};
      }
      .author-chatText{
        color: ${({ theme }) => theme['light-color']};
      }
    }
    .author-chatMeta{
      flex: .16;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      @media (max-width: 991px){
        align-items: center;
        justify-content: center;
      }
      span{
        float: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        font-size: 12px;
        color: ${({ theme }) => theme['light-color']};
      }
      .ant-badge{
        margin-top: 8px;
        span{
          color: #fff;
        }
      }
    }
  }
`;

const BlockSpan = Styled.span`
  display: block;
`;

const SingleChatWrapper = Styled.div`
  &.group-chat{
    .chatbox-reply-form{
      input{
        background: #fff !important;
        box-shadow: 0 5px 30px ${({ theme }) => theme['light-color']}15;
      }
    }
  }
  >.ant-card{
    .ant-card-body{
      padding: 25px 0 !important;
    }
  }
  .ant-card-head{
    padding: 0 30px !important;
    box-shadow: 0 10px 20px ${({ theme }) => theme['extra-light-color']}15;
    border: 0 none;
    .ant-card-extra{
      .ant-dropdown-trigger{
        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0 !important;
      }
    }
    .ant-card-head-title{
      h1{
        font-weight: 500;
        margin-bottom: 6px;
      }
      p{
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 0;
        color: ${({ theme }) => theme['light-color']};
      }
    }
  }

  .group-chat-header{
    padding: 8px 0;
    align-items: center;
    width: 100%;
    text-align: center;
    @media only screen and (max-width: 479px){
      flex-flow: column;
    }
    h1{
      @media only screen and (max-width: 479px){
        margin-bottom: 15px !important;
      }
    }
    .members{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      a{
        :not(:last-child){
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
        }
      }
      img{
        max-width: 30px;
      }
      .show-more,
      .add-more{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        span{
          margin: 0;
        }
      }
      .show-more{
        background-color: ${({ theme }) => theme['primary-color']};
        span{
          font-size: 10px;
          font-weight: 500;
          color: #fff;
        }
      }
      .add-more{
        border: 1px dashed ${({ theme }) => theme['border-color-deep']};
        span{
          line-height: .4;
        }
      }
    }
  }

  .atbd-chatbox{
    height: 450px;
    overflow-y: auto;
    overflow-x: hidden;
    .time-connector{
      position: relative;
      z-index: 10;
      margin: -14px 0 15px;
      &:after{
        position: absolute;
        width: 100%;
        height: 1px;
        ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: ${({ theme }) => theme['border-color-light']};
        content: '';
        z-index: -1;
      }
      span{
        text-transform: capitalize;
        font-size: 13px;
        padding: 0 24px;
        background-color: #fff;
        color: ${({ theme }) => theme['light-color']};
      }
    }
    .atbd-chatbox__single{
      padding: 0 25px;
      &:not(:last-child){
        margin-bottom: 30px;
      }
      &:last-child{
        padding-bottom: 5px;
      }
      .left{
        display: flex;
        align-items: flex-start;
        img{
          max-width: 46px;
          border-radius: 50%;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        }
        .atbd-chatbox__content{
          margin-top: -4px;
        }
        .message-box{
          background: ${({ theme }) => theme['primary-color']};
        }
      }
      .right{
        float: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        .atbd-chatbox__actions{
          margin: ${({ theme }) => (theme.rtl ? '0 0 0 15px' : '0 15px 0 0')};
        }
        .atbd-chatbox__name{
          text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        }
        .message-box{
          
          ${({ theme }) => (!theme.rtl ? 'border-radius: 15px 15px 0 15px;' : 'border-radius: 15px 15px 15px 0')};
          background: ${({ theme }) => theme['bg-color-deep']};
          color: ${({ theme }) => theme['gray-color']};
        }
      }
    }
    .atbd-chatbox__name{
      font-size: 14px;
      font-weight: 600;
      span{
        font-size: 12px;
        font-weight: 400;
        margin-left: 15px;
        color: ${({ theme }) => theme['light-color']};
      }
    }
    .atbd-chatbox__contentInner{
      align-items: center;
      .message-box + .message-box{
        margin-top: 5px;
      }
    }
    .message-seen{
      margin-top: 10px;
      &.text-right{
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
      }
      img{
        max-width: 20px;
        border-radius: 50%;
      }
      .message-seen__time{
        font-size: 12px;
        font-weight: 400;
        color: ${({ theme }) => theme['light-color']};
      }
    }
    .group-seen{
      margin-top: 5px;
      text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
      img{
        max-width: 20px;
        &:not(:last-child){
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 3px;
        }
      }
    }
    .atbd-chatbox__actions{
      display: flex;
      align-items: center
      ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
      @media only screen and (max-width: 767px){
        flex-flow: column;
      }
      .ant-dropdown-trigger{
        line-height: 1;
        color: ${({ theme }) => theme['border-color-deep']};
        .anticon-smile{
          color: ${({ theme }) => theme['extra-light-color']};
        }
        &{
          + .ant-dropdown-trigger{
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
            @media only screen and (max-width: 767px){
              margin: 10px 0 0;
            }
          }
        }
      }
    }
  }
`;

const MessageList = Styled.div`
  display: block;
  max-width: 670px;
  font-size: 15px;
  ${({ theme }) => (!theme.rtl ? 'border-radius: 0 15px 15px' : 'border-radius: 15px 0 15px 15px')};
  padding: 18px 20px;
  line-height: 1.67;
  color: #fff;
`;

const Footer = Styled.div`
  padding: 0 25px;
  .chatbox-reply-form{
    position: relative;
    margin-top: 20px;
    align-items: center;
    @media only screen and (max-width: 575px){
      flex-flow: column;
    }
    .smile-icon{
      position: relative; 
      position: absolute;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 25px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      z-index: 99999999;
      @media only screen and (max-width: 575px){
        top: 26px;
      }
      aside{
          position: absolute;
          z-index: 999999999;
          bottom: 0;
          .emoji-search{
            padding: 8px;
            height: auto;
            border-radius: 5px;
          }
      }
      .ant-dropdown-trigger{
        display: flex;
        align-items: center;
      }
      a{
        display: flex;
      }
      svg,
      i{
        color: ${({ theme }) => theme['extra-light-color']};
      }
    }
    &.hasFile{
      .ant-upload-list{
        &.ant-upload-list-text{
          padding: 15px;
        }
      }
      
    }
    .ant-upload-list{
      display: flex;
      position: absolute;
      top: -70px;
      ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
    }
    .chatbox-reply-input{
      width: 100%;
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
      input{
        padding: ${({ theme }) => (theme.rtl ? '0 70px 0 25px' : '0 25px 0 70px')};
        height: 70px;
        border: 0 none;
        border-radius: 35px;
        background: ${({ theme }) => theme['bg-color-normal']};
        &::placeholder{
          font-size: 14px;
          color: ${({ theme }) => theme['light-color']};
        }
        &:focus{
          border: 0 none;
          outline: none;
        }
        @media only screen and (max-width: 575px){
          height: 50px;
          margin-bottom: 20px;
        }
      }
    }
    input,
    span{
      ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
    }
    .chatbox-reply-action{
      align-items: center;
      a{
        span{
          display: block;
        }
      }
      .btn-send{
        box-shadow: 0 8px 13px #5F63F220;
      }
      .ant-upload-select,
      button{
        min-width: 50px;
        height: 50px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        span{
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
          color: #fff;
        }
      }
      .ant-upload-select {
        background: ${({ theme }) => theme['bg-color-normal']};
        .ant-upload{
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
          svg{
            margin-top: 8px;
            color: ${({ theme }) => theme['light-color']};
          }
        }
      }
      button{
        padding: 0;
        background: ${({ theme }) => theme['primary-color']};
      }
    }

    .ant-upload-select-picture-card{
      margin: 0;
      width: 50px;
      border-radius: 50% !important;
      border: 0 none;
      background-color: ${({ theme }) => theme['bg-color-normal']} !important;
      svg,
      i{
        margin-top: 7px !important;
      }
    }
    .ant-upload-list{
      &.ant-upload-list-text{
        display: block;
        top: auto;
        bottom: 136px;
        background: #fff;
        padding: 0;
        border-radius: 5px;
        box-shadow: 0 5px 20px #9299B803;
        >div{
          display: block;
        }
        .ant-upload-list-item{
          height: 24px;
          border-radius: 4px;
          background-color: ${({ theme }) => theme['bg-color-normal']};
          button{
            width: auto;
            height: auto;
            min-width: auto;
            background-color: ${({ theme }) => theme['bg-color-normal']};
            svg{
              color: ${({ theme }) => theme['info-color']};
            }
          }
        }
        .ant-upload-list-item-info{
          >span{
            display: flex;
            align-items: center;
          }
          .ant-upload-list-item-name {
            font-size: 13px;
          }
          .anticon,
          .ant-upload-list-item-name {
            color: ${({ theme }) => theme['info-color']};
          }
        }
      }
      &.ant-upload-list-picture-card{
        .ant-upload-list-picture-card-container{
          width: 60px;
          height: 50px;
        }
        .ant-upload-list-item{
          width: 60px;
          height: 50px;
          padding: 3px;
          .ant-upload-list-item-actions{
            .anticon-eye{
              display: none;
            }
            .anticon{
              margin: 0;
            }
          }
          .ant-upload-list-item-card-actions-btn{
            width: 25px;
            height: 25px;
            min-width: 25px;
          }
          .ant-upload-list-item-thumbnail{
            font-size: 11px;
          }
          .ant-upload-list-item-name{
            display: none;
          }
        }
      }
    }
  }
`;

const ChatSidebar = Styled.div`
  min-height: 550px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 20px #9299B803;
  
  .custom-scrollbar{
    >div{
      @media only screen and (max-width: 1800px){
        ${({ theme }) => (theme.rtl ? 'margin-left: 0 !important;' : 'margin-left: auto !important;')}:;
      }
    }
  }
  @media only screen and (max-width: 991px){
    max-width: 370px;
    margin: 0 auto 40px;
  }
  @media only screen and (max-width: 575px){
    min-height: 580px;
  }
  .ant-card-body{
    padding: 28px 0 !important;
  }
  .chatbox-search{
    padding: 0 25px;
    @media only screen and (max-width: 379px){
      padding: 0 20px;
    }
    .ant-select-selection-search{
      width: 100% !important;
    }
  }
  .ant-select-selector{
    height: auto !important;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-search-input{
    border-radius: 23px;
    background: ${({ theme }) => theme['bg-color-normal']};
    border: 0 none;
    input{
      background: ${({ theme }) => theme['bg-color-normal']};
      height: 46px !important;
    }
  }
  nav{
    padding: 0 25px;
    @media only screen and (max-width: 1199px){
      padding: 0 15px;
    }
    ul{
      margin: 0 0 12px 0;
      padding: 30px 0 0 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
      @media (max-width: 480px){
        flex-direction: column;
      }
      li{
        padding: 0;
        a{
          position: relative;
          display: block;
          padding: 0 0 18px;
          font-weight: 400;
          color: ${({ theme }) => theme['light-color']};
          &:after{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            content: '';
            opacity: 0;
            visibility: hidden;
            background: ${({ theme }) => theme['primary-color']};
            @media only screen and (max-width: 1199px){
              display: none;
            }
          }
          &.active{
            font-weight: 500;
            color: ${({ theme }) => theme['primary-color']};
            &:after{
              opacity: 1;
              visibility: visible;
            }
          }
          .ant-badge{
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
          }
          @media (max-width: 480px){
            padding-bottom: 10px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;
const BackShadowEmoji = Styled.div`
    width: 100%;
    height: 100%;
    background: #11121760;
    position: fixed;
    top: 0;
    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
    z-index: 9999;
`;

export { ChatWrapper, UL, Content, BlockSpan, MessageList, Footer, ChatSidebar, SingleChatWrapper, BackShadowEmoji };
