import { combineReducers } from 'redux';
import themeUsersReducer from './themeUsers/reducers';
import { readMessageReducer } from './message/reducers';
import { readNotificationReducer } from './notification/reducers';
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
import { employeeReducer, singleEmployeeReducer } from './employees/reducers';
import { countryReducer, SingleCountryReducer } from './countries/reducers';
import { tasksReducer, SingleTasksReducer } from './tasks/reducers';
import { eligibilityReducer, SingleEligibilityReducer } from './eligibilities/reducers';
import { availabilityReducer, SingleAvailabilityReducer } from './availabilities/reducers';
import { employeeLocationReducer, SingleEmployeeLocationReducer } from './employeeLocation/reducers';
import { employeeHolidayReducer, SingleEmployeeHolidayReducer } from './employeeHoliday/reducers';





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
  countries: countryReducer,
  country: SingleCountryReducer,
  tasks: tasksReducer,
  tasks: SingleTasksReducer,
  eligibilties: eligibilityReducer,
  eligibility: SingleEligibilityReducer,
  availabilities: availabilityReducer,
  availability: SingleAvailabilityReducer,
  employeeLocations: employeeLocationReducer,
  employeeLocation: SingleEmployeeLocationReducer,
  employeeHolidays: employeeHolidayReducer,
  employeeHoliday: SingleEmployeeHolidayReducer,
 

  Todo,
  Note,
  Contact,
  Profile,
  Calender,
  FileManager,
});

export default rootReducers;
