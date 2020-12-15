import React from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { SalesTargetWrap } from '../../style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import HalfProgressBar from '../../../../components/utilities/progressBar';

const moreContent = (
  <>
    <Link to="#">
      <FeatherIcon size={16} icon="printer" />
      <span>Printer</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="book-open" />
      <span>PDF</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="file-text" />
      <span>Google Sheets</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="x" />
      <span>Excel (XLSX)</span>
    </Link>
    <Link to="#">
      <FeatherIcon size={16} icon="file" />
      <span>CSV</span>
    </Link>
  </>
);

const SalesTarget = () => {
  return (
    <SalesTargetWrap>
      <Cards more={moreContent} title="Monthly Sales Target">
        <div className="target-progressbar-wrap">
          <HalfProgressBar percent={80} />
        </div>
        <div className="s-target-list d-flex justify-content-between">
          <div className="s-target-list__item target-revinue">
            <h2>$5,870</h2>
            <p>Revenue</p>
          </div>
          <div className="s-target-list__item">
            <h2>$7,870</h2>
            <p>Target</p>
          </div>
        </div>
      </Cards>
    </SalesTargetWrap>
  );
};

export default SalesTarget;
