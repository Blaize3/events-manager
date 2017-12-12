import HandleUserRequest from '../controllers/userController';

import DoAuthentication from '../controllers/middlewares/auth';

export default (app) => {
  app.post('/api/v1/users', HandleUserRequest.signup);

  app.post('/api/v1/users/login', HandleUserRequest.signin);

  app.put('/api/v1/users/password', DoAuthentication.isAuthenticated, HandleUserRequest.resetPassword);
};
