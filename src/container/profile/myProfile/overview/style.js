import Styled from 'styled-components';

const UserBioBox = Styled.div`
    .ant-card-body{
        padding: 25px 0 25px 0 !important;
    }
    
    .user-info{
        margin-bottom: 22px;
        padding: 0 25px 22px 25px;
        border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
        &:last-child{
            border-bottom: 0;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .user-info__title{
            font-size: 12px;
            color: ${({ theme }) => theme['light-color']};
            text-transform: uppercase;
            margin-bottom: 16px;
        }
        p{
            font-size: 15px;
            line-height: 1.667;
            color: ${({ theme }) => theme['gray-color']};
            &:last-child{
                margin-bottom:0;
            }
        }
        .user-info__contact{
            li{
                display: flex;
                align-items: center;
                &:not(:last-child){
                    margin-bottom: 14px;
                }
                svg,
                i,
                img{
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
                    color: ${({ theme }) => theme['light-color']};
                }
                span{
                    font-size: 14px;
                    color: ${({ theme }) => theme['gray-color']};
                }
            }
        }

        .user-info__skills{
            margin: -3px;
            .btn-outlined{
                margin: 3px !important;
                font-size: 11px;
                height: 25px;
                padding: 0px 8.75px;
                text-transform: uppercase;
                border-radius: 5px;
                border-color: ${({ theme }) => theme['border-color-normal']};
                margin: ${({ theme }) => (theme.rtl ? '0 0 10px 10px' : '0 10px 10px 0')};
                color: ${({ theme }) => theme['gray-color']} !important;
            }
        }
        .card__social{
            a{
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                box-shadow: 0 5px 15px ${({ theme }) => theme['light-color']}20;
                &:not(:last-child){
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                }
                &.facebook{
                    span{
                        color: #3B5998;
                    }
                }
                &.twitter{
                    span{
                        color: #1DA1F2;
                    }
                }
                &.dribble{
                    span{
                        color: #C2185B;
                    }
                }
                &.instagram{
                    span{
                        color: #FF0300;
                    }
                }
            }
        }
    }
    
`;

const SettingWrapper = Styled.div`
    .cover-image{
        position: relative;
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
        .ant-upload-list {
            display: none;
        }
    }
    .coverWrapper{
        position: relative;
        z-index: 1;
        margin-bottom: 25px;
        background-color: #fff;
        border-radius: 0 0 10px 10px;
        nav{
            padding: 0 25px;
            ul{
                margin: 0;
                @media only screen and (max-width: 375px){
                    text-align: center;
                    padding: 10px 0;
                }
                li{
                    display: inline-block;
                    @media only screen and (max-width: 375px){
                        display: block;
                    }
                    &:not(:last-child){
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 22px;
                        @media only screen and (max-width: 375px){
                            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                        }
                    }
                    a{
                        position: relative;
                        display: block;
                        padding: 20px 5px;
                        color: ${({ theme }) => theme['light-color']};
                        @media only screen and (max-width: 375px){
                            padding: 10px 5px;
                        }
                        &:after{
                            position: absolute;
                            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                            bottom: 0;
                            width: 100%;
                            height: 1.5px;
                            content: '';
                            opacity: 0;
                            visibility: hidden;
                            background-color: ${({ theme }) => theme['primary-color']};
                            @media only screen and (max-width: 375px){
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
                    }
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

const RightAsideWrapper = Styled.div`
    .ant-card-head{
        .btn-seeAll{
            font-size: 13px;
            font-weight: 500;
            color: ${({ theme }) => theme['primary-color']};
        }
    }
    .ant-card-body{
        padding: 0 0 25px !important;
        ul{
            margin: 0;
            padding: 0;
            
            li{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px 25px;
                cursor: pointer;

                &:hover{
                    box-shadow: 0 15px 50px #9299B820;
                }

                div{
                    display: flex;
                    img{
                        width: 46px;
                        height: 46px;
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                        border-radius: 50%;
                    }
                    p{
                        margin: 0;
                        padding: 0;
                        span{
                            display: block;
                        }
                    }
                }
            }
            .btn-loadMore{
                display: inline-block;
                margin-top: 10px;
                font-size: 13px;
                font-weight: 500;
                padding: 0 25px;
            }
        }
    }
    .ff-widget{
        li{
            @media only screen and (max-width: 1599px){
                flex-flow: column;
                padding: 20px !important;
                align-items: flex-start !important;
            }
            .ff-info{
                @media only screen and (max-width: 1199px){
                    flex-flow: column;
                }
                @media only screen and (max-width: 767px){
                    flex-flow: row;
                }
                p{
                    font-size: 14px;
                    font-weight: 600;
                    color: ${({ theme }) => theme['dark-color']};
                    @media only screen and (max-width: 1199px){
                        margin-top: 12px;
                    }
                    @media only screen and (max-width: 767px){
                        margin-top: 0;
                    }
                    span{
                        margin-top: 3px;
                        font-weight: 400;
                        color: ${({ theme }) => theme['light-color']};
                    }
                }
            }
            .btn-ff{
                font-size: 12px;
                font-weight: 500;
                padding: 0 12.88px;
                @media only screen and (max-width: 1599px){
                    margin-top: 15px;
                }
                svg,
                i,
                img{
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
                }
            }
        }
    }
    .widget-photo-list,
    .widget-video-list{
        padding: 20px 25px 0;
        .ant-row{
            margin: -4px 0;
            .ant-col{
                margin: 4px 0;
            }
        }
        img{
            max-width: 103px;
            border-radius: 6px;
        }
    }

    .widget-video-list{
        .video{
            display: inline-block;
            position: relative;
            z-index: 4;
            &:after{
                position: absolute;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                top: 0;
                width: 100%;
                height: 100%;
                content: '';
                border-radius: 6px;
                background-color: ${({ theme }) => theme['dark-color']}20;
            }
            span{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 5;
                background-color: ${({ theme }) => theme['dark-color']}60;
                svg,
                img,
                i{
                    width: 14px;
                    color: #fff;
                }
            }
        }
    }
`;
const ActivityContents = Styled.div`
    .ant-card-body{
        padding: 25px 0 !important;
    }
    .activity-list{
        margin: 0;
        .activity-list__single{
            padding: 12px 25px;
            display: flex;
            align-items: center;
            .activity-icon{
                width: 31px;
                height: 31px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #00000015;
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
                &.primary{
                    background-color: ${({ theme }) => theme['primary-color']}15;
                    color: ${({ theme }) => theme['primary-color']};
                }
                &.secondary{
                    background-color: ${({ theme }) => theme['secondary-color']}15;
                    color: ${({ theme }) => theme['secondary-color']};
                }
                &.success{
                    background-color: ${({ theme }) => theme['success-color']}15;
                    color: ${({ theme }) => theme['success-color']};
                }
                &.info{
                    background-color: ${({ theme }) => theme['info-color']}15;
                    color: ${({ theme }) => theme['info-color']};
                }
                &.danger{
                    background-color: ${({ theme }) => theme['danger-color']}15;
                    color: ${({ theme }) => theme['danger-color']};
                }
                &.warning{
                    background-color: ${({ theme }) => theme['warning-color']}15;
                    color: ${({ theme }) => theme['warning-color']};
                }
            }
            .more{
                visibility: hidden;
            }
            &:hover{
                box-shadow: 0 15px 50px #88888820;
                .more{                        
                    visibility: visible;
                }
            }
            .activity-content{
                flex: auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .activity-info{
                display: flex;
                align-items: center;
                img{
                    max-width: 40px;
                    border-radius: 50%;
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
                }
                p{
                    margin-bottom: 0;
                    font-size: 14px;
                    color: ${({ theme }) => theme['gray-color']};
                    .inline-text{
                        font-weight: 500;
                        display: inline;
                    }
                    .hour{
                        display: block;
                        margin-top: 3px;
                        color: ${({ theme }) => theme['extra-light-color']};
                    }
                }
            }
            .activity-more{
                svg,
                i{
                    color: ${({ theme }) => theme['extra-light-color']};
                }
            }
        }
                
    }
`;
const ProductOverviewTable = Styled.div`
    .ant-card-body{
        padding: 0 !important;
        .ant-table{
            border-radius: ${({ theme }) => (theme.rtl ? '10px 10px 0 0' : '0 0 10px 10px')};
            margin-top: 1px;
        }
    }
    table{
        margin-bottom: 25px;
        .ant-table-thead > tr > th{
            background-color: #fff;
            color: ${({ theme }) => theme['dark-color']};
            &:first-child{
                padding-${({ theme }) => (theme.rtl ? 'right' : 'left')}: 25px;
            }
            &:last-child{
                text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
                padding-${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 25px;
            }
            &.p_name{
                min-width: 420px;
            }
            &.p_price{
                min-width: 100px;
            }
        }
        .ant-table-tbody{
            tr{
                &:hover{
                    td{
                        background-color: ${({ theme }) => theme['bg-color-light']};
                    }
                }
                td{
                    padding: 14px 16px;
                    font-size: 14px;
                    color: ${({ theme }) => theme['gray-color']};
                    border-color: ${({ theme }) => theme['border-color-light']};
                    &:first-child{
                        padding-${({ theme }) => (theme.rtl ? 'right' : 'left')}: 25px;
                    }
                    &:last-child{
                        padding-${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 25px;
                        text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
                    }
                }
            }
        }
    }
`;
export { UserBioBox, SettingWrapper, RightAsideWrapper, ActivityContents, ProductOverviewTable };
