import React, { useState } from 'react';
import { Row, Col, DatePicker } from 'antd';
import FeatherIcon from 'feather-icons-react';
import moment from 'moment';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, DatePickerWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { DateRangePickerOne, CustomDateRange } from '../../components/datePicker/datePicker';
import { Button } from '../../components/buttons/buttons';
import { ShareButtonPageHeader } from '../../components/buttons/share-button/share-button';
import { ExportButtonPageHeader } from '../../components/buttons/export-button/export-button';
import { CalendarButtonPageHeader } from '../../components/buttons/calendar-button/calendar-button';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const DatePickers = () => {
  const [state, setstate] = useState({
    date: null,
    dateString: null,
  });
  const onChange = (date, dateString) => {
    setstate({ ...state, date, dateString });
  };

  return (
    <>
      <PageHeader
        title="Date Picker"
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
          <Col md={12}>
            <Cards title="Basic">
              <DatePickerWrapper>
                <DatePicker onChange={onChange} />
                <br />
                <MonthPicker onChange={onChange} placeholder="Select month" />
                <br />
                <RangePicker onChange={onChange} />
                <br />
                <WeekPicker onChange={onChange} placeholder="Select week" />
              </DatePickerWrapper>
            </Cards>

            <Cards title="Date Format">
              <DatePickerWrapper>
                <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                <br />
                <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                <br />
                <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
                <br />
                <RangePicker
                  defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                  format={dateFormat}
                />
              </DatePickerWrapper>
            </Cards>

            <Cards title="Disabled">
              <DatePickerWrapper>
                <DatePicker defaultValue={moment('2015-06-06', dateFormat)} disabled />
                <br />
                <MonthPicker defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
                <br />
                <RangePicker
                  defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
                  disabled
                />
              </DatePickerWrapper>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Preset Ranges">
              <DatePickerWrapper>
                <RangePicker
                  ranges={{
                    Today: [moment(), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                  }}
                  onChange={onChange}
                />
                <br />
                <RangePicker
                  ranges={{
                    Today: [moment(), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                  }}
                  showTime
                  format="YYYY/MM/DD HH:mm:ss"
                  onChange={onChange}
                />
              </DatePickerWrapper>
            </Cards>

            <Cards title="Extra Footer">
              <DatePickerWrapper>
                <DatePicker renderExtraFooter={() => 'extra footer'} />
                <br />
                <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
                <br />
                <RangePicker renderExtraFooter={() => 'extra footer'} />
                <br />
                <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
                <br />
                <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
              </DatePickerWrapper>
            </Cards>
          </Col>

          <Col md={12}>
            <Cards headless title="Custom Date Range" caption="The simplest use of Date picker">
              <CustomDateRange />
            </Cards>
          </Col>
          <Col xxl={16} md={20} xs={24}>
            <Cards headless title="Date Range" caption="The simplest use of Date picker">
              <DateRangePickerOne />
            </Cards>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default DatePickers;
