import Styled from 'styled-components';

const KanvanBoardWrap = Styled.div`
.ant-card-body{
  min-height: 600px;
}
  h1{
    margin-bottom: 20px;
  }
  .sDash_kanban-board-list{
    display: flex;
    margin: -10px;
    flex-wrap: wrap;
    .sDash_kanban-board-item{
      flex: 0 0 20%;
      padding: 10px;
      height: 400px;
      @media only screen and (max-width: 1599px){
        flex: 0 0 25%;
      }
      @media only screen and (max-width: 1399px){
        flex: 0 0 33.333%;
      }
      @media only screen and (max-width: 767px){
        flex: 0 0 50%;
      }
      @media only screen and (max-width: 575px){
        flex: 0 0 100%;
      }
      .sDash_kanban-board-item-scrolable{
        padding-bottom: 80px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme['bg-color-normal']};
      }
      .sDash_addTask-control{
        padding-bottom: 20px;
        &.add-task-on{
          .sDash_addTask-from{
            display: block;
          }
          .btn-addTask{
            display: none;
          }
        }
        .sDash_addTask-from{
          padding: 0 20px 20px;
          display: none;
        }
        .sDash_addTask-input{
          padding: 10px;
          border-radius: 4px;
          background-color: #fff;
          width: 100%;
          height: 38px;
          border: 1px solid ${({ theme }) => theme['border-color-normal']};
          &:focus{
            outline: none;
          }
        }
        .sDash_addTask-action{
          margin-top: 10px;
          display: flex;
          align-items: center;
          .add-column{
            margin-right: 15px;
          }
          a{
            line-height: 1;
          }
          svg,
          i{
            color: ${({ theme }) => theme['gray-color']};
          }
        }
      }
    }
    .btn-addColumn{
      flex: 0 0 20%;
      @media only screen and (max-width: 1599px){
        flex: 0 0 25%;
      }
      @media only screen and (max-width: 1399px){
        flex: 0 0 33.333%;
      }
      @media only screen and (max-width: 767px){
        flex: 0 0 50%;
      }
      @media only screen and (max-width: 575px){
        flex: 0 0 100%;
      }
    }
    .sDash_kanban-board-item__header{
      padding: 18px 20px 10px 20px;
      position: relative;
      &.editable{
        .list-header-title{
          display: none;
        }
        .title-edit{
          display: block;
          height: 60px;
          border-color: ${({ theme }) => theme['primary-color']};
        }
      }
      .title-edit{
        width: 100%;
        padding: 0 15px;
        border: 1px solid #E3E6EF;
        height: 40px;
        line-height: 38px;
        border-radius: 4px;
        resize: none;
        display: none;
        transition: height .3s ease;
        &:focus{
          outline: none;
        }
      }
      .list-header-target{
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .list-header-title{
        font-size: 15px;
        font-weight: 500;
        display:  flex;
        justify-content: space-between;
        .btn-more{
          padding: 0 4px;
          color: #868EAE;
          line-height: 1;
          position: relative;
          z-index: 22;
          svg,
          img{
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .sDash_kanvan-task{
      padding: 0 20px 0 20px;
    }
    .sDash_kanvan-task__single{
      position: relative;
      min-height: 48px;
      padding: 12px 15px;
      background-color: #fff;
      box-shadow: 0 0 5px #9299BB10;
      border-radius: 4px;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover{
        .sDash_kanvan-task__title{
          .btn-edit{
            line-height: 1;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }
        }
      }
      .sDash_kanvan-task__title{
        font-size: 15px;
        font-weight: 500;
        margin: 0 5px 0 0;
        display: flex;
        justify-content: space-between;
        a{
          color: ${({ theme }) => theme['gray-color']};
        }
        .btn-edit{
          display: flex;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          svg,
          img{
            width: 14px;
            height: 14px;
            color: ${({ theme }) => theme['gray-color']};
          }
        }
      }
      .sDash_kanvan-task__edit{
        display: none;
      }
      .sDash_kanvan-task__editable{
        position: relative;
        .sDash_kanvan-task__edit{
          display: flex;
          position: absolute;
          left: -30px;
          top: -10px;
          z-index: 99999;
          width: calc(100% + 60px);
          border-radius: 4px;
          input{
            min-height: 58px;
          }
          button{
            padding: 0px 21.71px;
            height: 38px;
          }
          .sDash_kanvan-task__edit--right{
            .btn-delete{
              font-size: 12px;
              margin-left: 6px;
              white-space: nowrap;
              background-color: ${({ theme }) => theme['dark-color']};
              line-height: 2.6;
              display: flex;
              align-items: center;
              border-radius: 5px;
              padding: 0 8px;
              color: #fff;
              i,
              svg{
                color: #fff;
                margin-right: 4px;
              }
            }
          }
        }
        .edit-kanban-task{
          margin-top: 10px;
        }
      }
    }
    
    .btn-addTask{
      display: inline-block;
      width: calc(100% - 40px);
      padding: 8px 0;
      text-align: center;
      border-radius: 4px;
      position: relative;
      ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 20px;
      color: ${({ theme }) => theme['gray-color']};
      background-color: ${({ theme }) => theme['border-color-normal']};
      svg,
      i,
      img{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 3px;
      }
    }
    .btn-addColumn{
      padding: 10px;
      &.add-column-on{
        .btn-addColumn-inner{
          .btn-add{
            display: none;
          }
          .btn-addColumn-form{
            display: block;
          }
        }
      }
      .btn-add{
        display: block;
        width: 100%;
        height: fit-content;
        border-radius: 5px;
        padding: 12px 20px;
        background-color: #F4F5F7;
        color: ${({ theme }) => theme['gray-color']};
        svg,
        i,
        img{
          margin-right: 3px;
        }
      }
      .btn-addColumn-inner{
        background-color: #F4F5F7;
        .sDash-add-column-input{
          padding: 10px;
          border-radius: 4px;
          background-color: #fff;
          width: 100%;
          height: 38px;
          border: 1px solid ${({ theme }) => theme['border-color-normal']};
          &:focus{
            outline: none;
          }
        }
      }
      .btn-addColumn-form{
        display: none;
        padding: 15px 20px 15px;
        .sDash_add-column-action{
          margin-top: 10px;
          display: flex;
          align-items: center;
          .add-column{
            margin-right: 15px;
          }
          a{
            line-height: 1;
          }
          svg,
          i{
            color: ${({ theme }) => theme['gray-color']};
          }
        }
      }
    }
  }
`;
const ChecklistWrap = Styled.div`
  .sDash_checklist-tasks__single{
    position: relative;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .35s;
    z-index: 2;
    &:before{
      position: absolute;
      ${({ theme }) => (theme.rtl ? 'right' : 'left')}: -12px;
      top: 0;
      width: calc(100% + 24px);
      height: 100%;
      content: '';
      background-color: #F4F5F7;
      opacity: 0;
      visibility: hidden;
      border-radius: 2px;
      z-index: -1;
    }
    &:hover{
      .btn-more{
        opacity: 1;
        visibility: visible;
      }
      &:before{
        opacity: 1;
        visibility: visible;
      }
    }
    .btn-more{
      display: flex;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      i,
      svg{
        color: #868EAE;
      }
    }
    .ant-checkbox-wrapper{
      &.ant-checkbox-wrapper-checked{
        .sDash_task-label{
          position: relative;
          display: inline-block;
          color: ${({ theme }) => theme['gray-color']};
          &:after{
            position: absolute;
            width: 100%;
            height: 1px;
            ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0;
            top: 60%;
            transform: translateY(-50%);
            background-color: #9299B8;
            content: '';
          }
        }
      }
    }
  }
  .sDash_checklist-tasks-wrap{
    .addChecklistTask-wrap{
      .addChecklistTask-form{
        .add-checklistTask{
          padding: 8px 10px;
          margin-bottom: 12px;
        }
        .addChecklistTask-form-action{
          display: flex;
          align-items: center;
          a{
            line-height: 1;
            svg,
            i{
              color: ${({ theme }) => theme['gray-color']};
            }
          }
          .btn-add{
            margin-right: 10px;
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
          }
        }
      }
      .add-item{
        margin-top: 15px;
      }
    }
  }
`;

const BackShadow = Styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  ${({ theme }) => (theme.rtl ? 'right' : 'left')};
  z-index: 9999;
  background: #00000080;
`;

export { KanvanBoardWrap, ChecklistWrap, BackShadow };
