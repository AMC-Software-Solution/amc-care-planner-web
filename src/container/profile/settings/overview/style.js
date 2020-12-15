import Styled from 'styled-components';

const ProfileAuthorBox = Styled.div`
    .ant-card-body{
        padding: 25px 0 25px !important;
    }
    .author-info{
        padding: 0 20px 20px;
        text-align: center;
        border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
    }
    figure{
        position: relative;
        max-width: 120px;
        margin: 0 auto 18px;
        .ant-upload-select{
            position: absolute;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
            bottom: -2px;
            height: 40px;
            width: 40px;
            background: #fff;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            span{
                display: inline-flex;
                height: 32px;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                width: 32px;
                background: ${({ theme }) => theme['primary-color']};
            } 
            a{
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
            }
        }
    }
    figcaption{
        .info{
            h1,
            h2,
            h3,
            h4,
            h5,
            h6{
                font-size: 18px;
                margin-bottom: 4px;
            }
            p{
                margin-bottom: 0;
                color: ${({ theme }) => theme['light-color']};
            }
        }
    }

    .settings-menmulist{
        padding: 20px 20px 0px 20px;
        li{
            a{
                display: flex;
                align-items: center;
                padding: 12px 20px;
                border-radius: 6px;
                color: ${({ theme }) => theme['light-color']};
                i,
                svg,
                img{
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 13px;
                }
                &.active{
                    font-weight: 500;
                    color: ${({ theme }) => theme['primary-color']};
                    background: ${({ theme }) => theme['primary-color']}05;
                }
            }
        }
    }
`;

const SettingWrapper = Styled.div`
    .cover-image{
        position: relative;
        margin-bottom: 25px;
        .ant-upload-select{
            position: absolute;
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 20px;
            top: 20px;
            border: 1px solid #ffffff50;
            border-radius: 6px;
            @media only screen and (max-width: 991px){
                top: 50%;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: auto;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            a{
                color: #fff;
                padding: 8px 17.35px;
                display: inline-flex;
                align-items: center;
                @media only screen and (max-width: 479px){
                    padding: 5px 10px;
                }
                i,
                svg,
                img
                {
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
                }
            }
        }
    }
    .setting-card-title{
        @media only screen and (max-width: 479px){
            text-align: center;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
            margin-bottom: 0;
            font-size: 16px;
            font-weight: 500;
        }
        span{
            font-size: 13px;
            font-weight: 400;
            margin: 0;
            color: ${({ theme }) => theme['light-color']};
        }
    }
`;

const AccountWrapper = Styled.div`
    .ant-card-body{
        padding: 30px 25px 25px 25px !important;
        @media only screen and (max-width: 767px){
            padding: 20px !important;
        }
    }
    .account-form-top{
        margin-bottom: 26px;
        padding-bottom: 30px; 
        border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
    }
    .account-form{
        .ant-row{
            &:not(:last-child){
                margin-bottom: 0;
            }
        }
        p{
            margin: 2px 0 22px;
            color: ${({ theme }) => theme['light-color']};
            span{
                    font-weight: 500;
                    color: ${({ theme }) => theme['dark-color']};
            }
        }
    }
    .account-closing{
        .ant-row{
            display: flex;
            align-items: center;
            width: 100%;
        }
        .account-closing__title{
            font-size: 16px;
        }
        p{
            margin-bottom: 0;
            color: ${({ theme }) => theme['gray-color']};
        }
        button{
            height: 38px;
            padding: 0 16.75px;
            @media only screen and (max-width: 991px){
                margin-top: 14px;
            }
            @media only screen and (max-width: 767px){
                margin-top: 0px;
            }
            @media only screen and (max-width: 575px){
                margin-top: 14px;
            }
        }
    }
    .account-action{
        button{
            height: 44px;
        }
        .ant-btn-light{
            font-weight: 400;
            background: ${({ theme }) => theme['bg-color-light']};
            border: 1px solid ${({ theme }) => theme['border-color-light']};
        }
    }
`;

const ChangePasswordWrapper = Styled.div`
    .ant-card-body{
        min-height: 565px;
    }
    form{
        .ant-form-item-control-input-content{
            .ant-input-password{
            padding: ${({ theme }) => (theme.rtl ? '0 0 0 20px' : '0 20px 0 0')} !important;
            }
        }
        .input-message{
            font-size: 13px;
            color: ${({ theme }) => theme['light-color']};
            margin: -22px 0 0;
        }
        .ant-form-item-control-input-content{
            .anticon-eye-invisible{
                svg,
                i{
                    color: ${({ theme }) => theme['extra-light-color']};
                }
            }
        }
        .setting-form-actions{
            button{
                border-radius: 6px;
            }
            .ant-btn-light{
                color: ${({ theme }) => theme['gray-color']};
                border: 1px solid ${({ theme }) => theme['border-color-light']};
            }
        }
    }
`;

const SocialProfileForm = Styled.div`
    .ant-form-item-control-input{
        min-height: 44px;
        .ant-form-item-control-input-content{
            input{
            padding: ${({ theme }) => (theme.rtl ? '12px 50px 12px 20px' : '12px 20px 12px 50px')} !important;
            }
            input::placeholder{
                font-size: 13px;
                color: ${({ theme }) => theme['light-color']};
            }
        }
    }
    .ant-form-item{
        button{
            padding: 0px 23px;
        }
        label{
            color: ${({ theme }) => theme['dark-color']};
        }
        .ant-input-affix-wrapper{
            position: relative;
            input{
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 50px;
            }
            span.fa,
            i{
                font-size: 18px;
                color: #fff;
            }
            &.facebook{
                .ant-input-prefix{
                    background: #3B5998;
                    border-radius: 4px;
                }
            }
            &.twitter{
                .ant-input-prefix{
                    background: #1DA1F2;
                    border-radius: 4px;
                }
            }
            &.dribbble{
                .ant-input-prefix{
                    background: #DD3E7C;
                    border-radius: 4px;
                }
            }
            &.instagram{
                .ant-input-prefix{
                    background: #FF0300;
                    border-radius: 4px;
                }
            }
            &.github{
                .ant-input-prefix{
                    background: #23282D;
                    border-radius: 4px;
                }
            }
            &.medium{
                .ant-input-prefix{
                    background: #292929;
                    border-radius: 4px;
                }
            }
            .ant-input-prefix{
                position: absolute;
                height: 100%;
                width: 44px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 0;
                top: 50%;
                transform: translateY(-50%);
                background: #ddd;
                z-index: 1;
                i,
                svg{
                    color: #fff;
                }
            }
        }
    }

    .social-form-actions{
        margin-top: 25px;
    }
`;

const NotificationWrapper = Styled.div`
    .notification-box-single{
        .ant-card{
            border: 1px solid ${({ theme }) => theme['border-color-light']};
        }
        .notification-header{
            margin-top: -8px;
            .notification-header__text{
                font-size: 15px;
                font-weight: 500;
                color: ${({ theme }) => theme['light-color']};
            }
            .btn-toggle{
                font-size: 13px;
                color: ${({ theme }) => theme['info-color']};
            }
        }
        .notification-body{
            box-shadow: 0 10px 30px ${({ theme }) => theme['light-color']}10;
            .ant-card{
                margin-bottom: 0 !important;
            }
            .ant-card-body{
                padding: 5px 0 !important;
            }
            nav{
                li{
                    padding: 15px 25px !important;
                    @media only screen and (max-width: 575px){
                        padding: 15px 20px !important;
                    }
                    &:not(:last-child){
                        border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
                    }
                }
            }
        }
        .notification-list-single{
            .notification-list-single__title{
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 2px;
                color: ${({ theme }) => theme['gray-color']};
            }
            p{
                margin-bottom: 3px;
                color: ${({ theme }) => theme['light-color']};
            }
        }
    }
    .notification-actions{
        margin: 26px 0 11px;
        button{
            border-radius: 6px;
            height: 44px;
            margin-bottom: 15px;
        }
    }
`;

export {
  ProfileAuthorBox,
  SettingWrapper,
  AccountWrapper,
  ChangePasswordWrapper,
  SocialProfileForm,
  NotificationWrapper,
};
