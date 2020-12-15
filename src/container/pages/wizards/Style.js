import Styled from 'styled-components';

const FigureWizards = Styled.figure`

    display: inline-flex;
    img {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
    }
`;

const NotFoundWrapper = Styled.div`
    text-align: center;
    margin-top: 60px;
    h1{
        border-bottom: 1px solid ${({ theme }) => theme['border-color-normal']};;
        border-top: 1px solid ${({ theme }) => theme['border-color-normal']};;
        padding: 15px 0 20px;
        color: ${({ theme }) => theme['dark-color']};
    }
`;

const ProductCard = Styled.div`
    border-radius: 10px;
    background-color: #fff;
    position: relative;
    
    @media only screen and (max-width: 767px){
        max-width: 350px;
        margin: 0 auto;
    }
    &.list-view{
        max-width: 100%;
        .product-single-price__offer{
            @media only screen and (max-width: 991px) and (min-width: 768px){
                display: block;
            }
        }
    }
    .product-list{
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        figure{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
            @media only screen and (max-width: 1199px){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
            }
            @media only screen and (max-width: 991px){
                margin: 0 0 20px;
            }
            img{
                border-radius: 10px;
            }
        }
        .product-single-description{
            p{
                color: ${({ theme }) => theme['gray-color']};
                font-size: 15px;
            }
        }
        .product-single-title{
            font-size: 18px;
            margin: 25px 0 16px;
            @media only screen and (max-width: 1199px){
                margin: 0 0 16px;
            }
        }
        .product-single-info{
            margin-top: 25px;
            @media only screen and (max-width: 1199px){
                margin-top: 0;
            }
        }
        .product-single-price__new{
            font-size: 16px;
        }
        .product-single-action{
            flex-flow: column;
            align-items: flex-start;
            button{
                min-width: 132px;
                margin: 0;
            }
            .btn-cart{
                margin: 0 0 10px;
            }
            .ant-btn-sm{
                height: 38px;
            }
        }
        .btn-heart{
            @media only screen and (max-width: 1599px){
                top: 0;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 10px;
            }
            @media only screen and (max-width: 1199px){
                top: -4px;
                ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
            }
            @media only screen and (max-width: 991){
                top: 0;
            }
        }
    }
    figure{
        margin-bottom: 0;
        img{
            width: 100%;
        }
    }
    figcaption{
        padding: 20px 20px 26px;
    }
    .btn-heart{
        position: absolute;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 20px;
        top: 15px;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 5px 10px ${({ theme }) => theme['light-color']}15;
    }
    .product-single-title{
        margin-bottom: 8px;
        font-size: 15px;
        font-weight: 500;
        a{
            color: ${({ theme }) => theme['dark-color']};
            &:hover{
                color: ${({ theme }) => theme['primary-color']};
            }
        }
    }
    .product-single-price{
        margin-bottom: 5px;
        del{
            margin: 0 5px;
        }
    }
    .product-single-price__new{
        font-weight: 600;
        color: ${({ theme }) => theme['primary-color']};
    }
    .product-single-price__offer{
        font-weight: 500;
        font-size: 12px;
        color: ${({ theme }) => theme['secondary-color']};
    }
    .product-single-rating{
        font-size: 12px;
        font-weight: 500;
        .ant-rate{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
        }
        .ant-rate-star:not(:last-child) {
            ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 2px !important;
        }
        .total-reviews{
            font-weight: 400;
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
            color: ${({ theme }) => theme['light-color']};
        }
    }
    .product-single-action{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 21px -5px -5px -5px;
        button{
            margin: 5px;
        }
        .ant-btn-default{
            border-color: ${({ theme }) => theme['border-color-normal']};
            &:hover{
                border-color: ${({ theme }) => theme['primary-color']};
            }
        }
        .ant-btn-white{
            &:hover{
                border-color: ${({ theme }) => theme['primary-color']} !important;
            }
        }
        .ant-btn-sm{
            font-size: 12px;
            padding: 0px 18.065px;
            height: 36px;
        }
    }
`;

const ProductTable = Styled.div`
    .table-cart{
        .ant-table-content{
            padding-bottom: 10px;
        }
        .ant-table-tbody{
            .cart-single{
                figure{
                    align-items: center;
                    margin-bottom: 0;
                    img{
                        max-width: 80px;
                        min-height: 80px;
                        border-radius: 10px;
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 25px;
                    }
                }
                .cart-single__info{
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6{
                        font-size: 15px;
                        font-weight: 500;
                    }
                    p{
                        margin-bottom: 0;
                    }
                }
            }
            .ant-table-row{
                &:hover{
                    box-shadow: 0 10px 15px ${({ theme }) => theme['light-color']}15;
                    td{
                        background: #fff !important;
                    }
                    .table-action{
                        button{
                            background: #FF4D4F15;
                            i,
                            svg{
                                color: ${({ theme }) => theme['danger-color']};
                            }
                        }
                    }
                }
            }
        }
    }
    .table-invoice{
        .ant-table table {
            text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')}
        }
        table{
            thead{
                >tr{
                    th{
                        border-top: 1px solid ${({ theme }) => theme['border-color-light']};
                        border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
                        &:first-child{
                            ${({ theme }) => (!theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme['border-color-light']};
                        }
                        &:last-child{
                            ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme['border-color-light']};
                            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                        }
                    }
                }
            }
            tbody{
                >tr{
                    &.ant-table-row{
                        &:hover{
                            >td{
                                background: #fff;
                            }
                        }
                    }
                    td{
                        border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
                        color: ${({ theme }) => theme['gray-color']};
                        border-radius: 0 !important;
                        &:last-child{
                            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                        }
                        .product-info-title{
                            font-size: 15px;
                            font-weight: 500;
                            color: ${({ theme }) => theme['dark-color']};
                        }
                        .product-unit{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 40px;
                        }
                        .product-quantity{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 50px;
                        }
                    }
                }
            }
        }
        .product-info{
            min-width: 300px;
            .product-info{
                margin-bottom: 8px;
            }
        }
    }
    table{
        thead{
            tr{
                border-radius: 10px;
                th{
                    border-bottom: 0 none;
                    background:  ${({ theme }) => theme['bg-color-light']};
                    &:first-child{
                    border-radius: ${({ theme }) => (theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')} !important;
                    }
                    &:last-child{
                        border-radius: ${({ theme }) => (!theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')} !important;
                    }
                }
            }
        }
        tbody{
            tr{
                border-radius: 10px;
                td{
                    border-bottom: 0 none;
                    &:first-child{
                        border-radius: ${({ theme }) => (theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')};
                    }
                    &:last-child{
                        border-radius: ${({ theme }) => (!theme.rtl ? '0 10px 10px 0' : '10px 0 0 10px')} !important;
                    }
                }
            }
        }

        .info-list{
            li{
                display: inline-block;
                &:not(:last-child){
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
                }
                span{
                    font-size: 14px;
                    color: ${({ theme }) => theme['gray-color']};
                    &.info-title{
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 5px;
                        font-weight: 500;
                        color: ${({ theme }) => theme['dark-color']};
                    }
                }
            }
        }
        .cart-single-price{
            font-size: 15px;
            color: ${({ theme }) => theme['gray-color']};
        }
        .cart-single-t-price{
            font-size: 15px;
            font-weight: 500;
            color: ${({ theme }) => theme['primary-color']};
            display: inline-block;
            min-width: 80px;
        }
        .cart-single-quantity{
            button{
                background-color: ${({ theme }) => theme['bg-color-normal']};
                i,
                img,
                svg{
                    min-width: 12px;
                    height: 12px;
                }
                &.btn-inc,
                &.btn-dec{
                    width: 36px;
                    height: 36px;
                }
                &.btn-inc{
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
                    @media only screen and (max-width: 575px){
                        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                    }
                }
                &.btn-dec{
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 16px;
                    @media only screen and (max-width: 575px){
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                    }
                }
            }
        }
        .table-action{
            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
            button{
                padding: 0 11px;
                height: 38px;
                background: #fff;
                i,
                svg{
                    color: #707070;
                }
            }
        }
    }
`;

const CouponForm = Styled.div`
    margin: 10px 0 20px 0;
    .coupon-form-input{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
        input::placeholder{
            color: ${({ theme }) => theme['light-color']};
        }
    }
    #submitCoupon{
        >.ant-row{
            align-items: center;
        }
        .ant-form-item{
            margin-bottom: 0;
        }
        .ant-form-item-control-input-content{
            input{
                max-width: 180px;
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 20px;
                height: 44px;
                background:  ${({ theme }) => theme['bg-color-light']};
                border-color:  ${({ theme }) => theme['border-color-light']};
                @media only screen and (max-width: 991px){
                    max-width: 100%;
                }
                @media only screen and (max-width: 575px){
                    max-width: 200px;
                    margin-bottom: 15px;
                }
            }
        }
        button{
            border-radius: 5px;
            height: 44px;
            box-shadow: 0 3px 5px ${({ theme }) => theme['success-color']}15;
        }
    }
`;

const OrderSummary = Styled.div`
    max-width: 650px;
    margin: 0 auto;
    .ant-card{
        margin-bottom: 0 !important;
    }
    .ant-card-body{
        box-shadow: 0 10px 30px ${({ theme }) => theme['dark-color']}10;
    }
    .ant-form-item{
        margin-bottom: 0;
    }

    .summary-table-title{
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 25px;
        color: ${({ theme }) => theme['dark-color']};
    }
    .order-summary-inner{
        padding-bottom: 5px;
        @media only screen and (max-width: 1599px){
            max-width: 600px;
            margin: 0 auto;
        }
        .ant-select{
            .ant-select-selection-item{
                font-weight: 500;
            }
        }
    }
    .invoice-summary-inner{
        .summary-list{
            margin: 22px 0;
            li{
                &:not(:last-child){
                    margin-bottom: 12px;
                }
            }
        }
        .summary-total-amount{
            color: ${({ theme }) => theme['primary-color']} !important;
        }
    }

    .summary-list{
        li{
            display: flex;
            justify-content: space-between;
            &:not(:last-child){
                margin-bottom: 18px;
            }
            span{
                font-weight: 500;
            }
            .summary-list-title{
                color: ${({ theme }) => theme['gray-color']};
            }
            .summary-list-text{
                color: ${({ theme }) => theme['dark-color']};
            }
        }
    }
    .ant-select-focused.ant-select-single{
        .ant-select-selector{
            box-shadow: 0 0 !important;
        }
    }
    .ant-select-single{
        margin-top: 18px;
        .ant-select-selection-search-input{
            height: fit-content;
        }
        .ant-select-selector{
            padding: 0 !important;
            border: 0 none !important;
            color: ${({ theme }) => theme['success-color']};
        }
        .ant-select-arrow{
            ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
        }
    }
    .promo-apply-form{
        display: flex;
        align-items: flex-end;
        margin: 5px 0 18px;
        @media only screen and (max-width: 479px){
            flex-flow: column;
            align-items: flex-start;
        }
        .ant-form-item{
            margin-bottom: 0;
        }
        .ant-row{
            flex: auto;
            flex-flow: column;
        }
        .ant-form-item-label{
            text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
            label{
                font-weight: 400;
                margin-bottom: 4px;
                height: fit-content;
                color: ${({ theme }) => theme['gray-color']};
            }
        }
        .ant-form-item-control-input-content{
            display: flex;
            @media only screen and (max-width: 479px){
                flex-flow: column;
            }
            input{
                margin: ${({ theme }) => (theme.rtl ? '0 0 0px 6px' : '0 6px 0px 0')};
                height: 40px;
                @media only screen and (max-width: 479px){
                    margin: ${({ theme }) => (theme.rtl ? '0 0 10px 6px' : '0 6px 10px 0')};
                    width: 100% !important;
                }
            }
            button{
                height: 40px;
            }
        }
    }
    .summary-total{
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
        .summary-total-label{
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme['dark-color']};
        }
        .summary-total-amount{
            font-size: 18px;
            font-weight: 600;
            color: ${({ theme }) => theme['primary-color']};
        }
    }
    .btn-proceed{
        font-size: 15px;
        font-weight: 500;
        width: 100%;
        height: 50px;
        border-radius: 8px;
        margin-top: 22px;
        @media only screen and (max-width: 575px){
            font-size: 13px;
        }
        a{
            display: flex;
            align-items: center;
        }
        i,
        svg{
            ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
        }
    }
`;

const AddProductForm = Styled.div`
    margin-top: 28px;
    @media only screen and (max-width: 575px){
        margin-top: 15px;
    }
    .ant-select-arrow{
        ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 11px;
    }
    
    .ant-table table {
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
    }
    .add-product-block{
        background: ${({ theme }) => theme['bg-color-light']};
        border-radius: 20px;
        padding: 30px;
        border: 1px solid ${({ theme }) => theme['bg-color-light']};
        @media only screen and (max-width: 575px){
            padding: 20px;
        }
        &:not(:last-child){
            margin-bottom: 30px;
        }
        .ant-card{
            margin-bottom: 0 !important;
            border-radius: 20px;
        }
        .add-product-content{
            box-shadow: 0 10px 30px ${({ theme }) => theme['light-color']}10;
            border-radius: 20px;
            .ant-card-head{
                padding: 0 40px !important;
                border-radius: ${({ theme }) => (theme.rtl ? '20px 0 0 20px' : '20px 20px 0 0')};
                @media only screen and (max-width: 575px){
                    padding: 0 15px !important;
                }
            }
            .ant-card-head-title{
                padding: 26px 0 25px;
            }
            .ant-card-body{
                padding: 26px 40px 40px !important;
                @media only screen and (max-width: 575px){
                    padding: 20px !important;
                }
            }
        }
        .ant-upload{
            border-spacing: 6px;
            border-width: 2px;
            border-radius: 10px;
            background: ${({ theme }) => theme['bg-color-light']};
            border-color: ${({ theme }) => theme['border-color-deep']};
            padding: 50px;
            @media only screen and (max-width: 575px){
                padding: 15px !important;
            }
            .ant-upload-drag-icon{
                i,
                svg{
                    color: ${({ theme }) => theme['extra-light-color']};
                }
            }
            .ant-upload-text{
                font-weight: 500;
                margin-bottom: 8px;
            }
            .ant-upload-hint{
                font-size: 15px;
                font-weight: 500;
                color: ${({ theme }) => theme['gray-color']};
                span{
                    color: ${({ theme }) => theme['secondary-color']};
                }
            }
        }
        .ant-upload-list-item{
            height: 100%;
            padding: 0;
            border: 0 none;
            margin-top: 25px;
        }
        .ant-upload-list-item-info{
            height: 100%;
            >span{
                display: flex;
                align-items: center;
            }
            .ant-upload-list-item-name{
                padding: 0 10px;
                font-weight: 500;
                color: ${({ theme }) => theme['dark-color']};
                &:hover{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
            .ant-upload-list-item-card-actions{
                position: relative;
                top: 0;
                i,
                svg{
                    width: 15px;
                    color: ${({ theme }) => theme['danger-color']};
                }
            }
            .ant-upload-list-item-thumbnail{
                position: relative;
                top: 0;
                min-width: 100px;
                width: auto;
                height: 100%;
                img{
                    max-width: 100px;
                    width: 100%;
                    height: 100%;
                    border-radius: 6px;
                }
            }
        }
    }
    .add-form-action{
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        margin-top: 40px;
        .ant-form-item-control-input{
            button{
                height: 50px;
                padding: 0 22.82px;
            }
        }
        button{
            font-size: 15px;
            font-weight: 400;
            height: 50px;
        }
        .btn-cancel{
            border: 1px solid ${({ theme }) => theme['border-color-light']};
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
            background: ${({ theme }) => theme['bg-color-light']};
        }
    }
`;

const InvoiceHeader = Styled.div`
    margin: 50px 0;
    @media only screen and (max-width: 575px){
        margin: 25px 0;
    }
    .top-img{
        max-width: 140px;
    }
    figure{
        @media only screen and (max-width: 575px){
            text-align: center;
        }
    }
    .invoice-info{
        font-weight: 500;
        line-height: 1.6;
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        @media only screen and (max-width: 575px){
            text-align: center !important;
            margin-bottom: 0;
        }
    }
`;

const InvoiceLetterBox = Styled.div`
    .invoice-letter-inner{
        background: #F8F9FB;
        padding: 30px 50px 25px;
        border-radius: 20px;
        @media only screen and (max-width: 575px){
            padding: 25px;
        }
    }
    .invoice-author{
        @media only screen and (max-width: 991px){
            text-align: center;
        }
        .invoice-author__title{
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 16px;
            @media only screen and (max-width: 575px){
                font-size: 30px;
            }
        }
        p{
            font-size: 15px;
            font-weight: 500;
            margin-bottom: 4px;
        }
    }
    .invoice-barcode{
        max-width: 310px;
        margin: 0 auto;
        text-align: center;
        border: 1px solid ${({ theme }) => theme['border-color-light']};
        @media only screen and (max-width: 991px){
            margin: 20px auto;
        }
        .ant-card{
            margin-bottom: 0 !important;
        }
        .ant-card-body{
            padding: 20px 20px 16px !important;
        }
        p{
            margin-bottom: 0;
        }
    }
    .invoice-customer{
        float: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
        @media only screen and (max-width: 991px){
            float: none;
            text-align: center;
        }
        .invoice-customer__title{
            font-size: 15px;
            font-weight: 500;
            text-transform: uppercase;
            margin-bottom: 5px;
            color: ${({ theme }) => theme['dark-color']};
        }
        p{
            font-size: 15px;
            margin-bottom: 0;
            color: ${({ theme }) => theme['gray-color']};
        }
    }
`;

const InvoiceAction = Styled.div`
    text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
    margin: 90px -5px 10px;
    @media only screen and (max-width: 991px){
        margin-top: 50px;
    }
    @media only screen and (max-width: 479px){
        text-align: center;
        margin-top: 30px;
    }
    .ant-btn-default{
        color: ${({ theme }) => theme['gray-color']};
        background: ${({ theme }) => theme['bg-color-light']};
        border: 1px solid ${({ theme }) => theme['border-color-light']};
    }
    button{
        padding: 0 25px !important;
        margin: 5px;
        @media only screen and (max-width: 479px){
            margin-bottom 10px;
        }
        svg,
        i{
            color: ${({ theme }) => theme['light-color']};
        }
        .feather-download{
            color: #fff;
        }
        svg +span{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
        }
    }
`;

const WizardWrapper = Styled.div`
    // padding: 25px 0;
    color:#eee;
    &.bordered-wizard{
        padding: 0;
    }
    .steps-action button.btn-next svg {
        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        transform: rotateY(${({ theme }) => (theme.rtl ? '180deg' : '0deg')})
    }
    .steps-action button.btn-prev svg {
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
        transform: rotateY(${({ theme }) => (theme.rtl ? '180deg' : '0deg')})
    }
    .ant-steps {
        @media only screen and (max-width: 767px) {
            flex-flow: column;
            align-items: center;
        }
        @media only screen and (max-width: 480px) {
            align-items: flex-start;
        }
    }
    .ant-steps-item-container{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 50%;
        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
        @media only screen and (max-width: 991px) {
            width: 100%;
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
        }
        @media only screen and (max-width: 767px) {
            font-size: 15px;
        }
        @media only screen and (max-width: 480px) {
            flex-flow: row;
        }
        .ant-steps-item-tail{
            @media only screen and (max-width: 480px) {
                background: #C5CAE1;
                top: 35px !important;
                padding: 20px 0 8px !important;
            }
        }
        .ant-steps-item-content{
            @media only screen and (max-width: 480px) {
                min-height: auto !important;
            }
        }
    }
    .steps-content{
        margin-top: 72px !important;
        @media only screen and (max-width: 1599px) {
            min-height: 252px !important;
        }
        @media only screen and (max-width: 1199px) {
            margin-top: 45px !important;
        }
        @media only screen and (max-width: 575px) {
            margin-top: 30px !important;
        }
    }
    .ant-steps-item-container{
        position: relative;
        &:after{
            position: absolute;
            ${({ theme }) => (!theme.rtl ? 'left' : 'right')}: 100%;
            top: 20px;
            color: #333;
            background-image: url(${require('../../../static/img/progress.svg')});
            width: 114%;
            height: 6px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-color: transparent !important;
            content: '';
            @media only screen and (max-width: 1399px) {
                width: 120%;
            }
            @media only screen and (max-width: 991px) {
                display: none;
            }
        }
        .ant-steps-item-tail{
            &:after{
                height: 80%;
            }
        }
    }
    .wizard-step-item{
        .ant-steps-item-container{
            &:after{
                background-image: url(${require('../../../static/img/progress.svg')});
            }
        }
    }
    .wizard-steps-item-active{
        .ant-steps-item-container{
            &:after{
                background-image: url(${require('../../../static/img/progress-active.svg')});
            }
        }
    }
    .success-step-item{
        .ant-steps-item-container{
            &:after{
                background-image: url(${require('../../../static/img/progress-success.svg')});
            }
        }
    }
    .ant-steps-item{
        padding: ${({ theme }) => (theme.rtl ? '0 0 0 25px !important' : '0 25px 0 0 !important')} ;
        @media only screen and (max-width: 767px) {
            padding: 0 !important;
            &:not(:last-child){
                margin-bottom: 20px;
            }
        }
        &:last-child{
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 15px !important;
            @media only screen and (max-width: 767px) {
                padding: 0 !important;
            }
            .ant-steps-item-container{
                &:after{
                    display: none;
                }
            }
        }
        &:last-child{
            @media only screen and (max-width: 991px) {
                flex: 1 1;
            }
        }
        .ant-steps-item-title{
            font-size: 15px;
            font-weight: 500;
            margin-top: 8px;
            padding: ${({ theme }) => (theme.rtl ? '0 10px 0 0' : '0 0 0 10px')};
            
            color: ${({ theme }) => theme['gray-solid']} !important;
            @media only screen and (max-width: 1210px) {
                padding: ${({ theme }) => (!theme.rtl ? '0 0 0 20px' : '0 20px 0 0')};
            }
            @media only screen and (max-width: 767px) {
                padding: 0;
            }
            &:after{
                display: none;
                @media only screen and (max-width: 991px) {
                    display: none;
                }
            }
        }
        .ant-steps-item-icon{
            width: 50px;
            height: 50px;
            line-height: 50px;
            border: 0 none;
            box-shadow: 10px 0 20px ${({ theme }) => theme['gray-solid']}15;
            @media only screen and (max-width: 767px) {
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                width: 35px;
                height: 35px;
                line-height: 35px;
            }
            .ant-steps-icon{
                font-size: 16px;
                font-weight: 500;
                color: ${({ theme }) => theme['dark-color']};
                @media only screen and (max-width: 767px) {
                    font-size: 15px;
                }
            }
        }
        &.ant-steps-item-active{
            .ant-steps-item-icon{
                .ant-steps-icon{
                    color: #fff;
                }
            }
            .ant-steps-item-title{
                color: ${({ theme }) => theme['dark-color']} !important;
            }
            &.ant-steps-item-finish{
                .ant-steps-item-title{
                    color: ${({ theme }) => theme['light-color']} !important;
                }
            }
        }
        &.ant-steps-item-finish{
            // .ant-steps-item-container{
            //     &:after{
            //         background-image: url(${require('../../../static/img/progress-active.svg')});
            //     }
            // }
            // .ant-steps-item-title{
            //     color: ${({ theme }) => theme['dark-color']} !important;
            //     &:after{
            //         background-image: url(${require('../../../static/img/progress-active.svg')});
            //     }
            // }
            .ant-steps-item-icon{
                background: ${({ theme }) => theme['success-color']} !important;
                .ant-steps-icon{
                    color: #fff;
                }
            }
        }
    }
    .basic-form-inner{
        width: 580px;
        @media only screen and (max-width: 575px){
            width: 100%
        }
        .ant-input-password.ant-input-affix-wrapper{
            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0;
        }
        .ant-form-item-label{
            label{
                font-weight: 400;
                color: ${({ theme }) => theme['dark-color']};
            }
        }
        .ant-form-item-control-input{
            .ant-input{
                padding: 12px 20px;
            }
        }
    }
    .steps-action{
        .btn-next{
            &:focus{
                background-color: ${({ theme }) => theme['primary-color']};
            }
        }
    }
    .atbd-form-checkout{
        .ant-input-affix-wrapper-rtl{
            input[type="password"]{
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 15px;
            }
        }
       h1{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 46px;
            color: ${({ theme }) => theme['dark-color']};
            @media only screen and (max-width: 991px){
                font-size: 18px;
                margin-bottom: 22px;
            }
            @media only screen and (max-width: 479px){
                font-size: 16px;
            }
       }
       .ant-form-item-label{
           label{
               font-size: 15px;
           }
       }
       input::placeholder{
        color: ${({ theme }) => theme['extra-light-color']};
       }
       .input-message{
           margin-top: 6px;
           display: inline-block;
           font-size: 13px;
           color: ${({ theme }) => theme['gray-solid']};
       }

       .shipping-selection{
           > .ant-card{
               .ant-card-body{
                    border: 1px solid ${({ theme }) => theme['border-color-light']};
               }
           }
           .ant-card{
               .ant-card{
                   margin-bottom: 0 !important;
               }
           }
           .ant-radio-group {
               .ant-radio-wrapper{
                    display: flex;
                    align-items: flex-start;
                    span + span{
                        width: 100%;
                        min-height: 60px;
                    }
                   .ant-radio{
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
                    }
               }
           }
           .ant-form-item-control-input-content{
                input{
                    @media only screen and (max-width: 479px) {
                        width: 100% !important;
                        margin-bottom: 6px;
                    }
                }
               .input-leftText{
                   ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
                   @media only screen and (max-width: 479px) {
                        display: block;
                        ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0px;
                    }
               }
           }
           .shipping-selection__card{
               .ant-card .ant-card{
                   border: 0 none;
                   border-radius: 20px;
                   box-shadow: 0 10px 30px ${({ theme }) => theme['light-color']}10;
               }
               .ant-radio-wrapper{
                    .ant-radio{
                        margin-top: 30px;
                    }
                    span + span{
                        padding: 0;
                    }
               }
               .cvv-wrap{
                   input{
                       max-width: 120px;
                   }
                   .input-leftText{
                       color: ${({ theme }) => theme['color-info']};
                   }
               }
            }
           .shipping-selection__paypal{
               margin-bottom: 20px;
               .ant-radio-wrapper{
                   span + span{
                       display: flex;
                       justify-content: space-between;
                       @media only screen and (max-width: 375px){
                            img{
                                display: none;
                            }
                        }
                   }
               }
           }
           .shipping-selection__paypal,
           .shipping-selection__cash{
                .ant-radio-wrapper{
                    align-items: center;
                    span + span{
                        font-size: 15px;
                        font-weight: 500;
                        padding: 0 25px;
                        display: flex;
                        align-items: center;
                        border-radius: 10px;
                        border: 1px solid ${({ theme }) => theme['border-color-normal']};
                    }
                }
           }
           .supported-card{
               align-items: center;
               justify-content: space-between;
               margin-bottom: 20px;
                @media only screen and (max-width: 479px) {
                    flex-flow: column;
                }
               .supported-card_logos{
                    @media only screen and (max-width: 479px) {
                        margin-top: 12px;
                    }
                   img + img{
                       ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
                   }
               }
           }
       }
   }
   .profile-hints{
       p{
        color: ${({ theme }) => theme['dark-color']};
           font-size: 15px;
           span{
               color: ${({ theme }) => theme['extra-light-color']};
           }
       }
   }
   .atbd-finish-order{
       max-width: 540px;
       margin: 0 auto;
       padding: 30px;
       min-height: 248px;
       border-radius: 6px;
       border: 1px solid ${({ theme }) => theme['bg-color-deep']};
       h1,
       h2,
       h3,
       h4,
       h5,
       h6{
            margin-bottom: 16px;
            color: ${({ theme }) => theme['darks-color']};
       }
       .ant-checkbox{
           &:hover{
               .ant-checkbox-inner{
                    border-color: ${({ theme }) => theme['success-color']};
               }
           }
       }
       .ant-checkbox-checked{
           &:after{
                border-color: ${({ theme }) => theme['success-color']};
           }
           .ant-checkbox-inner{
                background-color: ${({ theme }) => theme['success-color']};
                border-color: ${({ theme }) => theme['success-color']};
           }
       }
       .ant-checkbox-input{
           &:focus + .ant-checkbox-inner{
            border-color: ${({ theme }) => theme['success-color']};
           }
       }
       .checkbox-label{
            ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 10px;
            font-size: 15px;
            color: ${({ theme }) => theme['extra-light-color']};
       }
   }
   .atbd-review-order{
       > .ant-card{
           > .ant-card-body{
               border: 1px solid ${({ theme }) => theme['border-color-light']};
           }
       }
       h1{
           font-size: 20px;
           font-weight: 500;
           margin-bottom: 45px;
           @media only screen and (max-width: 479px) {
                font-size: 16px;
                margin-bottom: 25px;
            }
       }

       .atbd-review-order__single{
           .ant-radio-wrapper{
                display: flex;
                align-items: flex-start;
            }
            .ant-card{
                .ant-card-body{
                    padding: 30px !important;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px ${({ theme }) => theme['gray-solid']}10;
                }
            }
            h1{
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 30px;
            }
            .method-info{
                margin-top: -2px;
                font-weight: 500;
                color: color: ${({ theme }) => theme['dark-color']};
                img{
                    margin-top: -4px;
                    max-width: 40px;
                }
            }
            .btn-addCard{
                font-weight: 500
                display: inline-block;
                font-size: 13px;
                margin-top: 20px;
                color: ${({ theme }) => theme['info-color']};
            }

            .table-cart{
                border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
                .cart-single-t-price{
                    color: ${({ theme }) => theme['gray-color']};
                }
                .ant-table-content{
                    padding-bottom: 10px;
                }
                thead{
                    display: none;
                }
                .ant-table-tbody{
                    .ant-table-row{
                        &:hover{
                            box-shadow: 0 0;
                        }
                    }
                    >tr >td{
                        padding: 8px 15px;
                        &:first-child{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0px;
                        }
                        &:last-child{
                            ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 0px;
                            text-align: ${({ theme }) => (theme.rtl ? 'left' : 'right')};
                        }
                    }
                }
            }
            .cart-single{
                .cart-single__info{
                    h1{
                        color: ${({ theme }) => theme['dark-color']};
                        margin-bottom: 8px;
                    }
                }
            }
       }

        .atbd-review-order__shippingTitle{
            h1{
                display: flex;
                margin-bottom: 30px;
                justify-content: space-between;
                color: ${({ theme }) => theme['gray-color']};
                @media only screen and (max-width: 479px) {
                    flex-flow: column;
                }
                a{
                    font-size: 14px;
                    display: inline-flex;
                    align-items: center;
                    @media only screen and (max-width: 479px) {
                        margin-top: 12px;
                    }
                    svg{
                        width: 14px;
                        height: 14px;
                        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
                    }
                }
            }
        }

        .atbd-review-order__shippingInfo{
            .shipping-info-text{
                margin: -4px 12px 0;
                h1{
                    font-size: 15px;
                    font-weight: 500;
                    margin-bottom: 8px;
                }
                p{
                    font-size: 15px;
                    color: ${({ theme }) => theme['gray-color']};
                }
            }
            .btn-addNew{
                font-size: 13px;
                font-weight: 500;
                color: ${({ theme }) => theme['info-color']};
            }
        }
   }
   .invoice-summary-inner{
        .summary-total{
            margin-bottom: 0;
        }
   }
   .summary-list{
        margin: 20px 0 10px !important;
        .summary-list-text{
            font-size: 15px;
            color: ${({ theme }) => theme['gray-color']};
        }
        li{
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
   }

   .checkout-successful{
       text-align: center;
        > .ant-card{
            > .ant-card-body{
                border: 1px solid ${({ theme }) => theme['border-color-light']};
            }
        }
        .ant-card {
            box-shadow: 0 10px 30px ${({ theme }) => theme['light-color']}10;
            .ant-card{
                padding: 25px;
                    margin-bottom: 0 !important;
            }
        }
        .icon-success{
            width: 34px;
            height: 34px;
            margin: 0 auto 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            background: ${({ theme }) => theme['success-color']};
            svg{
                width: 18px;
            }
        }
        h1{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 16px;
        }
        p{
            margin-bottom: 0;
            color: ${({ theme }) => theme['gray-color']};
        }
   }
`;

const WizardTwo = Styled.div`
    .ant-steps:not(.ant-steps-vertical) .ant-steps-item-custom .ant-steps-item-icon {
        width: 50px;  
        box-shadow: none;      
    }    
    .ant-steps-item-icon .ant-steps-icon span{
        color: #000;
        font-size: 20px;
    }
    .ant-steps-item {
        &.ant-steps-item-active{
            .ant-steps-item-icon{
                .ant-steps-icon{
                    svg path,
                    i{
                        fill: ${({ theme }) => theme['primary-color']};
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
        &.ant-steps-item-finish {
            .ant-steps-item-icon{
                background-color: transparent !important;
                .ant-steps-icon{
                    svg path,
                    i{
                        fill: ${({ theme }) => theme['success-color']};
                        color: ${({ theme }) => theme['success-color']};
                    }
                }
            }
        }
        .ant-steps-item-container{
            .ant-steps-item-tail{
                @media only screen and (max-width: 479px) {
                    display: none !important;
                }
            }
            .ant-steps-item-icon{
                margin-bottom: 15px;
                svg,
                img{
                    @media only screen and (max-width: 479px) {
                        width: 40px;
                    }
                }
            }
        }
    }
`;

const WizardThree = Styled.div`
    .ant-steps-item-container{
        .ant-steps-item-icon{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        }
        .ant-steps-item-title{
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
        }
    }
`;

const WizardFour = Styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 991px){
        flex-flow: column;
        align-items: center;
    }
    .ant-steps-item-container{
        position: relative
        display: flex;
        flex-flow: row;
        width: 100%;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
        @media (max-width: 767px){
            flex-flow: column;
        }
        &:after{
            display: none;
        }
        .ant-steps-item-tail{
            display: none !important;
            &:after{
                display: none;
            }
        }
    }
    .ant-steps-item:last-child {
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
    }
    .ant-steps {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
        min-width: 300px;
        flex-direction: column;
        @media (max-width: 991px){
            min-width: auto;
            margin: 0 0 25px 0;
        }
        @media (max-width: 575px){
            align-items: flex-start;
        }
        
        &.ant-steps-vertical{
            flex: 1;
            padding: 30px;
            border-radius: 6px;
            border: 1px solid ${({ theme }) => theme['bg-color-deep']};
            max-width: 300px;
            .ant-steps-item-icon{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0 !important;
            }
            .ant-steps-item {
                ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 0;
                &:not(:last-child){
                    margin-bottom: 30px;
                    @media (max-width: 767px){
                        margin-bottom: 15px;
                    }
                }
                &.ant-steps-item-wait{
                    .ant-steps-item-icon{
                        background-color: ${({ theme }) => theme['extra-light-color']}50;
                        box-shadow: 0 0;
                        .ant-steps-icon{
                            color: #fff;
                        }
                    }
                }
            }
            .ant-steps-item-content{
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0 !important;
            }
        }
    }
    
    .create-account-form{
        padding: 30px;
        border-radius: 6px;
        border: 1px solid ${({ theme }) => theme['bg-color-deep']};
    }
    .atbd-finish-order{
        max-width: 100%;
    }
    .steps-wrapper{
        width: 100%;
        max-width: 580px;
    }
    .steps-content{
        margin-top: 0 !important;
        justify-content: flex-start !important;
    }
    .step-action-wrap{
        .step-action-inner{
            padding: 0 !important;
        }
    }
`;

const WizardFive = Styled.div`
    display: flex;
    align-items: flex-start;
    @media only screen and (max-width: 991px) {
        flex-flow: column;
    }
    .steps-wrapper{
        @media only screen and (max-width: 991px) {
            padding: 25px 0 !important;
            width: 100%;
            ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 0 !important;
        }
    }
    .basic-form-inner{
        width: 100%;
        @media only screen and (max-width: 1599px) {
            width: 100%;
        }
    }
    .ant-steps-item-container {
        position: relative;
        width: 100% !important;
        align-items: flex-start !important;
        @media only screen and (max-width: 1399px) {
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
        }
        .ant-steps-item-tail{
            display: none !important;
        }
    }
    .ant-steps-item:last-child {
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
    }
    .ant-steps {
        flex: 1;
        position: relative;
        min-width: 450px;
        flex-direction: column;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
        @media only screen and (max-width: 1599px) {
            min-width: auto;
        }
        @media only screen and (max-width: 767px) {
            align-items: flex-start;
            padding: 25px 0 !important;
        }
        .ant-steps-item-container:after {
            display: none;
        }
        .ant-steps-item {
            border-radius: 5px;
            padding: 16px 30px 18px 30px !important;
            @media only screen and (max-width: 1599px) {
                min-width: 200px;
            }
            &:not(:last-child){
                margin-bottom: 10px;
            }
        }
        .ant-steps-item-content{
            .ant-steps-item-title{
                margin-top: 0px;
                line-height: 1.4;
                ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
                h2{
                    font-size: 16px;
                    margin-bottom: .35rem;
                    color: ${({ theme }) => theme['dark-color']};
                }
                p{
                    font-size: 13px;
                    font-weight: 400;
                    margin-bottom: 0;
                    color: ${({ theme }) => theme['gray-color']};
                }
            }
        }
    }
    .steps-content{
        margin-top: 0 !important;
        .basic-form-inner{
            &.theme-light{
                .ant-input,
                .ant-select-selector,
                .ant-input-password{
                    border: 0 none;
                    background-color: #F4F5F7;
                }
            }
            .ant-form-item-label{
                white-space: break-spaces;
            }
            .shipping-form,
            .payment-method-form {
                min-width: 530px;
                @media only screen and (max-width: 767px) {
                    min-width: 100%;
                }
            }
        }
    }
    .ant-steps:not(.ant-steps-dot):not(.ant-steps-navigation) .ant-steps-item .ant-steps-item-icon {        
        display: none;
    }
    .ant-steps-item.ant-steps-item-process.ant-steps-item-active {
        background: #F4F5F7;
    }
    .step-action-wrap{
        border-top: 1px solid ${({ theme }) => theme['bg-color-deep']}; 
        margin-top: 30px;
        .step-action-inner{
            width: 100% !important;
            padding: 0 !important;
            @media only screen and (max-width: 1399px) {
                width: 100%;
            }
        }
        .steps-action{
            margin-top: 40px;
        }
    }
    .atbd-review-order{
        >.ant-card{
            margin-bottom: 0 !important;
        }
        &.theme-light{

            > .ant-card > .ant-card-body{
                border: 0 none;
                padding: 0 !important;
            }
            .atbd-review-order__single{
                &:last-child{
                    .ant-card{
                        margin-bottom: 0 !important;
                    }
                }
                .ant-card-body{
                    background-color: #F4F5F7;
                    box-shadow: 0 0;
                }
                .ant-table{
                    background-color: transparent;
                }
                .table-cart {
                    @media only screen and (max-width: 1799px) {
                        max-width: 560px;
                    }
                    @media only screen and (max-width: 1699px) {
                        max-width: 500px;
                    }
                    @media only screen and (max-width: 1599px) {
                        max-width: 100%;
                    }
                    @media only screen and (max-width: 1399px) {
                        max-width: 410px;
                    }
                    .ant-table-tbody .ant-table-row:hover td{
                        background-color: transparent !important;
                    }
                    .cart-single-quantity{
                        button{
                            background-color: #fff;
                        }
                    }
                }
            }
        }
    }
    .shipping-selection__card{
        .ant-card{
            margin-bottom: 0 !important;
        }
        .ant-card-body{
            padding: 0 !important;
        }
    }
    .ex-date-year-wrap{
        .ex-date{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
            flex: 0 0 48%
        }
        .ex-year{
            flex: 0 0 48%
        }
    }
`;

const WizardSix = Styled.div`
    position: relative;
    display: flex;
    min-height: 620px;
    @media only screen and (max-width: 991px) {
        flex-flow: column;
    }
    .ant-steps{
        justify-content: center;
        position: relative;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
        max-width: 450px;
        @media only screen and (max-width: 991px) {
            justify-content: flex-start !important;
        }
        @media only screen and (max-width: 767px) {
            flex-flow: row;
        }
        &.ant-steps-horizontal.ant-steps-label-horizontal{
            @media only screen and (max-width: 480px) {
                flex-direction: row !important;
            }
        }
        .ant-steps-item-tail{
            @media only screen and (max-width: 480px) {
                display: none !important;
            }
        }
    }
    .step-action-wrap{
        justify-content: flex-end !important;
        .step-action-inner{
            padding: 0 !important;
        }
    }
    .ant-steps-item-icon{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0px;
    }
    .ant-steps-item{
        padding: 0 !important;
        overflow: visible;
        flex: none;
        position: static !important;
        &:last-child{
            ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
            @media only screen and (max-width: 991px) {
                flex: none;
            }
        }
        &:not(:last-child){
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 30px;
            @media only screen and (max-width: 767px) {
                margin-bottom: 0;
            }
        }
        .wizard-item{
            max-width: 290px;
            @media only screen and (max-width: 480px) {
                margin-top: 30px;
            }
        }
    }
    .ant-steps-item-title{
        position: static;
    }
    .ant-steps-item-container{
        position: static;
        width: 100%;
        ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 0;
    }
    .table-cart{
        .ant-table-content{
            @media only screen and (max-width: 1850px) {
                max-width: 550px;
            }
            @media only screen and (max-width: 1599px) {
                max-width: 450px;
            }
            @media only screen and (max-width: 1299px) {
                max-width: 350px;
            }
        }
    }
    .wizard-item {
        display: none;
        .none{
            display: none;
        }
        &.block{
            display: block;
        }
        text-align: center;
        position: absolute;
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 44%;
        transform: ${({ theme }) => (theme.rtl ? 'translateX(50%);' : 'translateX(-50%)')};
        margin-top: 20px;
        @media only screen and (max-width: 991px) {
            text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
            left: 0;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            transform: translateX(0%);
        }
        h2{
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 26px;
            color: ${({ theme }) => theme['dark-color']}; 
            @media only screen and (max-width: 991px) {
                margin-bottom: 15px;
            }
        }
        p{
            font-weight: 400;
            margin-bottom: 45px;
            color: ${({ theme }) => theme['gray-color']};
            @media only screen and (max-width: 991px) {
                margin-bottom: 25px;
            }
        }
        img{
            max-width: 280px;
        }
    }
    .steps-content{
        position: relative;
        margin-top: 0 !important;
    }
    .atbd-review-order{
        position: relative;
        .atbd-review-order__single .ant-card .ant-card-body{
            @media only screen and (max-width: 767px) {
                padding: 15px  !important;
            }
        }
    }
    .step-action-wrap{
        .step-action-inner{
            width: 100% !important;
        }
    }
    .ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item{
        white-space: normal;
    }
    .ant-steps-item.ant-steps-item-process.ant-steps-item-active .wizard-item{
        display: block;
    }
    .ant-steps-item-container:after{
        display: none;
    }
    .steps-wrapper{
        width: 100%;
        @media only screen and (max-width: 991px) {
            padding-top: 450px !important;
            border-left: 0 none !important;
            ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 0 none !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
    }
    .basic-form-inner{
        width: 100%;
        min-width: 380px;
        @media only screen and (max-width: 479px) {
            min-width: 100%;
        }
    }
    
`;
const WizardBlock = Styled.div`
    
    >.ant-card{
        .ant-card-body{
            padding: 50px 0 !important;
        }
        .steps-content{
            .ant-card-body{
                padding: 25px !important;
            }
        }
    }
    
`;

export {
  FigureWizards,
  NotFoundWrapper,
  ProductCard,
  ProductTable,
  CouponForm,
  OrderSummary,
  AddProductForm,
  InvoiceHeader,
  InvoiceLetterBox,
  InvoiceAction,
  WizardWrapper,
  WizardTwo,
  WizardThree,
  WizardFour,
  WizardFive,
  WizardSix,
  WizardBlock,
};
