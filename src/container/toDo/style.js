import Styled from 'styled-components';

const Span = Styled.span`
    &.active{
        color: ${({ theme }) => theme['primary-color']};
        text-decoration: line-through;
    }
`;

const TodoStyleWrapper = Styled.div`
    .ant-card-body{
        padding: 15px 0 25px !important
    }
    .ant-table{
        thead{
            display: none;
        }
        tbody{
            tr{
                position: relative;
                &:hover{
                    box-shadow: 0 15px 50px ${({ theme }) => theme['light-color']}20;
                    .ant-table-cell{
                        background-color: #fff;
                    }
                }
                td{
                    font-size: 14px;
                    color: ${({ theme }) => theme['gray-color']}
                    line-height: .75;
                    &:first-child{
                        padding-left: 25px;
                    }
                    &:last-child{
                        padding-right: 25px;
                    }
                    .ant-checkbox-wrapper{
                        padding-top: 3px;
                        &:hover{
                            &:after{
                                border-color: ${({ theme }) => theme['success-color']};
                            }
                            .ant-checkbox-inner{
                                border-color: ${({ theme }) => theme['success-color']};
                            }
                        }
                    }
                    .ant-checkbox-checked{
                        &:after{
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    .ant-checkbox-checked .ant-checkbox-inner{
                        background-color: ${({ theme }) => theme['success-color']};
                        border-color: ${({ theme }) => theme['success-color']};
                    }
                    .todo-title{
                        min-width: 150px;
                        line-height: 1.5;
                    }
                }
            }
            .todos-action{
                min-width: 100px;
                text-align: right;
                svg,
                i,
                span{
                    color: #D8DCEB !important;
                }
                svg.feather-trash-2{
                    color: ${({ theme }) => theme['gray-color']}
                }
                .star{
                    margin: 0 20px;
                    &.active{
                        svg,
                        i{
                            color: ${({ theme }) => theme['warning-color']} !important;
                        }
                    }
                }
            }
            
        }
    }
    
    .new-todo-wrap{
        padding: 16px 25px 0;
        .btn-toDoAdd{
            font-size: 12px;
            font-weight: 500;
            height: 50px;
            padding: 0px 23.23px;
        }
    }
`;
export { Span, TodoStyleWrapper };
