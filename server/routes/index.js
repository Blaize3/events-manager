import HandleUserRequest from '../controllers/userController';

export default (app) => {
  app.post('/api/v1/users', HandleUserRequest.signup);
};
