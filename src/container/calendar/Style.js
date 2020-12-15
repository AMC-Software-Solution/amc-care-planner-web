import Styled from 'styled-components';

const Aside = Styled.aside`
    @media only screen and (max-width: 1199px){
        max-width: 370px;
        margin: 0 auto;
    }
    .btn-create{
        height: 50px;
        font-size: 14px;
        font-weight: 500;
        width: 100%;
        border-radius: 8px;
        box-shadow: 0 3px 5px #FF69A505;
        margin-bottom: 25px;
    }
    .ant-picker{
        visibility: hidden;
    }
    .ant-picker .ant-picker-input{
        display: none;
    }
    .listHeader{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
        .add-label{
            color: ${({ theme }) => theme['light-color']};
        }
    }

    .event-list{
        li{
            &:not(:last-child){
                margin-bottom: 14px;
            }
            a{
                font-size: 14px;
                font-weight: 400;
                display: block;
                color: ${({ theme }) => theme['gray-color']};
            }
        }
    }
    
`;

const CalendarWrapper = Styled.div`
    
    .react-calendar{
        font-family: 'Inter', sans-serif;
        width: 100%;
        border-radius: 10px;
        padding: 24px 35px;
        border: 0 none;
        background-color: #fff;
        box-shadow: 0 5px 20px ${({ theme }) => theme['light-color']}03;
        @media only screen and (max-width: 575px){
            padding: 15px;
        }
        .react-calendar__viewContainer{
            .react-calendar__year-view__months__month {
                &:hover{
                    background-color: transparent;
                }
                &.react-calendar__tile--hasActive{
                    background-color: transparent;
                    color: ${({ theme }) => theme['primary-color']}
                }
            }
        }
    }
    .react-calendar__navigation{
        margin-bottom: .5rem;
        button{
            &:hover,
            &:focus{
                background-color: #fff !important;
            }
        }
        .react-calendar__navigation__arrow{
            font-size: 20px;
            min-width: auto;
            color: ${({ theme }) => theme['light-color']};
        }
        .react-calendar__navigation__label{
            font-size: 16px;
            font-weight: 500;
            color: ${({ theme }) => theme['dark-color']};
        }
    }
    .react-calendar__month-view__weekdays{
        .react-calendar__month-view__weekdays__weekday{
            abbr{
                font-size: 13px;
                font-weight: 500;
                text-decoration: none;
                color: ${({ theme }) => theme['light-color']};
                @media only screen and (max-width: 1300px){
                    font-size: 11px;
                  }
            }
        }
    }
    .react-calendar__month-view__days{
        .react-calendar__tile{
            max-width: 43px !important;
            padding: 1em 0.5em;
            &:hover{
                background-color: transparent;
                font-weight: 500;
                color: ${({ theme }) => theme['dark-color']};
            }
            &.react-calendar__month-view__days__day--neighboringMonth{
                abbr{
                    color: ${({ theme }) => theme['extra-light-color']};
                }
            }
            abbr{
                font-size: 14px;
                color: ${({ theme }) => theme['gray-color']};
            }
            &.react-calendar__tile--now{
                padding: 0.929em 0.5em;
                background-color: transparent;
                border-radius: 50%;
                border: 1px solid ${({ theme }) => theme['primary-color']};
            }
            &.react-calendar__tile--active{
                border-radius: 50%;
                background-color: ${({ theme }) => theme['primary-color']};
                abbr{
                    color: #fff;
                }
            }
        }
    }
    .calendar-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 25px;
        @media only screen and (max-width: 1599px){
            flex-flow: column;
        }
        .calendar-header__left{
            display: flex;
            align-items: center;
            position: relative;
            .react-calendar__viewContainer{
                min-width: 320px;
                border-radius: 8px;
                padding: 15px !important;
                border: 0 none !important;
                box-shadow: rgba(82, 63, 105, 0.15) 0px 15px 40px 0px !important;
                @media only screen and (max-width: 479px){
                    min-width: 280px;
                }
            }
            @media only screen and (max-width: 1599px){
                margin-bottom: 20px;
            }
            @media only screen and (max-width: 479px){
                flex-flow: column;
            }
            .btn-today{
                font-size: 13px;
                font-weight: 500;
                height: 34px;
                color: ${({ theme }) => theme['gray-color']};
                border-color: ${({ theme }) => theme['border-color-light']};
                @media only screen and (max-width: 479px){
                    margin-bottom: 15px;
                }
            }
            .year-select{
                .ant-select-selector{
                    border: 0 none;
                    .ant-select-selection-search{
                        input{
                            height: 35px;
                        }
                    }
                    .ant-select-selection-item{
                        font-size: 16px;
                        font-weight: 500;
                        color: ${({ theme }) => theme['dark-color']};
                    }
                }
                .ant-select-arrow{
                    right: 18px;
                    ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 18px;
                }
            }
            .react-calendar{
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 30px;
                padding: 0;
                border: none;
                .react-calendar__navigation{
                    align-items: center;
                    margin: 0;
                    border: none;
                    .react-calendar__navigation__label{
                        padding: 0 20px;
                    }
                    .react-calendar__navigation__arrow {
                        border: 1px solid ${({ theme }) => theme['border-color-light']};
                        border-radius: 5px;
                        width: 34px;
                        height: 34px;
                        svg,
                        img{
                            width: 14px;
                        }
                    }
                }
                .react-calendar__viewContainer{
                    position: absolute;
                    background: #fff;
                    z-index: 999;
                    border: 1px solid #ddd;
                    display: none;
                    &.show{
                        display: block;
                    }
                    .react-calendar__month-view__days{
                        /* display: none !important; */
                    }
                }
            }
            .calender-head__navigation{
                display: flex;
                align-items: center;
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 30px;
                @media only screen and (max-width: 479px){
                    ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 0px;
                }
                .btn-navigate{
                    width: 34px;
                    height: 34px;
                    padding: 0;
                    i,
                    svg{
                        color: ${({ theme }) => theme['light-color']};
                    }
                }
                .date-label{
                    display: inline-block;
                    margin: 0 20px;
                    font-size: 16px;
                    font-weight: 500;
                    color: ${({ theme }) => theme['dark-color']};
                }
            }
        }
        .calendar-header__right{
            display: flex;
            @media only screen and (max-width: 479px){
                flex-flow: column;
                align-items: center;
            }
            svg{
                width: 14px;
            }
            ul{
                li{
                    display: inline-block;
                    &:first-child{
                        ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 1px solid ${({ theme }) =>
  theme['border-color-light']};
                    }
                    &:not(:first-child){
                        a{
                            ${({ theme }) => (theme.rtl ? 'border-top-right-radius' : 'border-top-left-radius')}: 0px;
                            ${({ theme }) =>
                              theme.rtl ? 'border-bottom-right-radius' : 'border-bottom-left-radius'}: 0px;
                        }
                    }
                    &:not(:last-child){
                        a{
                            ${({ theme }) => (theme.rtl ? 'border-top-left-radius' : 'border-top-right-radius')}: 0px;
                            ${({ theme }) =>
                              theme.rtl ? 'border-bottom-left-radius' : 'border-bottom-right-radius'}: 0px;
                        }
                    }
                    a{
                        font-size: 13px;
                        font-weight: 500;
                        color: ${({ theme }) => theme['light-color']};
                        border: 1px solid ${({ theme }) => theme['border-color-light']};
                        ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 0px;
                        display: block;
                        border-radius: 4px;
                        padding: 6px 13.24px;
                        &.active{
                            color: #fff;
                            border-color: ${({ theme }) => theme['primary-color']};
                            background-color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                }
            }
            .schedule-list{
                margin-left: 20px;
                ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 20px;
                display: flex;
                align-items: center;
                color: ${({ theme }) => theme['light-color']};
                @media only screen and (max-width: 479px){
                    margin: 15px 0 0 0;
                }
                svg,
                img,
                i{
                    margin-right: 6px;
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
                    color: ${({ theme }) => theme['primary-color']};
                }
                &.active{
                    color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }

    .table-event{
        
        border: 1px solid ${({ theme }) => theme['border-color-light']};
        &.table-responsive{
            @media only screen and (max-width: 1599px){
                display: block;
                width: 100%;
                overflow-x: auto;
            }
        }
        tr{
            th,
            td{
                padding: 16px 0;
                border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
                &:first-child{
                    min-width: 75px;
                    padding: 16px 18px 16px 18px;
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme['border-color-light']};
                    
                }
            }
        }
        thead{
            th{
                padding: 0 22px;
                background-color: ${({ theme }) => theme['bg-color-light']};
                p{
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 0;
                }
            }
        }
        tbody{
            td{
                padding: 0 10px;
                font-size: 12px;
                min-width: 140px;
                color: ${({ theme }) => theme['light-color']};
                .currentTime{
                    width: calc(100% + 20px);
                    height: 1px;
                    display: block;
                    position: relative;
                    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: -10px;
                    z-index: 222;
                    &:after{
                        position: absolute;
                        left: 0;
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0px;
                        top: -6px;
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        content: '';
                        background-color: ${({ theme }) => theme['secondary-color']};
                    }
                }
                .day-event-item{
                    width: 100%;
                    display: block;
                    border-radius: 3px 6px 6px 3px;
                    padding: 6px 12px;
                    margin: 2px 0;
                    position: relative;
                    &:after{
                        position: absolute;
                        left: 0;
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0px;
                        bottom: 0;
                        width: 2px;
                        height: 100%;
                        border-radius: 6px 0 0 6px;
                        content: '';
                    }
                    &.primary{
                        background-color: #EFEFFE;
                        color: ${({ theme }) => theme['primary-color']};
                        &:hover{
                            color: ${({ theme }) => theme['primary-color']};
                        }
                        &:after{
                            background-color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                    &.secondary{
                        background-color: #FFF0F6;
                        color: ${({ theme }) => theme['secondary-color']};
                        &:hover{
                            color: ${({ theme }) => theme['secondary-color']};
                        }
                        &:after{
                            background-color: ${({ theme }) => theme['secondary-color']};
                        }
                    }
                    &.success{
                        background-color: #E8FAF4;
                        color: ${({ theme }) => theme['success-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    &.warning{
                        background-color: #FFF3E6;
                        color: ${({ theme }) => theme['warning-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['warning-color']};
                        }
                    }
                    &.info{
                        background-color: ${({ theme }) => theme['info-color']}10;
                        color: ${({ theme }) => theme['info-color']};
                        &:after{
                            background-color: ${({ theme }) => theme['info-color']};
                        }
                    }
                    .event-title{
                        display: block;
                        font-size: 13px;
                        font-weight: 500;
                        margin-bottom: 4px;
                    }
                }
            }
            
        }
    }

    .emptyData{
        min-height: 110px;
        font-size: 18px;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme['light-color']};
    }

    .event-week{
        tr{
            th,
            td{
                &:not(:last-child){
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme['border-color-light']};
                }
            }
        }
        thead{
            tr{
                th{
                    text-align: center;
                    .week-dayName{
                        font-size: 13px;
                        font-weight: 400;
                        margin-bottom: 2px;
                        color: ${({ theme }) => theme['light-color']};
                    }
                    .week-date{
                        display: inline-block;
                        line-height: 1.45;
                        border-radius: 9px;
                        font-size: 13px;
                        &.primary{
                            padding: 0 10px;
                        }
                    }
                }
            }
        }
        tbody{
            .ant-dropdown-trigger{
                display: inline-block;
            }
        }
    }

    .schedule-event{
        tr{
            &:hover{
                box-shadow: 0 15px 40px ${({ theme }) => theme['light-color']}15;
                td{
                    border-color: #fff;
                }
            }
            td{
                padding: 10px 20px !important;
                vertical-align: top;
                font-size: 14px;
                &:first-child{
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
                }
                &.schedule-time{
                    direction: ltr;
                    min-width: 100px;
                    width: 130px;
                }
                .ant-row{
                    &:not(:last-child){
                        margin-bottom: 10px;
                    }
                }
                .schedule-date{
                    font-weight: 500;
                    color: ${({ theme }) => theme['dark-color']};
                }
                .schedule-date-name{
                    margin-left: 10px;
                }
                .event-title{
                    font-weight: 500;
                    color: ${({ theme }) => theme['dark-color']};
                    @media only screen and (max-width: 575px){
                        display: inline-block;
                        margin-top: 6px; 
                    }
                }
                .schedule-time{
                    font-size: 13px;
                    color: ${({ theme }) => theme['light-color']};
                }
            }
        }
    }

    .events{
        li{
            position: relative;
            height: 35px;
            a{
                position: absolute;
                top: 0;
                left: 0;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                padding: 5px 12px;
                z-index: 1;
                border-radius: 4px;
                font-size: 13px;
                &:hover{
                    color: #fff;
                }
            }
        }
    }

    .ant-picker-calendar-full .ant-picker-panel .ant-picker-calendar-date-content {
        overflow-y: unset;
    }  
    
`;

const UpdatePopup = Styled.div`
    .ant-card{
        width: 320px !important;
        .ant-card-body{
            padding: 0 !important;
            
            .headerUpdate{
                border-radius: 8px 8px 0 0;
                padding: 13px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                h4{
                    font-size: 16px;
                    font-weight: 500;
                    color: #fff;
                    margin-bottom: 0;
                }
                .action{
                    display: flex;
                    align-items: center;
                    width: 100px;
                    justify-content: flex-end;
                    color: #fff;
                    a{
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        min-width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        background-color: transparent;
                        padding: 0;
                        color: #fff;
                        transition: .3s;
                        &:hover{
                            background-color: #F4F5F715;
                        }
                        svg{
                            margin: 0;
                        }
                    }
                }
            }
            .bodyUpdate{
                padding: 20px;
                .event-info{
                    display: flex;
                    align-items: flex-start;
                    color: ${({ theme }) => theme['gray-color']};
                    &:last-child{
                        margin-bottom: 0;
                    }
                    strong{
                        margin-left: 6px;
                        ${({ theme }) => (theme.rtl ? 'margin-right' : 'margin-left')}: 6px;
                        font-weight: 500;
                        color: ${({ theme }) => theme['dark-color']};
                    }
                    svg,
                    i{
                        color: ${({ theme }) => theme['light-color']};
                    }
                    svg,
                    i,
                    img{
                        margin: ${({ theme }) => (theme.rtl ? '4px 0 0 12px' : '4px 12px 0 0')};
                    }
                    label{
                        font-size: 13px;
                        color: ${({ theme }) => theme['light-color']};
                    }
                }
            }
        }
    }
`;

const BlockViewCalendarWrapper = Styled.div`
    &.table-responsive{
        table{
            @media only screen and (max-width: 1599px){
                display: block;
                width: 100%;
                overflow-x: auto;
            }
        }
    }
    .ant-picker-calendar{
        border: 1px solid ${({ theme }) => theme['border-color-light']};
        .ant-picker-body{
            padding: 0 !important;
        }
        .ant-picker-calendar-date {
            padding-top: 10px;
            margin: 0 !important;
            border-top: 0 none !important;
        }
        .ant-picker-cell{
            min-width: 155px;
            ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 1px solid ${({ theme }) =>
  theme['border-color-light']};
            .ant-picker-cell-inner{
                min-width: 155px;
            }
            &:hover{
                .ant-picker-calendar-date{
                    background-color: transparent !important;
                }
            }
            &.ant-picker-cell-today{
                .ant-picker-calendar-date-today{
                    background-color: #EFEFFE !important;
                    position: relative;
                    &:after{
                        position: absolute;
                        left: 0;
                        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                        top: 0;
                        height: 2px;
                        width: 100%;
                        content: '';
                        background-color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
            &.ant-picker-cell-selected{
                .ant-picker-calendar-date{
                    background-color: transparent;
                }
            }
            &.ant-picker-cell-in-view{
                .ant-picker-calendar-date{
                    color: ${({ theme }) => theme['gray-color']};
                }
            }
            .ant-picker-calendar-date{
                color: ${({ theme }) => theme['extra-light-color']};
            }
            .ant-picker-calendar-date-value{
                margin: 6px 4px 10px 0
            }
        }
        table{
            thead{
                tr{
                    th{
                        padding: 16px 20px !important;
                        background-color: ${({ theme }) => theme['bg-color-light']} !important;
                        color: ${({ theme }) => theme['gray-color']};;
                    }
                }
            }
            tr{
                &:last-child{
                    td{
                        border-bottom: 0 none;
                    }
                }
                th,
                td{
                    ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0;
                    border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
                    &:last-child{
                        border-right: 0 none;
                        ${({ theme }) => (theme.rtl ? 'border-left' : 'border-right')}: 0 none;
                    }
                }
            }
        }
    }
`;

const AddEventWrap = Styled.div`
    label{
        font-weight: 400 !important;
        color: ${({ theme }) => theme['light-color']} !important;
        margin-bottom: 0 !important;
    }
    .ant-form-item{
        span.label{
            @media only screen and (max-width: 575px){
                display: inline-block;
                margin-bottom: 10px;
            }
        }
    }
    .ant-form-item-control-input{
        min-height: 46px;
        textarea{
            min-height: 104px;
            resize: none;
        }
        .ant-input{
            border: 1px solid ${({ theme }) => theme['border-color-light']};
            &::placeholder{
                color: ${({ theme }) => theme['gray-color']};
            }
        }
    }
    .ant-row{
        flex-flow: row !important;
        align-items: center;
        @media only screen and (max-width: 575px){
            flex-flow: column !important;
            align-items: flex-start;
        }
        &.event-desc{
            align-items: flex-start;
        }
        .ant-form-item-control{
            @media only screen and (max-width: 575px){
                width: 100%;
            }
        }
    }
    
    .date-time-picker {
        .ant-picker{
            min-width: auto;
            width: 100%;
            &:not(:last-child){
                ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
            }
        }
        .ant-picker-input{
            padding: 0 30px;
            position: relative;
            @media only screen and (max-width: 575px){
                padding: 0 20px 0 25px;
            }
            .ant-picker-suffix{
                position: absolute;
                ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                top: 50%;
                transform: translateY(-50%);
                @media only screen and (max-width: 575px){
                    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
                }
                svg{
                    color: ${({ theme }) => theme['light-color']};
                }
            }
        }
    }
    .add-event-footer{
        .ant-btn-white{
            color: ${({ theme }) => theme['light-color']} !important;
        }
        .btn-save{
            height: 38px;
            padding: 0 25px;
        }
    }
`;

export { CalendarWrapper, Aside, UpdatePopup, BlockViewCalendarWrapper, AddEventWrap };
