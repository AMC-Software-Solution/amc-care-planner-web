import Styled from 'styled-components';

const DropdownStyle = Styled.div`
  .ant-card-body .ant-btn {
    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
      margin-bottom: 10px;
      height: 36px;
      font-weight: 400;
      border-color: #E3E6EF;
      padding: 0px 19px;
      border-radius: 5px;
  }
`;

const DropdownIconStyleWrapper = Styled.div`
  button{
    padding: 0 !important;
    >span{
      padding: ${({ theme }) => (theme.rtl ? '0 16px 0 10px' : '0 10px 0 16px')}
    }
  }
  .ant-dropdown-trigger{
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    ${({ theme }) => (!theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme['border-color-normal']};
  }
`;

const SpinerWraperStyle = Styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`;

const CarouselStyleWraper = Styled.div`
  .ant-carousel .slick-slide {
    text-align: center;
    height: 150px;
    line-height: 160px;
    background: #5A5F7D;
    overflow: hidden;
  }
  .ant-carousel .slick-dots li{
    width: 15px;
  }
  .ant-carousel .slick-dots li.slick-active{
    width: 25px;
  }
  .ant-radio-group{
    margin-bottom: 16px !important;
  }
  .ant-radio-button-wrapper{
    height: 38px !important;
    line-height: 36px !important;
    font-weight: 600;
    color: ${({ theme }) => theme['light-color']}
  }
  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

const AvatarWraperStyle = Styled.div`
  .ant-avatar {
    margin: 10px;
    background: #E3E6EF;
  }
  .ant-btn-default{
    padding: 0 10px;
  }
  .ant-badge-count{
    top: 10px;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 10px !important;
    padding: 0 4px;
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    border: 3px solid #fff;
  }
  .ant-badge-dot{
    top: 10px;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 10px !important;
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
  }
  .btn-outlined{
    padding: 0px 8.05px;
  }
`;

const BadgeWraperStyle = Styled.div`
  .head-example {
    width: 42px;
    height: 42px;
    margin: 9px 15px;
    display: block;
    background: #ddd;
    border-radius: 3px;
  }
  .ant-badge-count{
    top: 10px;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 15px !important;
    font-size: 10px;
    font-weight: 600;
    min-width: 20px;
    padding: 0;
    height: 20px;
    line-height: 14px;
    border: 3px solid #fff;    
  }
  .ant-scroll-number-custom-component{
    top: 10px !important;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 15px !important;
  }
  .ant-badge-dot{
    top: 0;
    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: -1px !important;
    border: 1px solid #fff;
    width: 10px;
    height: 10px;
  }
  .ant-badge-status-text{
    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 10px !important;
    color: #9299B8;
  }
`;

const BadgeRedStyle = Styled.div`
  .ant-badge:not(:last-child){
    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px !important;
  }
`;

const BadgeStandAloneStyle = Styled.div`
  .ant-badge-count{
    ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0 !important;
    border: 0;
    font-size: 12px !important;
    font-weight: 500;
    margin: 0 5px;
    line-height: 20px;
    padding: 0 8.6px !important;
  }
`;

const BadgeOverflowStyle = Styled.div`
  .ant-badge-count{
    font-size: 11px;
    border-width: 2px;
    padding: 0 7.2px;
    line-height: 16px;
  }
`;

const BreadcrumbWrapperStyle = Styled.div`
  .ant-breadcrumb{
    color: #5A5F7D;
    .ant-breadcrumb-link{
      .anticon{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 2px !important;
      }
    }
  }
  .ant-breadcrumb-separator{
    margin: 0 4px;
  }
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link svg,
  .ant-breadcrumb >span:first-child .ant-breadcrumb-link a{
    color: #5F63F2;
  }
  .ant-breadcrumb >span:last-child .ant-breadcrumb-link{
    color: #9299B8;
  }
  .demo{
    .ant-breadcrumb{
      .ant-breadcrumb-link{
        font-size: 12px;
        color: ${({ theme }) => theme['gray-color']} !important;
      }
    }
  }
  .demo-nav{
    height: 48px;
    line-height: 48px;
    padding: 0 10px;
    border-radius: 4px;
    background: ${({ theme }) => theme['bg-color-light']};
  }
  .demo-nav a{
    padding: 0 12px;
    color: #5F63F2;
  }
  .ant-alert{
    &.ant-alert-info{
      background-color: ${({ theme }) => theme['primary-color']}15;
      border: 1px solid ${({ theme }) => theme['info-color']}15;
    }
    .ant-alert-message{
      font-size: 12px;
      color: ${({ theme }) => theme['primary-color']};
    }
  }
`;

const BadgeDynamicStyle = Styled.div`
.badge-dynamic{
  .ant-btn-group{
    padding-top: 4px;
    margin: ${({ theme }) => (theme.rtl ? '6px 12px 0 0' : '6px 0 0 12px')};
    border: 1px solid ${({ theme }) => theme['border-color-normal']};
    border-radius: 5px;
    padding: 0;
    .ant-btn {
      z-index: 2;
      &:first-child{
        z-index: 22;
        ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme['border-color-normal']};
      }
    }

  }
}
.ant-badge-dot{
  ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 16px !important;
  top: 8px;
}
.ant-switch{
  min-width: 44px;
  height: 22px;
  ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
  .ant-switch-handle{
    top: 4px;
  }
  .ant-switch-checked .ant-switch-handle{
    ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: calc(100% - 14px - 5px);
  }
}
`;

const CardStyleWrapper = Styled.div`
.ant-card{
  background: #F8F9FB;
}
.ant-card-head{
  border-color: #E3E6EF;
  background: #F8F9FB;
}
.ant-card-head .ant-card-head-title{
  padding: 12px 0;
}
.ant-card-head .ant-card-extra{
  display: block;
  padding: 12px 0;
  @media only screen and (max-width: 575px){
    margin-bottom: 4px;
  }
}
.ant-card.ant-card-bordered .ant-card-head{
  background: #fff;
}
.ant-card-head-wrapper .ant-card-extra a{
  color: #5F63F2;
}
.ant-card-body{
  padding: 22px 25px 15px 25px !important
}
.ant-card-body p{
  margin-bottom: 4px;
  color: ${({ theme }) => theme['gray-color']};
}
.ant-card.ant-card-bordered {
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #E3E6EF !important;
}
.ant-card-small > .ant-card-head{
  font-size: 16px;
  padding-left: 15px !important;
  padding-right: 15px !important;
}
.ant-card-small > .ant-card-body{
  padding: 12px 15px 8px 15px !important
}
`;

const CasCaderStyleWrapper = Styled.div`
  .ant-cascader-picker{
    display: block;
    width: fit-content;
  }
  .ant-cascader-picker:not(:last-child){
    margin-bottom: 20px;
  }
`;

const SelectWrapperStyle = Styled.div`
  margin: -5px;
  .ant-select{
    margin: 5px;
  }
  .ant-select-selector{
    border-color: ${({ theme }) => theme['border-color-light']};
  }
  .ant-select-multiple.ant-select-sm{
    .ant-select-selection-item{
      height: 20px;
      line-height: 18px;
      font-size: 11px;
    }
  }
`;

const SelectRadioStyle = Styled.div`
  .ant-radio-button-wrapper{
    height: 42px !important;
    line-height: 40px !important;
  }
`;

const TimeLinePointerIconWrap = Styled.div`
  padding: 20px;
  .ant-timeline-item-last > .ant-timeline-item-tail{
    display: block;
  }
  .ant-timeline-item-tail{
    border-width: 3px;
  }
  .ant-timeline-item{
    padding-bottom: 28px;
    &:last-child{
      padding-bottom: 0;
    }
    &.primary{
      .ant-timeline-item-head{
        background-color: #E7E8FD;
      }
    }
    &.info{
      .ant-timeline-item-head{
        background-color: #DFF0FF;
      }
    }
    &.warning{
      .ant-timeline-item-head{
        background-color: #FFEEDA;
      }
    }
    &.pink{
      .ant-timeline-item-head{
        background-color: #FFE8F2;
      }
    }
    &.success{
      .ant-timeline-item-head{
        background-color: #DDF7F0;
      }
    }
    &.danger{
      .ant-timeline-item-head{
        background-color: #FFE4E5;
      }
    }
    .ant-timeline-item-head{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      &:after,
      &:before{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -8px;
        width: 8px;
        height: 8px;
        content: "";
        background-color: #fff;
      }
      &:before{
        top: auto;
        bottom: -8px;
      }
    }
    .ant-timeline-item-content{
      margin: ${({ theme }) => (theme.rtl ? '-38px 42px 0 0' : '-38px 0 0 42px')};
      h3{
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 30px;
        color: ${({ theme }) => theme['dark-color']};
      }
      p{
        font-size: 14px;
        font-weight: 400;
        max-width: 330px;
        margin-bottom: 12px;
      }
      .tags{
        font-size: 14px;
        color: ${({ theme }) => theme['light-gray-color']};
      }
    }
  }
`;

const TimelineNormalWrap = Styled.div`
  .ant-timeline-item-last > .ant-timeline-item-content{
    min-height: auto;
  }
  
  .ant-timeline-right{
    .ant-timeline-item-right{
      .ant-timeline-item-content{
        width: calc(100% - 32px) !important;
      }
    }
  }
  .ant-timeline-item{
    padding-bottom: 25px;
    &:last-child{
      padding-bottom: 0;
    }
    &.active{
      .timeline-content-text{
        p{
          color: ${({ theme }) => theme['primary-color']};
        }
      }
    }
    .ant-timeline-item-content{
      margin: ${({ theme }) => (theme.rtl ? '0 32px 0 0' : '0 0 0 32px')};
      font-size: 14px !important;
      .timeline-content-inner{
        .timeline-content-time{
          min-width: 65px;
          font-weight: 600;
          color: ${({ theme }) => theme['light-gray-color']};
        }
      }
      p{
        margin-bottom: 0;
      }
    }
  }
`;

const TimelineBoxWrap = Styled.div`
  .ant-timeline-item-last > .ant-timeline-item-tail{
    display: block;
  }
  .ant-timeline-item{
    .ant-timeline-item-head{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme['bg-color-light']};
    }
    &.ant-timeline-item-left{
      .ant-timeline-item-content{
        &:after{
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 16px solid #EFF0F3;
          border-bottom: 8px solid transparent;
          top: 40%;
          transform: translateY(-50%);
          ${({ theme }) => (theme.rtl ? 'right' : 'left')}: -16px;
        }
      }
    }
    &.ant-timeline-item-right{
      .ant-timeline-item-content{
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 6px;
        &:after{
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 16px solid #EFF0F3;
          border-bottom: 8px solid transparent;
          top: 40%;
          transform: translateY(-50%);
          ${({ theme }) => (theme.rtl ? 'left' : 'right')}: -16px;
        }
        .content-box{
          text-align: left !important;
        }
      }
    }
    .ant-timeline-item-content{
      h2{
        font-size: 14px;
        color: ${({ theme }) => theme['extra-light-color']};
      }
      .content-box{
        padding: 18px 20px;
        border-radius: 10px;
        background-color: #EFF0F3;
        p{
          line-height: 1.75;
          &:last-child{
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

export {
  DropdownStyle,
  DropdownIconStyleWrapper,
  SpinerWraperStyle,
  CarouselStyleWraper,
  AvatarWraperStyle,
  BadgeWraperStyle,
  BadgeStandAloneStyle,
  BadgeOverflowStyle,
  BreadcrumbWrapperStyle,
  BadgeRedStyle,
  BadgeDynamicStyle,
  CardStyleWrapper,
  CasCaderStyleWrapper,
  SelectWrapperStyle,
  SelectRadioStyle,
  TimeLinePointerIconWrap,
  TimelineNormalWrap,
  TimelineBoxWrap,
};
