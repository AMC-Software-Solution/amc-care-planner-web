import React from 'react';
import { Row, Col } from 'antd';
import { PricingCard, ListGroup, Badge } from './style';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import Heading from '../../components/heading/heading';
import { List } from '../../components/pricing/pricing';
import { Button } from '../../components/buttons/buttons';
import { Cards } from '../../components/cards/frame/cards-frame';

const PricingTable = () => {
  return (
    <>
      <PageHeader ghost title="Pricing Table" />
      <Main>
        <Row gutter={25} justify="center">
          <Col xxl={6} lg={8} sm={12} xs={24}>
            <PricingCard style={{ marginBottom: 30 }}>
              <Badge className="pricing-badge" type="dark">Free Forever</Badge>
              <Heading className="pricing-title" as="h3">
                Free
              </Heading>
              <span className="package-user-type">For Individuals</span>
              <ListGroup>
                <List text="100MB File Space" />
                <List text="2 Active Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
              </ListGroup>
              <Button size="default" type="white">
                Current Plan
              </Button>
            </PricingCard>
          </Col>
          <Col xxl={6} lg={8} sm={12} xs={24}>
            <PricingCard style={{ marginBottom: 30 }}>
              <Badge className="pricing-badge" type="primary">Basic Plan</Badge>
              <Heading className="price-amount" as="h3">
                <sup className="currency">$</sup>19 <sub className="pricing-validity">Per month</sub>
              </Heading>
              <span className="package-user-type">For 2 Users</span>
              <ListGroup>
                <List text="100GB File Space" />
                <List text="300 Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
                <List text="Custom Post Types" />
              </ListGroup>
              <Button size="default" type="primary">
                Get Started
              </Button>
            </PricingCard>
          </Col>
          <Col xxl={6} lg={8} sm={12} xs={24}>
            <PricingCard style={{ marginBottom: 30 }}>
              <Badge className="pricing-badge" type="secondary">Business</Badge>
              <Heading className="price-amount" as="h3">
                <sup className="currency">$</sup>39 <sub className="pricing-validity">Per month</sub>
              </Heading>
              <span className="package-user-type">For 10 Users</span>
              <ListGroup>
                <List text="100GB File Space" />
                <List text="300 Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
                <List text="Custom Post Types" />
                <List text="Subtasks" />
              </ListGroup>
              <Button size="default" type="secondary">
                Get Started
              </Button>
            </PricingCard>
          </Col>
          <Col xxl={6} lg={8} sm={12} xs={24}>
            <PricingCard style={{ marginBottom: 30 }}>
              <Badge className="pricing-badge" type="success">Enterprise</Badge>
              <Heading className="price-amount" as="h3">
                <sup className="currency">$</sup>79 <sub className="pricing-validity">Per month</sub>
              </Heading>
              <span className="package-user-type">For 50 Users</span>
              <ListGroup>
                <List text="100GB File Space" />
                <List text="300 Projects" />
                <List text="Limited Boards" />
                <List text="Basic Project Management" />
                <List text="Custom Post Types" />
                <List text="Subtasks" />
              </ListGroup>
              <Button size="default" type="success">
                Get Started
              </Button>
            </PricingCard>
          </Col>
        </Row>
        <Row gutter={25}>
          <Col xs={24}>
            <Cards headless>
              <Row gutter={25} justify="center">
                <Col xxl={6} lg={8} sm={12} xs={24}>
                  <PricingCard style={{ marginBottom: 30 }}>
                    <Badge className="pricing-badge" type="dark">Free Forever</Badge>
                    <Heading className="price-amount" as="h3">
                      Free
                    </Heading>
                    <span className="package-user-type">For Individuals</span>
                    <ListGroup>
                      <List text="100MB File Space" />
                      <List text="2 Active Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                    </ListGroup>
                    <Button size="default" type="white">
                      Current Plan
                    </Button>
                  </PricingCard>
                </Col>
                <Col xxl={6} lg={8} sm={12} xs={24}>
                  <PricingCard style={{ marginBottom: 30 }}>
                    <Badge className="pricing-badge" type="primary">Basic Plan</Badge>
                    <Heading as="h3">
                      <sup className="currency">$</sup> 19 <sub className="pricing-validity">Per month</sub>
                    </Heading>
                    <span className="package-user-type">For 2 Users</span>
                    <ListGroup>
                      <List text="100GB File Space" />
                      <List text="300 Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                      <List text="Custom Post Types" />
                    </ListGroup>
                    <Button size="default" type="primary">
                      Get Started
                    </Button>
                  </PricingCard>
                </Col>
                <Col xxl={6} lg={8} sm={12} xs={24}>
                  <PricingCard style={{ marginBottom: 30 }}>
                    <Badge className="pricing-badge" type="secondary">Business</Badge>
                    <Heading as="h3">
                      <sup className="currency">$</sup>39 <sub className="pricing-validity">Per month</sub>
                    </Heading>
                    <span className="package-user-type">For 10 Users</span>

                    <ListGroup>
                      <List text="100GB File Space" />
                      <List text="300 Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                      <List text="Custom Post Types" />
                      <List text="Subtasks" />
                    </ListGroup>
                    <Button size="default" type="secondary">
                      Get Started
                    </Button>
                  </PricingCard>
                </Col>
                <Col xxl={6} lg={8} sm={12} xs={24}>
                  <PricingCard>
                    <Badge className="pricing-badge" type="success">Enterprise</Badge>
                    <Heading as="h3">
                      <sup className="currency">$</sup>79 <sub className="pricing-validity">Per month</sub>
                    </Heading>
                    <span className="package-user-type">For 50 Users</span>
                    <ListGroup>
                      <List text="100GB File Space" />
                      <List text="300 Projects" />
                      <List text="Limited Boards" />
                      <List text="Basic Project Management" />
                      <List text="Custom Post Types" />
                      <List text="Subtasks" />
                    </ListGroup>
                    <Button size="default" type="success">
                      Get Started
                    </Button>
                  </PricingCard>
                </Col>
              </Row>
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default PricingTable;
