import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { GalleryNav } from './style';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { galleryFilter } from '../../redux/gallary/actionCreator';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import Masonry from 'react-masonry-css';

const GalleryTwo = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    activeClass: '',
  });

  const handleChange = value => {
    dispatch(galleryFilter('category', value));
    setState({
      ...state,
      activeClass: value,
    });
  };

  return (
    <>
      <PageHeader
        ghost
        title="Gallery"
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
        <Row gutter={25}>
          <Col xs={24}>
            <GalleryNav>
              <ul>
                <li>
                  <Link
                    className={state.activeClass === '' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('')}
                    to="#"
                  >
                    All
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'webDesign' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('webDesign')}
                    to="#"
                  >
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'uiDesign' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('uiDesign')}
                    to="#"
                  >
                    UI Design
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'wireframe' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('wireframe')}
                    to="#"
                  >
                    Wireframe
                  </Link>
                </li>
                <li>
                  <Link
                    className={state.activeClass === 'Presentation' ? 'active' : 'deactivate'}
                    onClick={() => handleChange('Presentation')}
                    to="#"
                  >
                    Presentation
                  </Link>
                </li>
              </ul>
            </GalleryNav>
          </Col>

          <Masonry breakpointCols={4} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
            <img style={{ width: '100%' }} src={require(`../../static/img/profile/cover-img.png`)} alt="" />
            <img style={{ width: '100%' }} src={require(`../../static/img/gallery/2.png`)} alt="" />
            <img style={{ width: '100%' }} src={require(`../../static/img/gallery/3.png`)} alt="" />
            <img style={{ width: '100%' }} src={require(`../../static/img/gallery/4.png`)} alt="" />
            <img style={{ width: '100%' }} src={require(`../../static/img/gallery/5.png`)} alt="" />
            <img style={{ width: '100%' }} src={require(`../../static/img/gallery/6.png`)} alt="" />
            {/* {gallery.map(item => {
              const { id, name, img, category } = item;
              return (
                <figure key={id}>
                  <img style={{ width: '100%' }} src={require(`../../../${img}`)} alt="" />
                  <figcaption>
                    <div className="gallery-single-content">
                      <h4 className="gallery-single-title" as="h4">
                        {name}
                      </h4>
                      <p>{category}</p>
                    </div>
                  </figcaption>
                </figure>
              );
            })} */}
          </Masonry>
        </Row>
      </Main>
    </>
  );
};

export default GalleryTwo;
