import HandleUserRequest from '../controllers/userController';
import HandleCenterRequests from '../controllers/centerController';

import DoAuthentication from '../controllers/middlewares/auth';

export default (app) => {
  app.post('/api/v1/users', HandleUserRequest.signup);

  app.post('/api/v1/users/login', HandleUserRequest.signin);

  app.post('/api/v1/centers', DoAuthentication.isAuthenticated, HandleCenterRequests.addCenter);

  app.get('/api/v1/centers', DoAuthentication.isAuthenticated, HandleCenterRequests.getAllCenters);

  app.get('/api/v1/centers/:centerId', DoAuthentication.isAuthenticated, HandleCenterRequests.getACenter);

  app.put('/api/v1/users/password', DoAuthentication.isAuthenticated, HandleUserRequest.resetPassword);

  app.put('/api/v1/users/admin', DoAuthentication.isAuthenticated, HandleUserRequest.makeAdmin);

  app.put('/api/v1/centers/:centerId', DoAuthentication.isAuthenticated, HandleCenterRequests.modifyCenter);
};
