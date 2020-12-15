/**
 * It's suggested to configure the RESTful endpoints in this file
 * so that there is only one source of truth, future update of endpoints
 * could be done from here without refactoring on multiple places throughout the app
 */
const API = {
  auth: {
    login: '/login',
    signUp: '/signup',
    authenticate: '/authenticate',
  },
};

export  default API ;
