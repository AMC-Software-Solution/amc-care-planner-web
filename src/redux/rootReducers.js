import { combineReducers } from 'redux';
import themeUsersReducer from './themeUsers/reducers';
import { readMessageReducer } from './message/reducers';
import authReducer from './authentication/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import { teamReducer } from './team/reducers';
import { userReducer, userGroupReducer } from './users/reducers';
import { sellersReducer } from './sellers/reducers';
import { headerSearchReducer } from './headerSearch/reducers';
import orderReducer from './orders/reducers';
import galleryReducer from './gallary/reducers';
import chartContentReducer from './chartContent/reducers';
import { emailReducer, SingleEmailReducer } from './email/reducers';
import { productReducer, SingleProductReducer } from './product/reducers';
import { chatReducer, SingleChatReducer, groupChatReducer, SingleChatGroupReducer } from './chat/reducers';
import { projectReducer, SingleProjectReducer } from './project/reducers';
import cartData from './cart/reducers';
import Todo from './todo/reducers';
import Note from './note/reducers';
import Contact from './contact/reducers';
import Profile from './profile/reducers';
import Calender from './calendar/reducers';
import FileManager from './fileManager/reducers';
import { countryReducer, SingleCountryReducer } from './countries/reducers';
import { disabilityReducer, SingleDisabilityReducer } from './disabilities/reducers';
import { eligibilityReducer, SingleEligibilityReducer } from './eligibilities/reducers';
import { availabilityReducer, SingleAvailabilityReducer } from './availabilities/reducers';
import kanbanBoardReducer from './kanban/reducers';
import { holidaysReducer, SingleHolidayReducer } from '../container/employees/employee/holiday/redux/reducers';
import {
  SingleEmployeeLocationReducer,
  employeeLocationReducer,
} from '../container/employees/employee/location/redux/reducers';
import { timesheetsReducer, SingleTimesheetReducer } from '../container/employees/employee/timesheet/redux/reducers';
import { deviceReducer, SingleDeviceReducer } from '../container/employees/employee/device/redux/reducers';
import { documentsReducer, SingleDocumentReducer } from '../container/employees/employee/document/redux/reducers';
import { singleServiceUserReducer, serviceUsersReducer } from '../container/service-users/redux/reducers';

import {
  communicationsReducer,
  SingleCommunicationReducer,
} from '../container/employees/employee/communication/redux/reducers';
import { tasksReducer, SingleTaskReducer } from '../container/employees/employee/task/redux/reducers';
import { branchReducer, singleBranchReducer } from '../container/employees/employee/branch/redux/reducers';
import { employeeReducer, singleEmployeeReducer } from '../container/employees/redux/reducers';
import { readNotificationReducer } from '../container/employees/employee/notification/redux/reducers';

const rootReducers = combineReducers({
  themeUsers: themeUsersReducer,
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
  orders: orderReducer,
  sellers: sellersReducer,
  users: userReducer,
  userGroup: userGroupReducer,
  team: teamReducer,
  auth: authReducer,
  gallery: galleryReducer,
  email: emailReducer,
  emailSingle: SingleEmailReducer,
  products: productReducer,
  product: SingleProductReducer,
  chatSingle: SingleChatReducer,
  chatSingleGroup: SingleChatGroupReducer,
  chat: chatReducer,
  groupChat: groupChatReducer,
  projects: projectReducer,
  project: SingleProjectReducer,
  ChangeLayoutMode,
  chartContent: chartContentReducer,
  cart: cartData,
  employees: employeeReducer,
  employee: singleEmployeeReducer,
  branches: branchReducer,
  branch: singleBranchReducer,
  countries: countryReducer,
  country: SingleCountryReducer,
  tasks: tasksReducer,
  task: SingleTaskReducer,
  eligibilties: eligibilityReducer,
  eligibility: SingleEligibilityReducer,
  availabilities: availabilityReducer,
  availability: SingleAvailabilityReducer,
  employeeLocations: employeeLocationReducer,
  employeeLocation: SingleEmployeeLocationReducer,
  holidays: holidaysReducer,
  holiday: SingleHolidayReducer,
  documents: documentsReducer,
  document: SingleDocumentReducer,
  timesheets: timesheetsReducer,
  timesheet: SingleTimesheetReducer,
  devices: deviceReducer,
  device: SingleDeviceReducer,
  communications: communicationsReducer,
  communication: SingleCommunicationReducer,
  disabilities: SingleDisabilityReducer,
  disability: disabilityReducer,
  KanbanBoard: kanbanBoardReducer,
  serviceUser: singleServiceUserReducer,
  serviceUsers: serviceUsersReducer,

  Todo,
  Note,
  Contact,
  Profile,
  Calender,
  FileManager,
});

export default rootReducers;
