import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'antd';
import { Cards } from '../../../components/cards/frame/cards-frame';

const Branch = () => {
  const { branches } = useSelector(state => {
    return {
      branches: state.branches.data,
    };
  });

  const branchList = () => {
    if (branches) {
      branches.map(branch => {
        const { id, name, address, telephone, lastUpdatedDate, clientId, clientClientName } = branch;
        return (
          <div className="card user-card">
            <Col span={6} style={{ display: 'flex' }}>
              <Cards headless>
                <div className="card__content">
                  <p className="card__designation">
                    Name: <b>{name}</b>
                  </p>
                  <p className="card__designation">
                    Branch ID : <b>{id}</b>
                  </p>
                  <p className="card__designation">
                    Address : <b>{address}</b>
                  </p>
                  <p className="card__designation">
                    Client ID : <b>{clientId}</b>
                  </p>
                  <p className="card__designation">
                    Client Name : <b>{clientClientName}</b>
                  </p>
                  <p className="card__designation">
                    Telephone Number : <b>{telephone}</b>
                  </p>
                  <p className="card__designation">
                    Last Updated : <b>{lastUpdatedDate}</b>
                  </p>
                </div>
              </Cards>
            </Col>
          </div>
        );
      });
    }
  };
  return <Cards headless>{branchList}</Cards>;
};

export default Branch;
