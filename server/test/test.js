import request from 'supertest';
import { expect } from 'chai';
import app from '../app';

let adminToken;
let userToken1, userToken2, userToken3, userToken4;

describe('Events Manager API endpoint testing', () => {
  describe('Default test', () => {
    describe('Get /', () => {
      it('should return "Page not found!"', (done) => {
        request(app)
          .get('/')
          .expect(404)
          .end((error, response) => {
            expect(response.body).to.have.property('message');
            expect(response.status).to.equal(404);
            expect(response.body.message).to.equal('Page not found!');
            done();
          });
      });// ends it
    });// Get / describe
  });// default test describe

  describe('Sign up API endpoint test', () => {
    describe('POST /api/v1/users', () => {
      describe('Valid Case', () => {
        it('should return "201 status and User account has been created."', (done) => {
          const userObject = {
            email: 'akugbeode@yahoo.com',
            username: 'blaize3',
            password: 'Passw0rd1$#$@Cool',
            lastname: 'Ode',
            firstname: 'Akugbe',
            sex: 'male',
          };
          request(app)
            .post('/api/v1/users')
            .send(userObject)
            .expect(201)
            .end((error, response) => {
              userToken1 = response.body.token;
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('password strenght');
              expect(response.body).to.have.property('account details');
              expect(response.body).to.have.property('token');
              expect(response.body['account details']).to.have.property('email');
              expect(response.body['account details']).to.have.property('username');
              expect(response.body['account details']).to.have.property('firstname');
              expect(response.body['account details']).to.have.property('lastname');
              expect(response.body['account details']).to.have.property('sex');
              expect(response.body['account details']).to.have.property('role');
              expect(response.status).to.equal(201);
              expect(response.body.message).to.equal('User account has been created.');
              expect(response.body['password strenght']).to.equal('Password is very Strong.');
              done();
            });
        });// ends it
        it('should return "201 status and User account has been created."', (done) => {
          const userObject = {
            email: 'kingsly2000ng@gmail.com',
            username: 'kingsly200',
            password: 'passwordss',
            lastname: 'Kingsley',
            firstname: 'Nwaigwe',
            sex: 'male',
          };
          request(app)
            .post('/api/v1/users')
            .send(userObject)
            .expect(201)
            .end((error, response) => {
              userToken2 = response.body.token;
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('password strenght');
              expect(response.body).to.have.property('account details');
              expect(response.body).to.have.property('token');
              expect(response.body['account details']).to.have.property('email');
              expect(response.body['account details']).to.have.property('username');
              expect(response.body['account details']).to.have.property('firstname');
              expect(response.body['account details']).to.have.property('lastname');
              expect(response.body['account details']).to.have.property('sex');
              expect(response.body['account details']).to.have.property('role');
              expect(response.status).to.equal(201);
              expect(response.body.message).to.equal('User account has been created.');
              expect(response.body['password strenght']).to.equal('Password is very Weak. Update password to ensure better security.');
              done();
            });
        });// ends it
        it('should return "201 status and User account has been created."', (done) => {
          const userObject = {
            email: 'nwaigwegrant@yahoo.com',
            username: 'zargrantus',
            password: 'Passwordss',
            lastname: 'Grant',
            firstname: 'Nwaigwe',
            sex: 'male',
          };
          request(app)
            .post('/api/v1/users')
            .send(userObject)
            .expect(201)
            .end((error, response) => {
              userToken3 = response.body.token;
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('password strenght');
              expect(response.body).to.have.property('account details');
              expect(response.body).to.have.property('token');
              expect(response.body['account details']).to.have.property('email');
              expect(response.body['account details']).to.have.property('username');
              expect(response.body['account details']).to.have.property('firstname');
              expect(response.body['account details']).to.have.property('lastname');
              expect(response.body['account details']).to.have.property('sex');
              expect(response.body['account details']).to.have.property('role');
              expect(response.status).to.equal(201);
              expect(response.body.message).to.equal('User account has been created.');
              expect(response.body['password strenght']).to.equal('Password is Weak. Update password to ensure better security.');
              done();
            });
        });// ends it
        it('should return "201 status and User account has been created."', (done) => {
          const userObject = {
            email: 'nnenaosuagwu@yahoo.com',
            username: 'ninapink1',
            password: 'Passw0rdss',
            lastname: 'Nnena',
            firstname: 'Osuagwu',
            sex: 'female',
          };
          request(app)
            .post('/api/v1/users')
            .send(userObject)
            .expect(201)
            .end((error, response) => {
              userToken4 = response.body.token;
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('password strenght');
              expect(response.body).to.have.property('account details');
              expect(response.body).to.have.property('token');
              expect(response.body['account details']).to.have.property('email');
              expect(response.body['account details']).to.have.property('username');
              expect(response.body['account details']).to.have.property('firstname');
              expect(response.body['account details']).to.have.property('lastname');
              expect(response.body['account details']).to.have.property('sex');
              expect(response.body['account details']).to.have.property('role');
              expect(response.status).to.equal(201);
              expect(response.body.message).to.equal('User account has been created.');
              expect(response.body['password strenght']).to.equal('Password is Strong. Update password to ensure better security.');
              done();
            });
        });// ends it
      });// Valid Case
      describe('Invalid Case', () => {
        it('should return "400 status and 6 user input fields failed to validate." sending an empty object', (done) => {
          request(app)
            .post('/api/v1/users')
            .send({})
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('email');
              expect(response.body.Details).to.have.property('username');
              expect(response.body.Details).to.have.property('password');
              expect(response.body.Details).to.have.property('firstname');
              expect(response.body.Details).to.have.property('lastname');
              expect(response.body.Details).to.have.property('sex');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('6 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 6 user input fields failed to validate." sending an object with invalid type', (done) => {
          request(app)
            .post('/api/v1/users')
            .send({
              email: 1,
              username: 1,
              password: 1,
              lastname: 1,
              firstname: 1,
              sex: 1,
            })
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('email');
              expect(response.body.Details).to.have.property('username');
              expect(response.body.Details).to.have.property('password');
              expect(response.body.Details).to.have.property('firstname');
              expect(response.body.Details).to.have.property('lastname');
              expect(response.body.Details).to.have.property('sex');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('6 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 6 user input fields failed to validate." sending an object that fail regular expression test', (done) => {
          request(app)
            .post('/api/v1/users')
            .send({
              email: 'johnjohn',
              username: ';##$%%^',
              password: ';##',
              lastname: ';##$%%^',
              firstname: ';##$%%^',
              sex: ';##$%%^',
            })
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('email');
              expect(response.body.Details).to.have.property('username');
              expect(response.body.Details).to.have.property('password');
              expect(response.body.Details).to.have.property('firstname');
              expect(response.body.Details).to.have.property('lastname');
              expect(response.body.Details).to.have.property('sex');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('6 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 6 user input fields failed to validate." sending an object with invalid word length', (done) => {
          request(app)
            .post('/api/v1/users')
            .send({
              email: 'j',
              username: 'c',
              password: 'd',
              lastname: 'b',
              firstname: 'a',
              sex: 'mal',
            })
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('email');
              expect(response.body.Details).to.have.property('username');
              expect(response.body.Details).to.have.property('password');
              expect(response.body.Details).to.have.property('firstname');
              expect(response.body.Details).to.have.property('lastname');
              expect(response.body.Details).to.have.property('sex');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('6 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "403 status and Email and Username already exist." sending email and username that already exist', (done) => {
          request(app)
            .post('/api/v1/users')
            .send({
              email: 'nnenaosuagwu@yahoo.com',
              username: 'ninapink1',
              password: 'Passw0rdss',
              lastname: 'Nnena',
              firstname: 'Osuagwu',
              sex: 'female',
            })
            .expect(403)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('help');
              expect(response.status).to.equal(403);
              expect(response.body.message).to.equal('Email and Username already exist.');
              expect(response.body.help).to.equal('Change Email and Username fields and submit the form to create account.');
              done();
            });
        });// ends it
        it('should return "403 status and Email already exist." sending email that already exist', (done) => {
          request(app)
            .post('/api/v1/users')
            .send({
              email: 'nnenaosuagwu@yahoo.com',
              username: 'ninapink122',
              password: 'Passw0rdss',
              lastname: 'Nnena',
              firstname: 'Osuagwu',
              sex: 'female',
            })
            .expect(403)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('help');
              expect(response.status).to.equal(403);
              expect(response.body.message).to.equal('Email already exist.');
              expect(response.body.help).to.equal('Change Email field and submit the form to create account.');
              done();
            });
        });// ends it
        it('should return "403 status and Username already exist." sending username that already exist', (done) => {
          request(app)
            .post('/api/v1/users')
            .send({
              email: 'cutennenaosuagwu@yahoo.com',
              username: 'ninapink1',
              password: 'Passw0rdss',
              lastname: 'Nnena',
              firstname: 'Osuagwu',
              sex: 'female',
            })
            .expect(403)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('help');
              expect(response.status).to.equal(403);
              expect(response.body.message).to.equal('Username already exist.');
              expect(response.body.help).to.equal('Change Username field and submit the form to create account.');
              done();
            });
        });// ends it
      });// Invalid Case
    });// POST / api / v1 / users
  });// Sign Up API endpoint test
  describe('Sign In API endpoint test', () => {
    describe('POST /api/v1/users/login', () => {
      describe('Valid Case', () => {
        it('should return "200 status and User 1 has been sign in successfully." sending valid Email and Password', (done) => {
          const signinObject = {
            emailUsername: 'trailblaizer34@gmail.com',
            password: 'password'
          };
          request(app)
            .post('/api/v1/users/login')
            .send(signinObject)
            .expect(200)
            .end((error, response) => {
              adminToken = response.body.token;
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('account details');
              expect(response.body).to.have.property('token');
              expect(response.body['account details']).to.have.property('email');
              expect(response.body['account details']).to.have.property('username');
              expect(response.body['account details']).to.have.property('firstname');
              expect(response.body['account details']).to.have.property('lastname');
              expect(response.body['account details']).to.have.property('sex');
              expect(response.body['account details']).to.have.property('role');
              expect(response.status).to.equal(200);
              expect(response.body.message).to.equal('User 1 has been sign in successfully.');
              done();
            });
        });// ends it
      });// Valid Case
      describe('Invalid Case', () => {
        it('should return "401 status and Sign in failed: Invalid Email or Username." sending invalid email', (done) => {
          const signinObject = {
            emailUsername: 'trailblaizer',
            password: ''
          };
          request(app)
            .post('/api/v1/users/login')
            .send(signinObject)
            .expect(401)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.status).to.equal(401);
              expect(response.body.message).to.equal('Sign in failed: Invalid Email or Username.');
              done();
            });
        });// ends it
        it('should return "401 status and Sign in failed: Invalid Email or Username." sending invalid Password', (done) => {
          const signinObject = {
            emailUsername: 'trailblaizer34@gmail.com',
            password: 'hgfhg'
          };
          request(app)
            .post('/api/v1/users/login')
            .send(signinObject)
            .expect(401)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.status).to.equal(401);
              expect(response.body.message).to.equal('Sign in failed: Invalid Password.');
              done();
            });
        });// ends it
        it('should return "401 status and Sign in failed: Invalid Email or Username." sending an empty sign in object', (done) => {
          const signinObject = {};
          request(app)
            .post('/api/v1/users/login')
            .send(signinObject)
            .expect(401)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.status).to.equal(401);
              expect(response.body.message).to.equal('Sign in failed: Invalid Email or Username.');
              done();
            });
        });// ends it
      });// Invalid Case
    });// POST /api/v1/users/login
  });// Sign In API endpoint test
  describe('Change Password API endpoint test', () => {
    describe('PUT /api/v1/users/password', () => {
      describe('Valid Case', () => {
        it('should return "200 status and User 1 has successfully changed his password." sending valid new password data', (done) => {
          const passwordResetObject = {
            newPassword: 'Password@1'
          };
          request(app)
            .put('/api/v1/users/password')
            .set('x-access-token', adminToken)
            .send(passwordResetObject)
            .expect(200)
            .end((error, response) => {
              expect(response.body).to.have.property('Password Change was Successful');
              expect(response.body).to.have.property('password strenght');
              expect(response.status).to.equal(200);
              expect(response.body['Password Change was Successful']).to.equal('User 1 has successfully changed his password.');
              expect(response.body['password strenght']).to.equal('Password is very Strong.');
              done();
            });
        });// ends it
      });// Valid Case
      describe('Invalid Cases', () => {
        it('should return "400 status and 1 user input field failed to validate." sending empty new password data', (done) => {
          const passwordResetObject = {};
          request(app)
            .put('/api/v1/users/password')
            .set('x-access-token', adminToken)
            .send(passwordResetObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('password');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('1 user input field failed to validate.');
              expect(response.body.Details.password).to.equal('New password field cannot be empty.');
              done();
            });
        });// ends it
        it('should return "400 status and 1 user input field failed to validate." sending new password data with invalid length', (done) => {
          const passwordResetObject = {
            newPassword: 'pas'
          };
          request(app)
            .put('/api/v1/users/password')
            .set('x-access-token', adminToken)
            .send(passwordResetObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('password');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('1 user input field failed to validate.');
              expect(response.body.Details.password).to.equal('New password field length cannot be less than 8 characters.');
              done();
            });
        });// ends it
        it('should return "400 status and 1 user input field failed to validate." sending number type as data', (done) => {
          const passwordResetObject = {
            newPassword: 1
          };
          request(app)
            .put('/api/v1/users/password')
            .set('x-access-token', adminToken)
            .send(passwordResetObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('password');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('1 user input field failed to validate.');
              expect(response.body.Details.password).to.equal('New password field must be of type string.');
              done();
            });
        });// ends it
        it('should return "401 status and Access denied." sending valid new password data without token', (done) => {
          const passwordResetObject = {
            newPassword: 'password'
          };
          request(app)
            .put('/api/v1/users/password')
            .set('x-access-token', '')
            .send(passwordResetObject)
            .expect(401)
            .end((error, response) => {
              expect(response.body).to.have.property('Authentication failed');
              expect(response.status).to.equal(401);
              expect(response.body['Authentication failed']).to.equal('Access denied.');
              done();
            });
        });// ends it
      });// Invalid Cases
    });// PUT /api/v1/users/password
  });// Change Password API endpoint test
});// Main describe
