import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import AccessLogs from './access-logs/AccessLogs';
import Branch from './branch/Branches';
import Communication from './communication/Communications';
import Device from './device/Devices';
import Document from './document/Documents';
import General from './general/General';
import Holiday from './holiday/Holidays';
import Location from './location/Location';
import Notification from './notification/Notifications';
import Task from './task/Tasks';
import Timesheet from './timesheet/Timesheet';

import { getAllTimesheets } from './timesheet/redux/actionCreator';
import { getAllTasks } from './task/redux/actionCreator';
import { getSingleEmployeeLocation } from './location/redux/actionCreator';
import { getAllHolidays } from './holiday/redux/actionCreator';
import { getSingleBranch } from './branch/redux/actionCreator';
import { getAllDocuments } from './document/redux/actionCreator';
import { getAllCommunications } from './communication/redux/actionCreator';

const EmployeeTabsContainer = () => {
  const { employeeId, id } = useParams();
  const dispatch = useDispatch();

  const { communications, documents, branch, holidays, employeeLocation, tasks, timesheets } = useSelector(state => {
    return {
      searchData: state.headerSearchData,
      communications: state.communications.data,
      documents: state.documents.data,
      branch: state.branch.data,
      holidays: state.holidays.data,
      employeeLocation: state.employeeLocation.data,
      tasks: state.tasks.data,
      timesheets: state.timesheets.data,
    };
  });

  useEffect(() => {
    dispatch(getAllCommunications(employeeId));
    dispatch(getAllDocuments(employeeId));
    dispatch(getSingleBranch(id));
    dispatch(getAllHolidays(employeeId));
    dispatch(getSingleEmployeeLocation(id));
    dispatch(getAllTasks(employeeId));
    dispatch(getAllTimesheets(employeeId));
  }, [dispatch, employeeId, id]);

  return (
    <>
      <Branch props={branch} />
      <AccessLogs />
      <Communication props={communications} />
      <Device />
      <Document props={documents} />
      <General props={branch} />
      <Holiday props={holidays} />
      <Location props={employeeLocation} />
      <Notification />
      <Task props={tasks} />
      <Timesheet props={timesheets} />
    </>
  );
};

export default EmployeeTabsContainer;
