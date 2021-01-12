import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { Table } from 'antd';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { RecentFIleTableWrap } from '../Style';

const RecentFileTable = () => {
  const FileManagerData = useSelector(state => state.FileManager.reData);

  const columns = [
    {
      title: <span className="file-name">Name</span>,
      dataIndex: 'f_name',
      key: 'f_name',
    },
    {
      title: <span className="file-size">Size</span>,
      dataIndex: 'f_size',
      key: 'f_size',
    },
    {
      title: <span className="file-owner">Owner</span>,
      dataIndex: 'f_owner',
      key: 'f_owner',
    },
    {
      title: <span className="file-shared">Shared</span>,
      dataIndex: 'f_shared',
      key: 'f_shared',
    },
    {
      dataIndex: 'action',
      key: 'action',
    },
  ];
  const dataSource = [];

  if (FileManagerData !== null) {
    // {
    //   FileManagerData.length
    //     ? FileManagerData[0].folder.map(folder => {
    //         return dataSource.push({
    //           key: index + 1,
    //           index,
    //           f_name: (
    //             <div className="file-info">
    //               <div className="file-info__img">
    //                 <img src={require(`../../../static/img/files/pdf.png`)} alt="StrikingDash" />
    //               </div>
    //               <div className="file-info__content">
    //                 <h5 className="f_name">Product-guidelines.pdf</h5>
    //                 <span className="f_type">pdf</span>
    //               </div>
    //             </div>
    //           ),
    //           f_size: <span className="file-size">7.05 MB</span>,
    //           f_owner: <span className="file-owner">Kellie Marquot</span>,
    //           f_shared: (
    //             <div className="file-shared-figure">
    //               <img src={require('../../../static/img/users/1.png')} alt="strikingDash" />
    //               <img src={require('../../../static/img/users/2.png')} alt="strikingDash" />
    //               <img src={require('../../../static/img/users/3.png')} alt="strikingDash" />
    //               <img src={require('../../../static/img/users/4.png')} alt="strikingDash" />
    //             </div>
    //           ),
    //           action: (
    //             <Dropdown
    //               content={
    //                 <>
    //                   <Link to="#">
    //                     <FeatherIcon icon="eye" size={14} />
    //                     Download
    //                   </Link>
    //                   <Link to="#">
    //                     <FeatherIcon icon="link" size={14} />
    //                     Copy
    //                   </Link>
    //                   <Link to="#">
    //                     <FeatherIcon icon="trash-2" size={14} />
    //                     Delete
    //                   </Link>
    //                 </>
    //               }
    //             >
    //               <Link to="#">
    //                 <FeatherIcon icon="more-vertical" size={16} />
    //               </Link>
    //             </Dropdown>
    //           ),
    //         });
    //       })
    //     : null;
    // }
    FileManagerData.map((item, index) => {
      return dataSource.push({
        key: index + 1,
        index,
        f_name: (
          <div className="file-info">
            <div className="file-info__img">
              <img src={require(`../../../static/img/files/pdf.png`)} alt="StrikingDash" />
            </div>
            <div className="file-info__content">
              <h5 className="f_name">Product-guidelines.pdf</h5>
              <span className="f_type">pdf</span>
            </div>
          </div>
        ),
        f_size: <span className="file-size">7.05 MB</span>,
        f_owner: <span className="file-owner">Kellie Marquot</span>,
        f_shared: (
          <div className="file-shared-figure">
            <img src={require('../../../static/img/users/1.png')} alt="strikingDash" />
            <img src={require('../../../static/img/users/2.png')} alt="strikingDash" />
            <img src={require('../../../static/img/users/3.png')} alt="strikingDash" />
            <img src={require('../../../static/img/users/4.png')} alt="strikingDash" />
          </div>
        ),
        action: (
          <Dropdown
            content={
              <>
                <Link to="#">
                  <FeatherIcon icon="eye" size={14} />
                  Download
                </Link>
                <Link to="#">
                  <FeatherIcon icon="link" size={14} />
                  Copy
                </Link>
                <Link to="#">
                  <FeatherIcon icon="trash-2" size={14} />
                  Delete
                </Link>
              </>
            }
          >
            <Link to="#">
              <FeatherIcon icon="more-vertical" size={16} />
            </Link>
          </Dropdown>
        ),
      });
    });
  }

  return (
    <RecentFIleTableWrap>
      <h4 className="recent-file-title">Recent files</h4>
      <div className="recent-file-list table-responsive">
        <Table pagination={false} dataSource={dataSource} columns={columns} />
      </div>
    </RecentFIleTableWrap>
  );
};
export default RecentFileTable;
