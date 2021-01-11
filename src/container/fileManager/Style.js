import styled from 'styled-components';

const SidebarNav = styled.div`
  .ant-card-body {
    padding: 30px !important;
  }
  .btn-fileAdd {
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    height: 44px;
    margin-bottom: 15px;
  }
  .sDash_filemanager-title {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme['dark-color']};
  }
  .sDash_filemanager-nav {
    .sDash_filemanager-nav__item {
      &:not(:last-child) {
        margin-bottom: 12px;
      }
      .sDash-dropdown-icon {
        line-height: 1;
        svg,
        i {
          color: ${({ theme }) => theme['light-gray-color']};
        }
      }
      .sDash_filemanager-fileicon {
        display: inline-flex;
        align-items: center;
        margin: 0 10px 0 6px;
        svg,
        i {
          height: 18px;
          color: ${({ theme }) => theme['extra-light-color']};
        }
      }
      a,
      span {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme['dark-color']};
      }
    }
    .sDash_filemanager-nav {
      padding: 6px 0 5px 26px;
      .sDash_filemanager-nav__item {
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }
  .sDash_filemanager-bottom {
    margin-top: 70px;
    .sDash_filemanager-bottom__title {
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 0;
      color: ${({ theme }) => theme['gray-color']};
    }
    .ant-progress {
      .ant-progress-text {
        font-size: 12px;
        font-weight: 500;
      }
    }
    .ant-progress-bg {
      height: 5px !important;
    }
    p {
      font-size: 12px;
      margin-bottom: 0;
      color: ${({ theme }) => theme['light-gray-color']};
    }
  }
`;

const FileManagerContentWrap = styled.div`
  .file-manager-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
    .ant-input-affix-wrapper {
      font-size: 14px;
      padding: 6.5px 11px;
      max-width: 330px;
      border-radius: 6px;
      .ant-input-prefix {
        svg,
        img {
          width: 16px;
        }
      }
      input {
        font-size: 14px;
      }
    }
    .view-mode {
      display: flex;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        svg,
        i {
          width: 16px;
          color: ${({ theme }) => theme['extra-light-color']};
        }
        &.active {
          background-color: ${({ theme }) => theme['border-color-light']};
        }
      }
    }
  }
  .file-manager-content {
    .file-manager-content__title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 18px;
      color: ${({ theme }) => theme['dark-color']};
    }
    .sDash-file-card {
      .ant-card {
        .ant-card-body {
          position: relative;
          text-align: center;
          min-height: 180px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          .ant-dropdown-trigger {
            position: absolute;
            right: 20px;
            top: 20px;
            svg,
            i {
              color: ${({ theme }) => theme['light-gray-color']};
            }
          }
          .file-name {
            margin-top: 18px;
            font-size: 14px;
            font-weight: 500;
            color: ${({ theme }) => theme['dark-color']};
          }
        }
      }
    }
  }
`;

const Body = styled.main``;

const RecentFIleTableWrap = styled.div`
  .recent-file-title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
    color: ${({ theme }) => theme['dark-color']};
  }
  .recent-file-list {
    .file-info {
      display: flex;
      .file-info__img {
        margin-right: 10px;
        img {
          max-width: 40px;
        }
      }
      .file-info__content {
        .f_name {
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 0;
          color: ${({ theme }) => theme['dark-color']};
        }
        .f_type {
          position: relative;
          top: -2px;
          text-transform: uppercase;
          font-size: 12px;
          color: #9299b8;
        }
      }
    }
    .file-shared-figure {
      margin: -1.5px;
      img {
        max-width: 25px;
        margin: 1.5px;
      }
    }
    .ant-table-content {
      tr {
        td {
          border: 0 none;
          color: ${({ theme }) => theme['dark-color']};
        }
      }
      .ant-table-thead {
        border: 1px solid ${({ theme }) => theme['border-color-light']};
        tr {
          th {
            background-color: ${({ theme }) => theme['bg-color-light']};
            border: 0 none;
            &:first-child {
              padding-left: 38px;
            }
            &:last-child {
              padding-right: 28px;
            }
            .file-name {
              min-width: 350px;
            }
            .file-size {
              min-width: 160px;
            }
            .file-owner {
              min-width: 230px;
            }
            .file-shared {
              min-width: 270px;
            }
            .file-shared {
              min-width: 270px;
            }
          }
        }
      }
      .ant-table-tbody {
        .ant-table-row {
          .file-info {
            min-width: 350px;
          }
          .ant-table-cell {
            background-color: #fff;
            &:first-child {
              padding-left: 38px;
            }
            &:last-child {
              padding-right: 28px;
            }
          }
          &:hover {
            box-shadow: 0 15px 50px #9299b820;
          }
          .ant-dropdown-trigger {
            float: right;
            svg,
            i {
              color: ${({ theme }) => theme['extra-light-color']};
            }
          }
        }
      }
    }
  }
`;

export { SidebarNav, FileManagerContentWrap, Body, RecentFIleTableWrap };
