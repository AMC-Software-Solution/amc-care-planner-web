import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import AccessLogs from './overview/AccessLogs';
import Branch from './overview/Branches';
import Communication from './overview/Communications';
import Device from './overview/Devices';
import Document from './overview/Documents';
import General from './overview/General';
import Holiday from './overview/Holidays';
import Location from './overview/Location';
import Notification from './overview/Notifications';
import Task from './overview/Tasks';
import Timesheet from './overview/Timesheet';

import { getAllTimesheets } from '../../../redux/timesheet/actionCreator';
import { getAllTasks } from '../../../redux/tasks/actionCreator';
import { getSingleEmployeeLocation } from '../../../redux/employeeLocation/actionCreator';
import { getAllHolidays } from '../../../redux/ holidays/actionCreator';
import { getSingleBranch } from '../../../redux/branch/actionCreator';
import { getAllDocuments } from '../../../redux/documents/actionCreator';
import { getAllCommunications } from '../../../redux/communications/actionCreator';

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
