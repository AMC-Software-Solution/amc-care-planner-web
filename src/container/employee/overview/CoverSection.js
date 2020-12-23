import React from 'react';
import { Upload, message } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const CoverSection = () => {
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="cover-image">
      <img style={{ width: '100%' }} src={require('../../../static/img/profile/cover-img.png')} alt="banner" />
      <Upload {...props}>
        <Link to="#">
          <FeatherIcon icon="camera" size={16} /> Change Cover
        </Link>
      </Upload>
    </div>
  );
};

CoverSection.propTypes = {
  match: propTypes.object,
};

export default CoverSection;
