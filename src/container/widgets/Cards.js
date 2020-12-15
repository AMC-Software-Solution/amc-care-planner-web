import React from 'react';
import { Row, Col } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TeamCard from '../pages/overview/TeamCard';
import UserCards from '../pages/overview/UserCard';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, FileCardWrapper, BannerCardStyleWrap } from '../styled';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';
import GridCard from '../project/overview/GridCard';
import ProductCards from '../ecommerce/product/overview/ProductCards';
import ProductCardsList from '../ecommerce/product/overview/ProductCardList';
import GalleryCards from '../pages/overview/GalleryCard';
import ContactCard from '../contact/overview/ContactCard';
import { Cards } from '../../components/cards/frame/cards-frame';
import SampleCardOne from '../../components/cards/sampleCard/SampleCardOne';
import SampleCardTwo from '../../components/cards/sampleCard/SampleCardTwo';
import SampleCardThree from '../../components/cards/sampleCard/SampleCardThree';
import SampleCardFour from '../../components/cards/sampleCard/SampleCardFour';
import SampleCardFive from '../../components/cards/sampleCard/SampleCardFive';
import SampleCardSix from '../../components/cards/sampleCard/SampleCardSix';
import SampleCardSeven from '../../components/cards/sampleCard/SampleCardSeven';
import { cardOne, cardTwo, cardThree, cardFive, cardSix, cardSeven } from '../../demoData/sampleCards.json';
import BannerCard from '../../components/cards/BannerCard';
import FileListCard from '../project/overview/FileListCard';

const actions = (
  <>
    <Link to="#">
      <FeatherIcon size={14} icon="eye" />
      <span>View</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={14} icon="edit" />
      <span>Edit</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={14} icon="trash-2" />
      <span>Delete</span>
    </Link>
  </>
);

const WidgetsCard = () => {
  const { products, projects, users, team, gallery, contactUsers } = useSelector(state => {
    return {
      products: state.products.data,
      projects: state.projects.data,
      users: state.users,
      team: state.team.data,
      gallery: state.gallery.data,
      contactUsers: state.Contact.data,
    };
  });
  return (
    <>
      <PageHeader
        title="Widgets Cards"
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
          {projects.map(project => {
            return (
              project.id <= 3 && (
                <Col key={project.id} lg={8} xs={24}>
                  <GridCard value={project} />
                </Col>
              )
            );
          })}

          {users.map(user => {
            return (
              user.id <= 4 && (
                <Col key={user.id} xxl={6} md={12} sm={12} xs={24}>
                  <UserCards user={user} />
                </Col>
              )
            );
          })}

          {products.map((product, index) => {
            return (
              index <= 3 && (
                <Col key={product.id} xxl={6} sm={12} xs={24}>
                  <ProductCards product={product} />
                </Col>
              )
            );
          })}

          {team.map(member => {
            return (
              member.id <= 4 && (
                <Col key={member.id} xxl={6} md={12} sm={12} xs={24}>
                  <TeamCard actions={actions} user={member} />
                </Col>
              )
            );
          })}

          {gallery.map(item => {
            return (
              item.id <= 4 && (
                <Col key={item.id} xxl={6} md={12} sm={12} xs={24}>
                  <GalleryCards actions={actions} item={item} />
                </Col>
              )
            );
          })}

          {contactUsers.map(user => {
            return (
              user.id <= 4 && (
                <Col key={user.id} xxl={6} md={12} sm={12} xs={24}>
                  <Cards headless>
                    <ContactCard user={user} />
                  </Cards>
                </Col>
              )
            );
          })}

          {cardOne.map(item => {
            return (
              <Col key={item.id} xxl={6} md={12} sm={12} xs={24} className="mb-25">
                <SampleCardOne item={item} />
              </Col>
            );
          })}

          {cardTwo.map(item => {
            return (
              <Col key={item.id} xxl={6} md={12} sm={12} xs={24} className="mb-25">
                <SampleCardTwo item={item} />
              </Col>
            );
          })}

          {cardThree.map(item => {
            return (
              <Col key={item.id} xxl={6} md={12} sm={12} xs={24} className="mb-25">
                <SampleCardThree item={item} />
              </Col>
            );
          })}

          {cardOne.map(item => {
            return (
              <Col key={item.id} xxl={6} md={12} xs={24} className="mb-25">
                <SampleCardFour item={item} />
              </Col>
            );
          })}

          {cardFive.map(item => {
            return (
              <Col key={item.id} xxl={6} md={12} xs={24} className="mb-25">
                <SampleCardFive item={item} />
              </Col>
            );
          })}

          {cardSix.map(item => {
            return (
              <Col key={item.id} xxl={6} md={12} sm={12} xs={24}>
                <SampleCardSix item={item} />
              </Col>
            );
          })}

          {cardSeven.map(item => {
            return (
              <Col key={item.id} xxl={6} md={12} sm={12} xs={24} className="mb-25">
                <SampleCardSeven item={item} />
              </Col>
            );
          })}

          <Col xs={24}>
            <BannerCardStyleWrap>
              <Cards headless>
                <Row gutter="25">
                  <Col xxl={8} md={12} className="mb-25">
                    <BannerCard
                      item={{
                        id: 2,
                        type: 'border',
                        icon: 'layers.svg',
                        title: 'Dark Color',
                        content:
                          'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                        authorName: 'Barbara Marion',
                        authorImg: '10.png',
                      }}
                    />
                  </Col>
                  <Col xxl={8} md={12} className="mb-25">
                    <BannerCard
                      item={{
                        id: 2,
                        type: 'border',
                        icon: 'cloud.svg',
                        title: 'Dark Color',
                        content:
                          'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                        authorName: 'Barbara Marion',
                        authorImg: '10.png',
                      }}
                    />
                  </Col>
                  <Col xxl={8} md={12} className="mb-25">
                    <BannerCard
                      item={{
                        id: 3,
                        type: 'border',
                        bgImage: '',
                        icon: 'camera.svg',
                        title: 'Image',
                        content:
                          'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                        authorName: 'Garry Sobars',
                        authorImg: '10.png',
                      }}
                    />
                  </Col>
                </Row>
              </Cards>
            </BannerCardStyleWrap>
          </Col>

          <Col xs={24}>
            <BannerCardStyleWrap>
              <Cards headless>
                <Row gutter="25">
                  <Col xxl={8} md={12} className="mb-25">
                    <BannerCard />
                  </Col>
                  <Col xxl={8} md={12} className="mb-25">
                    <BannerCard
                      item={{
                        id: 2,
                        type: 'dark',
                        icon: 'water-fall.svg',
                        title: 'Dark Color',
                        content:
                          'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                        authorName: 'Barbara Marion',
                        authorImg: '10.png',
                      }}
                    />
                  </Col>
                  <Col xxl={8} md={12} className="mb-25">
                    <BannerCard
                      item={{
                        id: 3,
                        type: 'Image',
                        bgImage: 'card-bg.png',
                        icon: 'image.svg',
                        title: 'Image',
                        content:
                          'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
                        authorName: 'Garry Sobars',
                        authorImg: '10.png',
                      }}
                    />
                  </Col>
                </Row>
              </Cards>
            </BannerCardStyleWrap>

            <Row gutter="25">
              <Col lg={8} xs={24}>
                <FileCardWrapper>
                  <FileListCard />
                </FileCardWrapper>
              </Col>
              <Col lg={8} xs={24}>
                <FileCardWrapper>
                  <FileListCard />
                </FileCardWrapper>
              </Col>
              <Col lg={8} xs={24}>
                <FileCardWrapper>
                  <FileListCard />
                </FileCardWrapper>
              </Col>
            </Row>
          </Col>
          <Col xxl={18} xs={24}>
            <ProductCardsList
              product={{
                id: 1,
                name: 'Montes Scelerisque',
                rate: 5,
                time: 1586372610052,
                price: 250,
                oldPrice: 650,
                popular: 105,
                brand: 'chair',
                category: 'furniture',
                img: 'static/img/products/1.png',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
              }}
            />
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default WidgetsCard;
