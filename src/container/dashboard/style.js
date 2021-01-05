import Styled from 'styled-components';

const EChartCard = Styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    .card-chunk{
        width: 50%;
        flex: 0 0 50%;
    }
    @media only screen and (max-width: 379px){
        .card-chunk{
            width: 100%;
            flex: 0 0 100%;
            h1{
                margin-bottom: 0;
            }
            p{
                margin: 5px 0 20px 0;
            }
        }
    }
    .chartjs-tooltip {
        min-width: 132px !important;
    }
`;

const OverviewSalesCard = Styled.div`
    display: flex;
    align-items: flex-start;
    padding: 5px 0 2px 0;
    .icon-box{
        display: flex;
        aling-items: center;
        justify-content: center;
        height: 60px;
        width: 60px;
        border-radius: 10px;
        margin-right: 10px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        @media only screen and (max-width: 1399px){
            height: 40px;
            width: 40px;
        }
        @media only screen and (max-width: 991px){
            height: 60px;
            width: 60px;
        }
        &.box-primary{
            background-color: ${({ theme }) => theme['primary-color']}10;
        }
        &.box-success{
            background-color: ${({ theme }) => theme['success-color']}10;
        }
        &.box-warning{
            background-color: ${({ theme }) => theme['warning-color']}10;
        }
    }
    .card-chunk{
        h2{
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 2px;
            color: ${({ theme }) => theme['dark-color']};
        }
        span{
            color: ${({ theme }) => theme['light-gray-color']};
        }
        p{
            margin-top: 16px;
        }
    }
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

const Focard = Styled.div`
    canvas{
        width: 100% !important;
        margin-top: 50px;
        @media only screen and (max-width: 1199px){
            margin-top: 15px;
        }
    }
    .focard-details{
        &.growth-downward{
            h1{                
                font-size: 30px;
                @media only screen and (max-width: 767px){
                    font-size: 24px;
                }
            }
            .focard-status{
                .focard-status__percentage{
                    color: ${({ theme }) => theme['danger-color']};
                    font-size: 16px;
                }
            }
        }
        &.growth-upward{
            .focard-status{
                .focard-status__percentage{
                    color: ${({ theme }) => theme['success-color']};
                    font-size: 16px;
                }
            }
        }
        h1{
            font-weight: 600;
            margin-bottom: 2px;
        }
        .subtitle{
            font-size: 14px;
            color: #FFFFFF;
            margin-bottom: 10px;
        }
        .focard-status{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 0 -5px;
            span{
                display: inline-flex;
                align-items: center;
                margin: 0 5px;
                &.focard-status__percentage{
                    font-weight: 500;
                }
            }
            span + span{
                color: #FFFFFF;
                font-size: 13px;
            }
        }
        svg{
            width: 15px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        }
    }

    .focard-chart{
        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: -10px;
    }

    @media (max-width: 1300px){
        .focard-details{
            h1{
                font-size: 24px;
            }
            &.growth-downward{
                h1{
                    font-size: 24px;
                }
            }
        }
    }

    .forcast-card-box{
        .ant-card-body{
            padding: 0 !important;
            h1{
                padding: ${({ theme }) => (theme.rtl ? '25px 25px 0 0' : '25px 0 0 25px')};
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 26px;
                @media only screen and (max-width: 767px){
                    margin-bottom: 16px;
                }
            }
        }

        .focard-details{
            margin-top: 15px;
            padding: 0 25px 22px;
            @media only screen and (max-width: 767px){
                padding: 0 25px 0;
            }
            h1{
                padding: 0;
                font-size: 30px;
                font-weight: 600;
                margin-bottom: 4px;
                @media only screen and (max-width: 767px){
                    font-size: 24px;
                }
            }
            p{
                margin-bottom: 0;
            }
        }
        canvas{
            margin-top: 0px;
            border-radius: 0 0 10px 10px;
        }
        .chart-label{
            display: none;
        }
    }
`;

const CardBarChart = Styled.div`
    >div{
        @media only screen and (max-width: 575px) {
            flex-flow: column;
            align-items: flex-start !important;
            ul{
                margin: 0 0 15px;
            }
        }
    }
    .card-bar-top{
        &.flex-grid{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: -20px;
            @media only screen and (max-width: 575px) {
                flex-flow: column;
                align-items: center;
            }
            h1{
                font-size: 24px;
                margin-bottom: 22px;
                @media only screen and (max-width: 1199px) {
                    font-size: 20px;
                }
            }
        }
        .flex-grid-child{
            padding: 0 20px;
        }
        p{
            font-size: 14px;
            margin-bottom: 8px;
            color: ${({ theme }) => theme['light-color']};
        }
        h1{
            margin-bottom: 18px;
            sub{
                bottom: 0;
                font-size: 14px;
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
                color: ${({ theme }) => theme['success-color']};
                svg{
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
                }
            }
        }
    }
    ul{
        margin-top: 15px;
    }
    .chart-dataIndicator{
        li{
            font-size: 13px;
            color: ${({ theme }) => theme['gray-color']};
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
            }
        }
    }
    .chartjs-tooltip{
        min-width: 140px !important;
        @media only screen and (max-width: 1199px){
            min-width: 115px !important;
        }
    }
    .deals-barChart{
        display: flex;
        .card-bar-top{
            &:not(:last-child){
                margin-right: 30px;
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
            }
        }
        h4{
            font-weight: 400;
            color: ${({ theme }) => theme['light-gray-color']};
            p{
                &.growth-down{
                    .deal-percentage{
                        color: ${({ theme }) => theme['danger-color']};
                    }
                }
                &.growth-up{
                    .deal-percentage{
                        color: ${({ theme }) => theme['success-color']};
                    }
                }
                .deal-percentage{
                    svg,
                    img,
                    i{
                        margin-right: 3px;
                    }
                }
                .deal-value{
                    font-size: 22px;
                    font-weight: 600;
                    margin-right: 8px;
                    color: ${({ theme }) => theme['dark-color']};
                }
            }
        }
    }
    .deals-list{
        .custom-label{
            font-size: 14px;
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
            }
        }
    }
`;

const CardGroup = Styled.div`
    .forcast-overview{
        .ant-card-body{
            padding: 0 24px !important;
            @media only screen and (max-width: 1199px){
                padding: 24px 24px 0 24px !important;
            }
        }
    }
    .card-radio{
        .ant-radio-button-wrapper{
            height: 30px;
            line-height: 28px;
            font-size: 12px;
            font-weight: 500;
            padding: 0 10.5px;
            color: ${({ theme }) => theme['gray-color']};
            border-color: ${({ theme }) => theme['border-color-light']};
            &:before{
                display: none;
            }
            &:focus-within{
                box-shadow: 0 0;
            }
            &:first-child{
                border-radius: 3px 0 0 3px;
            }
            &:last-child{
                border-radius: 0 3px 3px 0;
            }
            &.ant-radio-button-wrapper-checked{
                color: #fff !important;
                background: ${({ theme }) => theme['primary-color']} !important;
                &:hover{
                    color: #fff !important;
                    background: ${({ theme }) => theme['primary-color']} !important;
                }
            }
            &:hover{
                background: ${({ theme }) => theme['bg-color-normal']} !important;
            }
        }
    }
    .focard-wrapper{
        margin: 0 -12px;
        ${({ theme }) => (theme.rtl ? 'padding: 24px 24px 25px 0;' : 'padding: 24px 0 25px 24px;')};
        ${({ theme }) => (theme.topMenu ? 'padding-bottom: 0px' : 'padding-bottom: 25px')};
        
        @media only screen and (max-width: 1350px){
            padding: 24px 0 25px 10px;
        }
        @media only screen and (max-width: 1199px){
            margin: 0;
        }
        .ant-col-md-12{
            ${({ theme }) => (theme.rtl ? 'padding: 0 12px 0 18px;' : 'padding: 0 18px 0 12px;')}
            
            @media only screen and (max-width: 1350px){
                ${({ theme }) => (theme.rtl ? 'padding: 0 6px 0 14px;' : 'padding: 0 14px 0 6px;')}                
            }
            @media only screen and (max-width: 575px){
                &:not(:last-child){
                    margin-bottom: 20px;
                }
            }
            &:first-child{
                @media only screen and (max-width: 1350px){
                    ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
                }
                @media only screen and (max-width: 1199px){
                    padding: ${({ theme }) => (theme.rtl ? '0 0 0 12px' : '0 12px 0 0')};
                    @media only screen and (max-width: 575px){
                        padding: 0;
                    }
                }
            }
            &:last-child{
                padding: 0 14px 0 18px;
                @media only screen and (max-width: 1350px){
                    &:last-child{
                        padding: 0 10px 0 14px;
                    }
                }
                @media only screen and (max-width: 1199px){
                    &:last-child{
                        padding: 0 0 0 12px;
                        @media only screen and (max-width: 575px){
                            padding: 0;
                        }
                    }
                }
            }
        }

        &.focard-divider{
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
            ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
            ${({ theme }) => (!theme.rtl ? 'border-right' : 'border-left')}: 1px solid ${({ theme }) =>
  theme['border-color-light']} !important;
            @media only screen and (max-width: 1199px){
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 0 none !important;
                padding: ${({ theme }) => (theme.rtl ? '0 10px 0 0' : '0 0 0 10px')};
            }
            .ant-col-md-12{
                &:first-child{
                    padding: 0 16px 0 24px;
                    @media only screen and (max-width: 1350px){
                        padding: ${({ theme }) => (theme.rtl ? '0 20px 0 10px' : '0 10px 0 20px')};
                    }
                    @media only screen and (max-width: 1199px){
                        padding: ${({ theme }) => (theme.rtl ? '0 0 0 12px' : '0 12px 0 0')};
                    }
                    @media only screen and (max-width: 575px){
                        padding: 0;
                    }
                }
                &:last-child{
                    padding: ${({ theme }) => (theme.rtl ? '0 18px 0 10px' : '0 10px 0 18px')};
                    @media only screen and (max-width: 1350px){
                        padding: ${({ theme }) => (theme.rtl ? '0 20px 0 4px' : '0 4px 0 20px')};
                    }
                    @media only screen and (max-width: 1199px){
                        padding: ${({ theme }) => (theme.rtl ? '0 12px 0 0px' : '0 0 0 12px')};
                    }
                    @media only screen and (max-width: 575px){
                        padding: 0;
                    }
                }
            }
        }
    }

    .traffic-table{
        min-height: 438px;
        .ant-table{
            border-radius: 10px;
        }
        table{
            color: #333;
            thead{
                th{
                    background-color: ${({ theme }) => theme['bg-color-light']};
                    padding: 11.5px 16px;
                    &:nth-child(2){
                        border-left: 1px solid ${({ theme }) => theme['border-color-light']};
                    }
                    &:nth-child(4){
                        border-right: 1px solid ${({ theme }) => theme['border-color-light']};
                    }
                }
            }
            tbody{
                tr{
                    &:hover{
                        td{
                            background: ${({ theme }) => theme['bg-color-light']};
                            .social-name{
                                color: ${({ theme }) => theme['primary-color']};
                            }
                        }
                    }
                }
                td{
                    padding: 14.5px 15px;
                    text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};;
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')};: 1px solid ${({ theme }) =>
  theme['border-color-light']};
                    color: ${({ theme }) => theme['gray-color']};
                    &:first-child{
                        ${({ theme }) => (!theme.rtl ? 'border-left' : 'border-right')};: 0 none;
                        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};;
                        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')};: 25px;
                    }
                    &:last-child{
                        ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')};: 0 none;
                        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')};: 25px;
                    }
                    .traffic-title{
                        font-weight: 500;
                        color: ${({ theme }) => theme['dark-color']};
                    }
                    .social-name{
                        color: ${({ theme }) => theme['info-color']};
                    }
                }
            }
        }
    }
`;

const ExList = Styled.div`
    padding: 25px 0 0;
    height: 100%;
    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme['border-color-light']};
    @media only screen and (max-width: 1599px){
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
        margin: 0 -15px;
        padding: 15px 0 0;

    }
    div{
        margin-bottom: 25px;
        @media only screen and (max-width: 1599px){
            flex: 0 0 25%;
            padding: 15px;
            margin-bottom: 10px;
        }
        @media only screen and (max-width: 1199px){
            flex: 0 0 50%;
            padding: 5px 15px;
            margin-bottom: 5px;
        }
        @media only screen and (max-width: 575px){
            flex: 0 0 100%;
            text-align: center;
        }
        p{
            font-size: 14px;
            color: ${({ theme }) => theme['light-gray-color']};
            margin-bottom:0;
        }
        h1{
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 0;
            @media only screen and (max-width: 991px){
                font-size: 20px;
            }
            & > span{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                @media only screen and (max-width: 1599px){
                    display: block;
                }
            }
            sub{
                font-size: 13px;
                font-weight: 400;
                display: inline-flex;
                align-items: center;
                line-height: normal;
                color: ${({ theme }) => theme['light-color']};
                span{
                    display: inline-flex;
                    align-items: center;
                    color: ${({ theme }) => theme['success-color']};
                    padding: ${({ theme }) => (theme.rtl ? '0 0 0 10px' : '0 10px 0 0')};
                }
                svg{
                    width:12px;
                }
                &.growth-downward{
                    span{
                        color: ${({ theme }) => theme['danger-color']};
                    }
                }
            }
        }
    }
`;

const OverviewCard = Styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 25px 25px 20px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-bottom: 30px;
    ${({ theme }) => (theme.topMenu ? 'min-height: 595px' : 'min-height: auto')};
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
    &:before{
        position: absolute;
        content: '';
        width: 100%;
        height: 215px;
        background:linear-gradient(45deg, ${({ theme }) => theme['secondary-color']}, ${({ theme }) =>
  theme['warning-color']});
  ${({ theme }) => (theme.rtl ? 'right' : 'left')}:0;
        top: 0;
        z-index:-1;
    }
    .overview-box{
        .ant-card-body{
            padding: 22px 25px 14px !important;
        }
        .ant-progress{
            margin-bottom: 15px;
        }
        .ant-progress-bg{
            height: 6px !important;
        }
        .overview-box-single{
            h1{
                margin-bottom: 0;
            }
            p{
                color: ${({ theme }) => theme['light-color']};
            }
        }
        .growth-downward,
        .growth-upward{
            span{
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
            }
        }
        .overview-box-percentage{
            font-weight: 500;
        }
    }
    .ant-card{
        box-shadow: 0 10px 30px rgba(146,153,184,0.15);
        .growth-upward{
            color: ${({ theme }) => theme['success-color']};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${({ theme }) => theme['light-gray-color']};
                font-weight: 400;
                font-size: 13px;
            }
        }
        .growth-downward{
            color: ${({ theme }) => theme['danger-color']};
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            span{
                color: ${({ theme }) => theme['light-gray-color']};
                font-weight: 400;
                font-size: 13px;
            }
        }
    }
    .overview-head{
        margin-bottom: 70px;
        h1{
            font-size: 16px;
            font-weight: 500;
            color: #fff;
        }
        .ant-btn-default{
            font-size: 12px;
            background: rgba(255,255,255,0.1);
            padding: 0px 11px;
            border: 0 none;
            color: #fff;
            svg,
            img,
            i{
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
            }
        }
    }
`;

const PerformanceChartWrapper = Styled.div`
    @media only screen and (max-width: 1599px){
        min-height: 524px;
        background: #fff;
        border-radius: 10px;
    }
    .performance-lineChart{
        margin-top: 20px;
        .chart-label{
            display: none;
        }
        ul{
            margin-top: 16px;
            li{
                &:not(:last-child){
                    ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 25px;
                }
            }
        }
    }
    .chartjs-tooltip{
        min-width: 175px !important;
        @media only screen and (max-width: 767px){
            min-width: 150px !important;
        }
    }
`;

const Pstates = Styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: -24px 0 25px;
    @media only screen and (max-width: 767px){
        margin: -19px 0 25px;
        flex-flow: column;
    }
    >div{
        transition: 0.3s ease;
        padding: 20px;
        @media only screen and (max-width: 1599px){
            flex: 0 0 50%;
        }
        &:hover{
            box-shadow: 0 15px 30px rgba(146,153,184,0.15);
            p{
                font-weight: 500;
                color: ${({ theme }) => theme['primary-color']};
            }
        }
        &.active{
            background: ${({ theme }) => theme['bg-color-light']};
            &:hover{
                box-shadow: 0 15px 30px #fff;
            }
        }
    }
    .growth-upward,
    .growth-downward{
        cursor: pointer;
        &:focus{
            outline: none
        }
        h1{
            font-size: 24px;
            sub{
                span{
                    font-weight: 500;
                }
            }
        }
    }
`;

const SessionChartWrapper = Styled.div`
    min-height: 510px;
    background: #fff;
    border-radius: 10px;
    @media only screen and (max-width: 1599px){
        min-height: 440px;
    }
    @media only screen and (max-width: 991px){
        min-height: auto;
    }
    .session-chart-inner{
        ul{
            display: flex;
            max-width: 365px;
            margin: 40px auto 6px auto;
            li{
                width: 33.33%;
                text-align: center;
                position: relative;
                .doughnutLabelColor{
                    position: absolute;
                    display: block;
                    height: 8px;
                    width: 8px;
                    border-radius: 50%;
                    top: 50%;
                    transform: translateY(-50%);
                    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 14px;
                    @media only screen and (max-width: 1400px){
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 5px;
                    }
                    @media only screen and (max-width: 1300px){
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                    }
                    @media only screen and (max-width: 1199px){
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 15px;
                    }
                    @media only screen and (max-width: 379px){
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                    }
                }
                .doughnutLabe{
                    color: ${({ theme }) => theme['gray-color']};
                }
            }
        }
        p{
            position: absolute;
            top: 50%;
            left: 50%;
            text-align: center;
            width: 200px;
            margin-bottom: 0;
            display: inline-block;
            transform: translate(-50%, -50%);
            span{
                font-size: 24px;
                display: block;
                font-weight: 600;
            }
        }
    }
`;

const SessionState = Styled.div`
    /* // margin: 0 0 15px -15px; */
    max-width: 365px;
    margin: 42px auto auto;
    >div{
        width: 33.33%;
        text-align: center;
        span{
            font-size: 18px;
            font-weight: 600;
            display: inline-block;
            @media only screen and (max-width: 1300px){
                display: block;
            }
            @media only screen and (max-width: 1199px){
                display: inline-block;
            }
            @media only screen and (max-width: 379px){
                display: block;
            }
        }
        sub{
            bottom: 0;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 5px;
            font-size: 13px;
            color: ${({ theme }) => theme['light-gray-color']};
        }
    }

    .session-single{
        text-align: center;
    }
`;

const RegionList = Styled.div`
    max-height: 300px;
    overflow: hidden auto;
    border: 1px solid ${({ theme }) => theme['border-color-light']};
    table{
        tr{
            &:first-child{
                td{
                    padding-top: 15px;
                }
            }
            &:last-child{
                td{
                    padding-bottom: 15px;
                }
            }
            th{
                font-size: 13px;
                font-weight: 500;
                color: ${({ theme }) => theme['dark-color']};
                background: ${({ theme }) => theme['bg-color-light']};
                padding: 9px 20px;
                border: 0 none;
            }
            td{
                font-size: 13px;
                border: 0 none;
                padding: 6px 20px;
                color: ${({ theme }) => theme['gray-color']};
            }
        }
    }

`;

const RegionMap = Styled.div`
    text-align: center;
    height: 100%;
    ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 20px;
    .__react_component_tooltip {
        background: ${({ theme }) => theme['dark-color']};
        border-radius: 3px;
        box-shadow: 0 10px 15px ${({ theme }) => theme['light-color']}15;
    }
    >div{
        width: 100%;
        height: 250px;
        overflow: hidden;
        @media only screen and (max-width: 479px){
            height: 200px;
        }
    }
    svg{
        width: 450px;
        @media only screen and (max-width: 479px){
            height: 180px;
        }
        @media only screen and (max-width: 440px){
            width: 310px;
        }
        @media only screen and (max-width: 320px){
            width: 280px;
        }
    }
    .controls{
        position: absolute;
        right: 0;
        bottom: 10px;
        button{
            display: block;
            width: 27px;
            height: 27px;
            background: none;
            color: #5a5f7d;
            border: 1px solid #f1f2f6;
            padding: 0;
            font-size: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            cursor: pointer;
            &:first-child{
                border-radius: 6px 6px 0 0;
            }
            &:last-child{
                border-radius: 0 0 6px 6px;
            }
            &:focus{
                outline: none;
            }
            svg{
                width: 10px;
            }
        }
        button + button{
            border-top: 0 none;
        }
    }
`;

const LadingPages = Styled.div`
    @media only screen and (max-width: 1599px){
        min-height: 380px;
    }
    @media only screen and (max-width: 1199px){
        min-height: 100%;
    }
    .ant-table-tbody{
        .ant-table-cell{
            white-space: normal !important;
            @media only screen and (max-width: 991px){
                white-space: nowrap !important;
            }
        }
    }
    table{
        th{
            white-space: nowrap !important;
            text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')} !important;
            &:first-child{
                text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')} !important;
            }
        }
        tbody{
            tr{
                td{
                    text-align: ${({ theme }) => (!theme.rtl ? 'right' : 'left')};
                    color: ${({ theme }) => theme['gray-color']};
                    &:first-child{
                        text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
                    }
                    .page-title{
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
    }
`;

const CardBarChart2 = Styled.div`
    @media only screen and (max-width: 379px){
        text-align: center
    }
    h1{
        margin-bottom: 5px;
    }
    @media only screen and (max-width: 1500px){
        h1{
            font-size: 22px;
        }
    }
    & > span{
        font-size: 14px;
        color: ${({ theme }) => theme['light-gray-color']};
    }
    p{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 21px 0 0 0;
        @media only screen and (max-width: 379px){
            justify-content: center;
        }
        .growth-upward, .growth-downward{
            display: inline-flex;
            align-items: center;
            ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 10px;
            font-weight: 600;

            svg{
                width: 15px;
            }
        }
        .growth-upward{
            color: ${({ theme }) => theme['success-color']};
            svg{
                color: ${({ theme }) => theme['success-color']};
            }
        }
        .growth-downward{
            color: ${({ theme }) => theme['danger-color']};
            svg{
                color: ${({ theme }) => theme['danger-color']};
            }
        }
        span{
            color: ${({ theme }) => theme['light-gray-color']};
            font-size: 13px;
            display: inline-block;
        }
    }
`;

const SocialMediaWrapper = Styled.div`
    .ant-card-body{
        padding: 12px 25px 10px !important;
    }
`;

const LineChartWrapper = Styled.div`
    .linkedin-chart-wrap{
        min-height: 388px;
    }
    .growth-upward,
    .growth-downward{
        line-height: 2.2;
        h1{
            margin-bottom: 0;
            svg,
            i,
            img{
                margin-right: 6px;
            }
        }
    }
    .line-chart-row{
        &:not(:last-child){
            margin-bottom: 24px;
        }
        .border-linechart{
            border-bottom: 1px solid ${({ theme }) => theme['border-color-deep']};
            position: relative;
            &:before{
                position: absolute;
                content: '';
                width: 10px;
                height: 2px;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                bottom: -1px;
                background: #fff;
            }
        }
    }
    .overview-container{
        .line-chart-row{
            &:not(:last-child){
                margin-bottom: 18px;
                ${({ theme }) => (theme.topMenu ? 'margin-bottom: 25px' : 'margin-bottom: 18px')};
            }
        }
    }
`;

const RatioCard = Styled.div`
    >.ant-card{
        ${({ theme }) => (theme.topMenu ? 'min-height: 225px' : 'min-height: 100%')};
        @media only screen and (max-width: 1599px){
            min-height: 225px;
        }
    }
    .ant-card-body{
        h1{
            font-size: 16px;
            font-weight: 500;
        }
    }
    .ratio-content{
        margin-top: 30px
        @media only screen and (max-width: 767px){
            margin-top: 25px;
        }
        h1{
            margin-bottom: 2px;
            font-size: 36px;
            font-weight: 600;
            @media only screen and (max-width: 767px){
                font-size: 30px;
            }
        }
        .ant-progress{
            margin-bottom: 12px;
            .ant-progress-bg{
                height: 6px !important;
            }
            .ant-progress-text{
                position: absolute;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
                bottom: 26px;
                font-weight: 500;
            }
            &.progress-success{
                .ant-progress-text{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
            &.ant-progress-status-warning{
                .ant-progress-text{
                    color: ${({ theme }) => theme['warning-color']};
                }
            }
        }
        p{
            color: ${({ theme }) => theme['light-color']};
            margin-bottom: 0;
            strong{
                font-size: 13px;
                color: ${({ theme }) => theme['dark-color']};
                font-weight: 600;
            }
        }
    }
`;

const IncomeExpenseWrapper = Styled.div`
    .ant-card-body{
        padding: 0 25px !important;
    }
    .ant-card-extra{
        .card-nav{
            ul{
                padding: 0;
                li{
                    padding: 0;
                }
            }
        }
    }
    canvas{
        padding: 25px 0 0;
        @media only screen and (max-width: 1599px){
            padding-top: 5px;
        }
    }
    .chart-dataIndicator{
        padding: 15px 0 25px 0;
        margin-top: 0 !important;
    }
    ul{
        padding: 10px 0 20px 0;
        margin: -5px -12px;
        li{
            padding: 5px 12px;
            font-size: 13px;
            color: ${({ theme }) => theme['light-gray-color']};
            @media only screen and (max-width: 575px){
                display: flex !important;
            }
            &:not(:last-child){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
                @media only screen and (max-width: 575px){
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                }
            }
        }
    }
    .chartjs-tooltip{
        min-width: 185px !important;
        @media only screen and (max-width: 1199px){
            min-width: 170px !important;
        }
    }
    .ant-card-extra{
        padding: 0;
    }
`;

const LocationMapWrapper = Styled.div`
    .location-map{
        padding: 10px 0 30px;
        position: relative;
        >div{
            width: 100%;
            height: 160px;
        }
        .controls{
            position: absolute;
            right: 25px;
            bottom: 20px;
            button{
                display: block;
                width: 27px;
                height: 27px;
                background: none;
                color: #5a5f7d;
                border: 1px solid #f1f2f6;
                padding: 0;
                font-size: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                cursor: pointer;
                &:focus{
                    outline: none;
                }
                svg{
                    width: 10px;
                }
            }
            button + button{
                border-top: 0 none;
            }
        }
    }
    .location-table{
        margin: 0 25px 18px;
        padding-top: 12px;
        min-height: 180px;
        border-top: 1px solid ${({ theme }) => theme['border-color-light']} !important;
        background: #ffffff;
        z-index: 999;
        position: relative;
        &.theme-2{
            min-height: 155px;
        }
        table{
            thead{
                th{
                    font-size: 12px;
                    background: #fff;
                    border: 0 none;
                    font-weight: 400;
                    text-transform: uppercase;
                    color: ${({ theme }) => theme['light-color']};
                }
            }
            tr{
                &:hover{
                    td{
                        background: #fff;
                    }
                }
                td{
                    border: 0 none;
                    color: ${({ theme }) => theme['gray-color']};
                }
                th,
                td{
                    padding: 7px 16px;
                    &:first-child{
                        padding-left: 0;
                    }
                    &:last-child{
                        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 0;
                    }
                }
            }
        }
    }
`;

const RevenueWrapper = Styled.div`

    .chart-label{
        justify-content: flex-start;
        margin-bottom: 26px;
        display: none
    }

    >.ant-card{
        min-height: 455px;
        @media only screen and (max-width: 1599px){
            min-height: 100%;
        }
    }
    .performance-lineChart{
        ul{
            margin: -25px -25px 20px;
        }
        
        &.theme-2{
            .custom-label{
                .current-amount{
                    color: ${({ theme }) => theme.pink};
                }
            }
        }
    }
    .custom-label{
        flex-direction: column;
        align-items: flex-start;
        margin: 25px;
        .current-amount{
            display: block;
            font-size: 24px;
            font-weight: 600;
            color: ${({ theme }) => theme['primary-color']};
        }
        .prev-amount{
            display: block;
            font-size: 24px;
            font-weight: 600;
            color: ${({ theme }) => theme['dark-color']};
        }
        div{
            span{
                display: inline-block;
            }
        }
    }

    .chartjs-tooltip{
        min-width: 166px !important;
        @media only screen and (max-width: 1199px){
            min-width: 150px !important;
        }
    }
`;

const RevenueTableWrapper = Styled.div`

    .full-width-table{
        >.ant-card{
            ${({ theme }) => (theme.topMenu ? 'min-height: 555px' : 'min-height: 500px')};
            @media only screen and (max-width: 1599px){
                min-height: 100%;
            }
        }
    }
    .revenue-table{
        .ant-table-content{
            .ant-table-cell{
                padding: 10px 20px;
                &:first-child{
                    ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 25px;
                }
                &:last-child{
                    ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 25px;
                }
            }
            thead{
                th{
                    font-weight: 500;
                    color: ${({ theme }) => theme['dark-color']};
                    &:last-child{
                        text-align: left;
                    }
                }
            }
            tbody{
                td{
                    color: ${({ theme }) => theme['gray-color']};
                }
            }
        }
    }
`;

const RevenueChartWrapper = Styled.div`
    .revenue-chat-label{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .chart-label{
            &:not(:last-child){
                margin-bottom: 18px;
            }
            .label-dot{
                &.dot-Desktop{
                    background: #20C997;
                }
                &.dot-Mobile{
                    background: #5F63F2;
                }
                &.dot-Tablets{
                    background: #FA8B0C;
                }
            }
        }
    }
    .revenue-chart-data{
        p{
            font-size: 18px;
            margin-bottom: 12px;
            &:last-child{
                margin-bottom: 0;
            }
            strong{
                font-weight: 500;
            }
        }
    }
`;

const TrafficTableWrapper = Styled.div`
    min-height: 450px;
    ${({ theme }) => (theme.topMenu ? 'min-height: 515px' : 'min-height: 450px')};
    @media only screen and (max-width: 1599px){
        min-height: 400px;
    }
    @media only screen and (max-width: 1199px){
        min-height: 100%;
    }
    .ant-table-content{
        .ant-table-cell{
            white-space: normal !important;
            @media only screen and (max-width: 991px){
                white-space: nowrap !important;
            }
        }
    }
    table{
        thead{
            tr{
                th{
                    background: #fff;
                    border-top: 1px solid ${({ theme }) => theme['border-color-light']};
                    color: ${({ theme }) => theme['dark-color']}
                    padding: 16px 25px;
                    text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                    &:first-child, &:nth-child(5){
                        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
                    }
                }
            }
        }
        tbody{
            tr{
                td{
                    padding: 16px 25px;
                    color: ${({ theme }) => theme['gray-color']};
                    text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                    &:first-child, &:nth-child(5){
                        text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
                    }
                }
            }
        }
    }
`;

const Map = Styled.div`
  margin: 1rem auto;
  width: 300px;

  svg {
    stroke: #fff;

    /* // All layers are just path elements */
    path {
      fill: #a82b2b;
      cursor: pointer;
      outline: none;

      /* // When a layer is hovered */
      &:hover {
        fill: rgba(168, 43, 43, 0.83);
      }

      /* // When a layer is focused. */
      &:focus {
        fill: rgba(168, 43, 43, 0.6);
      }

      /* // When a layer is 'checked' (via checkedLayers prop). */
      &[aria-checked='true'] {
        fill: rgba(56, 43, 168, 1);
      }

      /* // When a layer is 'selected' (via currentLayers prop). */
      &[aria-current='true'] {
        fill: rgba(56, 43, 168, 0.83);
      }

      /* // You can also highlight a specific layer via it's id */
      &[id='nz-can'] {
        fill: rgba(56, 43, 168, 0.6);
      }
    }
  }
`;

const ChartContainer = Styled.div`
    display: block;
    font-family: "Raleway";
    .chart-divider {
        display: block;
        width: 100%;
        height: 100px;
    }
    .chartjs-tooltip {
        opacity: 1;
        position: absolute;
        background: #fff
        box-shadow: 0 8px 10px #9299B815;
        padding: 10px 12px !important;
        border-radius: 3px;
        border: 1px solid #F1F2F6;
        min-width: 80px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        pointer-events: none;
        transform: translate(-50%, 5%);
        z-index: 222;
        top: 0;
        left: 0;
        @media only screen and (max-width: 1199px){
            padding: 6px 8px !important;
        }
        &:before {
            position: absolute;
            content: '';
            border-top: 5px solid #fff;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            bottom: -5px;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 50%;
            transform: translateX(-50%);
        }
    }
    .chartjs-tooltip-key {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: "pink";
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}
        : 10px;
    }
    .tooltip-title {
        color: ${({ theme }) => theme['gray-color']};
        font-size: 12px;
        font-weight: 500 !important;
        font-family: 'Inter', sans-serif;
        text-transform: capitalize;
        margin-bottom: 4px;
    }
    .tooltip-value {
        color: #63b963;
        font-size: 22px;
        font-weight: 600 !important;
        font-family: 'Inter', sans-serif;
    }
    .tooltip-value sup {
        font-size: 12px;
        @media only screen and (max-width: 1199px){
            font-size: 11px;
        }
    }
    table{
        tbody{
            td{
                font-size: 13px;
                font-weight: 500;
                padding-bottom: 3px;
                white-space: nowrap;
                color: ${({ theme }) => theme['dark-color']};
                @media only screen and (max-width: 1199px){
                    font-size: 12px;
                }
                .data-label{
                    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 3px;
                    color: ${({ theme }) => theme['light-gray-color']};
                }
            }
        }
    }
`;

const SentEmailWrapper = Styled.div`
    .ant-card-body{
        padding: 30px 25px !important;
    }
    .sent-emial-chart{
        color: #333;
        canvas{
            margin: 0 auto;
        }
    }
    .sent-emial-data{
        margin-top: 30px;
    }
    .sent-emial-box{
        justify-content: space-between;
        @media only screen and (max-width: 575px){
            align-items: flex-start;
            flex-direction: column;
        }
    }
    .sent-emial-item{
        display: flex;
        @media only screen and (max-width: 575px){
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }
        .sent-emial-icon{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 10px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
            background-color: ${({ theme }) => theme['primary-color']}10;
            &.icon-success{
                background-color: ${({ theme }) => theme['success-color']}10;
            }
            &.icon-primary{
                background-color: ${({ theme }) => theme['primary-color']}10;
            }
            &.icon-warning{
                background-color: ${({ theme }) => theme['warning-color']}10;
            }
        }
        .sent-emial-content{
            flex: auto;
            h4{
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 2px;
                strong{
                    font-weight: 500;
                }
            }
            p{
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 0;
                color: ${({ theme }) => theme['gray-color']};
            }
        }
    }
`;

const RecentDealsWrapper = Styled.div`
    margin-top: 18px;
    min-height: 314px;
    .recent-deals-table{
        .dealing-author{
            display: flex;
            align-items: center;
            img{
                max-width: 36px;
                border-radius: 50%;
            }
            .dealing-author-info{
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 12px;
                h4{
                    font-size: 14px;
                    font-weight: 600;
                    margin-bottom: 2px;
                }
                p{
                    font-size: 13px;
                    color: #9297AF;
                    margin-bottom: 0;
                }
            }
        }
        .deal-amount{
            font-size: 14px;
            font-weight: 600;
            color: ${({ theme }) => theme['dark-color']};
        }
        .ant-table-tbody > tr > td{
            padding: 7px 25px;
            border-bottom: 0 none;
        }
    }
`;

const SalesTargetWrap = Styled.div`
    .ant-card{
        min-height: 435px;
    }
    .target-progressbar-wrap{
        direction: ltr;
        text-align: center;
        margin-bottom: 70px;
    }
    .s-target-list__item{
        h2{
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 4px;
        }
        &.target-revinue{
            h2{
                color: ${({ theme }) => theme['success-color']};
            }
        }
        p{
            margin-bottom: 0;
            color: ${({ theme }) => theme['gray-color']};
        }
    }
`;

const SalesGrowthWrap = Styled.div`
    @media only screen and (max-width: 1599px){
        min-height: 435px;
        background-color: #fff;
        border-radius: 10px;
    }
    .growth-chart-wrap{
        margin-top: 58px;
    }
    .growth-list__item{
        h2{
            font-size: 22px;
            font-weight: 600;
            line-height: 1.4;
            margin-bottom: 2px;
        }
        p{
            margin-bottom: 0;
            color: ${({ theme }) => theme['gray-color']};
        }
    }
`;

const TopSellerWrap = Styled.div`
    .top-seller-table{
        min-height: auto;
        .product-info{
            .product-img{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
            }
        }
        .ant-table-row {
            .ant-table-cell{
                padding: 15px 15px;
                &:not(first-child){ 
                    text-align: right;
                }
            }
        }
    }
`;

export {
  ChartContainer,
  DashboardBaseStyleWrap,
  EChartCard,
  Focard,
  CardBarChart,
  CardGroup,
  ExList,
  OverviewCard,
  PerformanceChartWrapper,
  Pstates,
  SessionChartWrapper,
  SessionState,
  RegionMap,
  LadingPages,
  RegionList,
  CardBarChart2,
  SocialMediaWrapper,
  LineChartWrapper,
  RatioCard,
  IncomeExpenseWrapper,
  LocationMapWrapper,
  RevenueWrapper,
  RevenueTableWrapper,
  RevenueChartWrapper,
  TrafficTableWrapper,
  Map,
  SentEmailWrapper,
  RecentDealsWrapper,
  OverviewSalesCard,
  SalesTargetWrap,
  SalesGrowthWrap,
  TopSellerWrap,
};
