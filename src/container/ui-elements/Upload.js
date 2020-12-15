import React, { useState } from 'react';
import { Row, Col, Upload, message } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { UploadOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = file => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const Uploads = () => {
  const [state, setState] = useState({
    fileList: [
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      },
    ],
    loading: false,
    defaultFilelist: [
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '-2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '-3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
  });

  const onHandleChange = info => {
    if (info.file.status === 'uploading') {
      setState({ ...state, loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  const handleChange = info => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-2);
    fileList = fileList.map(file => {
      if (file.response) {
        // eslint-disable-next-line no-param-reassign
        file.url = file.response.url;
      }
      return file;
    });
    setState({ ...state, fileList });
  };

  const uploadButton = (
    <div>
      {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const { imageUrl, defaultFilelist } = state;

  const defaultProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        setState({ ...state, defaultFilelist: [...defaultFilelist, fileList] });
      }
    },
  };

  return (
    <>
      <PageHeader
        ghost
        title="Upload"
        buttons={[
          <div key="1" className="page-header-actions">
            <CalendarButtonPageHeader />
            <ExportButtonPageHeader />
            <ShareButtonPageHeader />
            <Button size="small" type="primary">
              <FeatherIcon icon="plus" size={14} />
              Add New
            </Button>
          </div>,
        ]}
      />
      <Main>
        <Row gutter={15}>
          <Col sm={12} xs={24}>
            <Cards title="Basic">
              <Upload {...props}>
                <Button className="btn-outlined" size="large" type="light" outlined>
                  <UploadOutlined /> Click to Upload
                </Button>
              </Upload>
            </Cards>
            <Cards title="Avatar">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={onHandleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </Cards>
          </Col>
          <Col sm={12} xs={24}>
            <Cards title="Complete Control">
              <Upload
                props={{
                  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
                  onChange: handleChange,
                  multiple: true,
                }}
                fileList={state.fileList}
              >
                <Button className="btn-outlined" size="large" type="light" outlined>
                  <UploadOutlined /> Upload
                </Button>
              </Upload>
            </Cards>
            <Cards title="Upload Default">
              <Upload props={defaultProps} fileList={defaultFilelist}>
                <Button className="btn-outlined" size="large" type="light" outlined>
                  <UploadOutlined /> Upload
                </Button>
              </Upload>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Uploads;
