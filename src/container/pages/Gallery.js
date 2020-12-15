import React, { useState, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { Row, Col, Spin, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { GalleryNav } from './style';
import { Main } from '../styled';
import { PageHeader } from '../../components/page-headers/page-headers';
import { galleryFilter } from '../../redux/gallary/actionCreator';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import { Cards } from '../../components/cards/frame/cards-frame';

const GalleryCards = lazy(() => import('./overview/GalleryCard'));

const Gallery = () => {
  const dispatch = useDispatch();
  const { gallery, isLoading } = useSelector(state => {
    return {
      gallery: state.gallery.data,
      isLoading: state.gallery.loading,
    };
  });

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
          {isLoading ? (
            <Col xs={24}>
              <div className="spin">
                <Spin />
              </div>
            </Col>
          ) : (
            gallery.map(item => {
              const { id } = item;
              return (
                <Col key={id} xxl={6} lg={8} sm={12} xs={24}>
                  <Suspense
                    fallback={
                      <Cards headless>
                        <Skeleton active />
                      </Cards>
                    }
                  >
                    <GalleryCards item={item} />
                  </Suspense>
                </Col>
              );
            })
          )}
        </Row>
      </Main>
    </>
  );
};

export default Gallery;
