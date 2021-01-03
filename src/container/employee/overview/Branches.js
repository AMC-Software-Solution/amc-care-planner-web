import React from 'react';
import { Cards } from '../../../components/cards/frame/cards-frame';

const Branch = branches => {
  const { id, name, address, telephone, lastUpdatedDate, clientId, clientClientName } = branches;
  return (
    <div className="card user-card">
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
    </div>
  );
};

// Branch.propTypes = {
//   branches: PropTypes.object,
// };

export default Branch;
