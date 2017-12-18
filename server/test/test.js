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

    describe('Post /', () => {
      it('should return "Page not found!"', (done) => {
        request(app)
          .post('/')
          .expect(404)
          .end((error, response) => {
            expect(response.body).to.have.property('message');
            expect(response.status).to.equal(404);
            expect(response.body.message).to.equal('Page not found!');
            done();
          });
      });// ends it
    });// Post / describe

    describe('Put /', () => {
      it('should return "Page not found!"', (done) => {
        request(app)
          .put('/')
          .expect(404)
          .end((error, response) => {
            expect(response.body).to.have.property('message');
            expect(response.status).to.equal(404);
            expect(response.body.message).to.equal('Page not found!');
            done();
          });
      });// ends it
    });// Put / describe

    describe('Delete /', () => {
      it('should return "Page not found!"', (done) => {
        request(app)
          .delete('/')
          .expect(404)
          .end((error, response) => {
            expect(response.body).to.have.property('message');
            expect(response.status).to.equal(404);
            expect(response.body.message).to.equal('Page not found!');
            done();
          });
      });// ends it
    });// Delete / describe
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
  describe('Create Admin User API endpoint test', () => {
    describe('PUT /api/v1/users/admin', () => {
      describe('Valid Case', () => {
        it('should return "200 status and User 2 was successfully made an admin user." sending akugbeode@yahoo.com as the user\'s email', (done) => {
          request(app)
            .put('/api/v1/users/admin')
            .set('x-access-token', adminToken)
            .send({ email: 'akugbeode@yahoo.com' })
            .expect(200)
            .end((error, response) => {
              expect(response.body).to.have.property('Admin User Created');
              expect(response.status).to.equal(200);
              expect(response.body['Admin User Created']).to.equal('User 2 was successfully made an admin user.');
              done();
            });
        });// ends it
      });// Valid Case
      describe('Invalid Case', () => {
        it('should return "401 status and User 5 is not authorized to create privileged Users." using ordinary user', (done) => {
          request(app)
            .put('/api/v1/users/admin')
            .set('x-access-token', userToken4)
            .send({ email: 'akugbeode@yahoo.com' })
            .expect(401)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.status).to.equal(401);
              expect(response.body.message).to.equal('User 5 is not authorized to create privileged Users');
              done();
            });
        });// ends it
        it('should return "404 status and User accont not found." sending ode-igh@yahoo.com as the user\'s email', (done) => {
          request(app)
            .put('/api/v1/users/admin')
            .set('x-access-token', adminToken)
            .send({ email: 'ode-igh@yahoo.com' })
            .expect(404)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.status).to.equal(404);
              expect(response.body.message).to.equal('User accont not found.');
              done();
            });
        });// ends it
        it('should return "400 status and 1 user input field failed to validate." sending empty email', (done) => {
          request(app)
            .put('/api/v1/users/admin')
            .set('x-access-token', adminToken)
            .send({})
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('email');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('1 user input field failed to validate.');
              expect(response.body.Details.email).to.equal('User email field cannot be empty.');
              done();
            });
        });// ends it
        it('should return "400 status and 1 user input field failed to validate." sending number as email', (done) => {
          request(app)
            .put('/api/v1/users/admin')
            .set('x-access-token', adminToken)
            .send({ email: 1 })
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('email');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('1 user input field failed to validate.');
              expect(response.body.Details.email).to.equal('User email field must be of type string.');
              done();
            });
        });// ends it
        it('should return "400 status and 1 user input field failed to validate." sending invalid email', (done) => {
          request(app)
            .put('/api/v1/users/admin')
            .set('x-access-token', adminToken)
            .send({ email: 'jayIshaya' })
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('email');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('1 user input field failed to validate.');
              expect(response.body.Details.email).to.equal('Invalid email. use this snytax: you@domain.com');
              done();
            });
        });// ends it
      });// Invalid Case
    });// PUT /api/v1/users/admin
  });// Create Admin User API endpoint test
  describe('Create Center API enpoint test', () => {
    describe('POST /api/v1/centers', () => {
      describe('Valid Cases', () => {
        it('should return "201 status and Center has been created."', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
            facilityName: 'large hall',
            hasProjectors: 'true',
            numOfProjectors: 5,
            hasChairs: 'true',
            numOfChairs: 5000,
            hasTables: 'true',
            numOfTables: 1250,
            hasToilets: 'true',
            numOfToilets: 100,
            descriptionFacility: '',
            facilityId: 1,
            centerName: 'La posh garden',
            address: '122 VGC lagos island,',
            location: 'lagos state, nigeria.',
            centerCategory: 'garden',
            capacity: 5000,
            usageFee: 50000,
            createdBy: 'ode akugbe',
            description: ''
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(201)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body).to.have.property('Other Information');
              expect(response.body.Details).to.have.property('Center Id');
              expect(response.body.Details).to.have.property('Facility Id');
              expect(response.body.Details).to.have.property('Center name');
              expect(response.body.Details).to.have.property('Center address');
              expect(response.body.Details).to.have.property('Center location');
              expect(response.body.Details).to.have.property('Center category');
              expect(response.body.Details).to.have.property('Usage fee');
              expect(response.body.Details).to.have.property('Created by');
              expect(response.body.Details).to.have.property('Description');
              expect(response.status).to.equal(201);
              expect(response.body.message).to.equal('Center has been created.');
              expect(response.body['Other Information']).to.equal('Facility 1 was also created.');
              done();
            });
        });// ends it
        it('should return "201 status and Center has been created."', (done) => {
          const centerObject = {
            isFacilityExisting: 'true',
            facilityName: 'large hall',
            hasProjectors: 'true',
            numOfProjectors: 5,
            hasChairs: 'true',
            numOfChairs: 5000,
            hasTables: 'true',
            numOfTables: 1250,
            hasToilets: 'true',
            numOfToilets: 100,
            descriptionFacility: 'This facility specification is associated with large center',
            facilityId: 1,
            centerName: 'Millenium park',
            address: '123 central business district, abuja',
            location: 'fct, nigeria.',
            centerCategory: 'garden',
            capacity: 5000,
            usageFee: 50000,
            createdBy: 'ode akugbe',
            description: 'lorem ipsum dolor, sit amet consectetur...'
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(201)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('Center Id');
              expect(response.body.Details).to.have.property('Facility Id');
              expect(response.body.Details).to.have.property('Center name');
              expect(response.body.Details).to.have.property('Center address');
              expect(response.body.Details).to.have.property('Center location');
              expect(response.body.Details).to.have.property('Center category');
              expect(response.body.Details).to.have.property('Usage fee');
              expect(response.body.Details).to.have.property('Created by');
              expect(response.body.Details).to.have.property('Description');
              expect(response.status).to.equal(201);
              expect(response.body.message).to.equal('Center has been created.');
              done();
            });
        });// ends it
      });// Valid Cases
      describe('Invalid Cases', () => {
        it('should return "400 status and 1 user input field failed to validate." supplying isFacilityExisting empty field.', (done) => {
          const centerObject = {
            isFacilityExisting: '',
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('is Facility existing?');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('1 user input field failed to validate.');
              expect(response.body.Details['is Facility existing?']).to.equal('Is Facility existing field cannot be empty.');
              done();
            });
        });// ends it
        it('should return "400 status and 1 user input field failed to validate." supplying invalid isFacilityExisting field.', (done) => {
          const centerObject = {
            isFacilityExisting: 'truesss',
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.body.Details).to.have.property('is Facility existing?');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('1 user input field failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 12 user input fields failed to validate." setting isFacilityExisting field to false.', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('12 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 8 user input fields failed to validate." setting isFacilityExisting field to true.', (done) => {
          const centerObject = {
            isFacilityExisting: 'true',
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('8 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 14 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
            facilityName: 2,
            hasProjectors: 2,
            numOfProjectors: '5dd',
            hasChairs: 2,
            numOfChairs: 'jj',
            hasTables: 2,
            numOfTables: 'kk',
            hasToilets: 3,
            numOfToilets: 'll',
            descriptionFacility: 2,
            facilityId: 'hg',
            centerName: 4,
            address: 4,
            location: 7,
            centerCategory: 98,
            capacity: 'kjkhj',
            usageFee: 'hghhh',
            createdBy: 4,
            description: 8
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('14 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 9 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'true',
            facilityName: 2,
            hasProjectors: 2,
            numOfProjectors: '5dd',
            hasChairs: 2,
            numOfChairs: 'jj',
            hasTables: 2,
            numOfTables: 'kk',
            hasToilets: 3,
            numOfToilets: 'll',
            descriptionFacility: 2,
            facilityId: 'hg',
            centerName: 4,
            address: 4,
            location: 7,
            centerCategory: 98,
            capacity: 'kjkhj',
            usageFee: 'hghhh',
            createdBy: 4,
            description: 8
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('9 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 14 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
            facilityName: '@;',
            hasProjectors: '@;',
            numOfProjectors: '5dd',
            hasChairs: '@;',
            numOfChairs: 'jj',
            hasTables: '@;',
            numOfTables: 'kk',
            hasToilets: '@;',
            numOfToilets: 'll',
            descriptionFacility: '@;',
            facilityId: 'hg',
            centerName: '@;',
            address: '@;',
            location: '@;',
            centerCategory: '@;',
            capacity: 'kjkhj',
            usageFee: 'hghhh',
            createdBy: '@;',
            description: '@;'
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('14 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 9 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'true',
            facilityName: '@;',
            hasProjectors: '@;',
            numOfProjectors: '5dd',
            hasChairs: '@;',
            numOfChairs: 'jj',
            hasTables: '@;',
            numOfTables: 'kk',
            hasToilets: '@;',
            numOfToilets: 'll',
            descriptionFacility: '@;',
            facilityId: 'hg',
            centerName: '@;',
            address: '@;',
            location: '@;',
            centerCategory: '@;',
            capacity: 'kjkhj',
            usageFee: 'hghhh',
            createdBy: '@;',
            description: '@;'
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('9 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 14 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
            facilityName: 'a',
            hasProjectors: 'a',
            numOfProjectors: '5.66.88',
            hasChairs: 'a',
            numOfChairs: '5.66.88',
            hasTables: 'a',
            numOfTables: '5.66.88',
            hasToilets: 'a',
            numOfToilets: '5.66.88',
            descriptionFacility: 'a',
            facilityId: 'hg',
            centerName: 'a',
            address: 'a',
            location: 'a',
            centerCategory: 'a',
            capacity: 'kjkhj',
            usageFee: 'hghhh',
            createdBy: 'a',
            description: 'a'
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('14 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 9 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'true',
            facilityName: 'a',
            hasProjectors: 'a',
            numOfProjectors: '5.66.88',
            hasChairs: 'a',
            numOfChairs: '5.66.88',
            hasTables: 'a',
            numOfTables: '5.66.88',
            hasToilets: 'a',
            numOfToilets: '5.66.88',
            descriptionFacility: 'a',
            facilityId: 'hg',
            centerName: 'a',
            address: 'a',
            location: 'a',
            centerCategory: 'a',
            capacity: 'kjkhj',
            usageFee: 'hghhh',
            createdBy: 'a',
            description: 'a'
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('9 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 6 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
            facilityName: 'large hall',
            hasProjectors: 'true',
            numOfProjectors: 0,
            hasChairs: 'true',
            numOfChairs: 0,
            hasTables: 'true',
            numOfTables: 0,
            hasToilets: 'true',
            numOfToilets: 0,
            descriptionFacility: '',
            facilityId: 0,
            centerName: 'La posh garden',
            address: '122 VGC lagos island,',
            location: 'lagos state, nigeria.',
            centerCategory: 'garden',
            capacity: 0,
            usageFee: 0,
            createdBy: 'ode akugbe',
            description: ''
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('6 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 3 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'true',
            facilityName: 'large hall',
            hasProjectors: 'true',
            numOfProjectors: 0,
            hasChairs: 'true',
            numOfChairs: 0,
            hasTables: 'true',
            numOfTables: 0,
            hasToilets: 'true',
            numOfToilets: 0,
            descriptionFacility: 'This facility specification is associated with large center',
            facilityId: 0,
            centerName: 'Millenium park',
            address: '123 central business district, abuja',
            location: 'fct, nigeria.',
            centerCategory: 'garden',
            capacity: 0,
            usageFee: 0,
            createdBy: 'ode akugbe',
            description: 'lorem ipsum dolor, sit amet consectetur...'
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('3 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 6 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
            facilityName: 'large hall',
            hasProjectors: 'true',
            numOfProjectors: '77.87.99',
            hasChairs: 'true',
            numOfChairs: '77.87.99',
            hasTables: 'true',
            numOfTables: '77.87.99',
            hasToilets: 'true',
            numOfToilets: '77.87.99',
            descriptionFacility: '',
            facilityId: '77.87.99',
            centerName: 'La posh garden',
            address: '122 VGC lagos island,',
            location: 'lagos state, nigeria.',
            centerCategory: 'garden',
            capacity: 0,
            usageFee: 0,
            createdBy: 'ode akugbe',
            description: ''
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('6 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 3 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'true',
            facilityName: 'large hall',
            hasProjectors: 'true',
            numOfProjectors: '77.87.99',
            hasChairs: 'true',
            numOfChairs: '77.87.99',
            hasTables: 'true',
            numOfTables: '77.87.99',
            hasToilets: 'true',
            numOfToilets: '77.87.99',
            descriptionFacility: 'This facility specification is associated with large center',
            facilityId: '77.87.99',
            centerName: 'Millenium park',
            address: '123 central business district, abuja',
            location: 'fct, nigeria.',
            centerCategory: 'garden',
            capacity: 0,
            usageFee: 0,
            createdBy: 'ode akugbe',
            description: 'lorem ipsum dolor, sit amet consectetur...'
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('3 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 6 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
            facilityName: 'large hall',
            hasProjectors: 'true',
            numOfProjectors: '',
            hasChairs: 'true',
            numOfChairs: '',
            hasTables: 'true',
            numOfTables: '',
            hasToilets: 'true',
            numOfToilets: '',
            descriptionFacility: '',
            facilityId: '',
            centerName: 'La posh garden',
            address: '122 VGC lagos island,',
            location: 'lagos state, nigeria.',
            centerCategory: 'garden',
            capacity: 0,
            usageFee: 0,
            createdBy: 'ode akugbe',
            description: ''
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('6 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 3 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'true',
            facilityName: 'large hall',
            hasProjectors: 'true',
            numOfProjectors: '',
            hasChairs: 'true',
            numOfChairs: '',
            hasTables: 'true',
            numOfTables: '',
            hasToilets: 'true',
            numOfToilets: '',
            descriptionFacility: 'This facility specification is associated with large center',
            facilityId: '',
            centerName: 'Millenium park',
            address: '123 central business district, abuja',
            location: 'fct, nigeria.',
            centerCategory: 'garden',
            capacity: 0,
            usageFee: 0,
            createdBy: 'ode akugbe',
            description: 'lorem ipsum dolor, sit amet consectetur...'
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('3 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "400 status and 6 user input fields failed to validate."', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
            facilityName: 'large hall',
            hasProjectors: 'false',
            numOfProjectors: 100,
            hasChairs: 'false',
            numOfChairs: 100,
            hasTables: 'false',
            numOfTables: 100,
            hasToilets: 'false',
            numOfToilets: 100,
            descriptionFacility: '',
            facilityId: 0,
            centerName: 'La posh garden',
            address: '122 VGC lagos island,',
            location: 'lagos state, nigeria.',
            centerCategory: 'garden',
            capacity: 0,
            usageFee: 0,
            createdBy: 'ode akugbe',
            description: ''
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(400)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.body).to.have.property('Details');
              expect(response.status).to.equal(400);
              expect(response.body.message).to.equal('6 user input fields failed to validate.');
              done();
            });
        });// ends it
        it('should return "403 status and facility name already exist"', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
            facilityName: 'large hall',
            hasProjectors: 'true',
            numOfProjectors: 5,
            hasChairs: 'true',
            numOfChairs: 5000,
            hasTables: 'true',
            numOfTables: 1250,
            hasToilets: 'true',
            numOfToilets: 100,
            descriptionFacility: '',
            facilityId: 1,
            centerName: 'La posh garden',
            address: '122 VGC lagos island,',
            location: 'lagos state, nigeria.',
            centerCategory: 'garden',
            capacity: 5000,
            usageFee: 50000,
            createdBy: 'ode akugbe',
            description: ''
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(403)
            .end((error, response) => {
              expect(response.body).to.have.property('Facility and Center Creation Error');
              expect(response.status).to.equal(403);
              expect(response.body['Facility and Center Creation Error']).to.equal('facility name already exist');
              done();
            });
        });// ends it
        it('should return "403 status and center name already exist"', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
            facilityName: 'small hall',
            hasProjectors: 'true',
            numOfProjectors: 5,
            hasChairs: 'true',
            numOfChairs: 5000,
            hasTables: 'true',
            numOfTables: 1250,
            hasToilets: 'true',
            numOfToilets: 100,
            descriptionFacility: '',
            facilityId: 1,
            centerName: 'La posh garden',
            address: '122 VGC lagos island,',
            location: 'lagos state, nigeria.',
            centerCategory: 'garden',
            capacity: 5000,
            usageFee: 50000,
            createdBy: 'ode akugbe',
            description: ''
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(403)
            .end((error, response) => {
              expect(response.body).to.have.property('Facility and Center Creation Error');
              expect(response.status).to.equal(403);
              expect(response.body['Facility and Center Creation Error']).to.equal('center name already exist');
              done();
            });
        });// ends it
        it('should return "401 status and User is not authorised to create center."', (done) => {
          const centerObject = {
            isFacilityExisting: 'false',
            facilityName: 'small hall',
            hasProjectors: 'true',
            numOfProjectors: 5,
            hasChairs: 'true',
            numOfChairs: 5000,
            hasTables: 'true',
            numOfTables: 1250,
            hasToilets: 'true',
            numOfToilets: 100,
            descriptionFacility: '',
            facilityId: 1,
            centerName: 'La posh garden',
            address: '122 VGC lagos island,',
            location: 'lagos state, nigeria.',
            centerCategory: 'garden',
            capacity: 5000,
            usageFee: 50000,
            createdBy: 'ode akugbe',
            description: ''
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', userToken3)
            .send(centerObject)
            .expect(401)
            .end((error, response) => {
              expect(response.body).to.have.property('Center Creation Failed');
              expect(response.status).to.equal(401);
              expect(response.body['Center Creation Failed']).to.equal('User is not authorised to create center.');
              done();
            });
        });// ends it
        it('should return "404 status and Facility 4 was not found."', (done) => {
          const centerObject = {
            isFacilityExisting: 'true',
            facilityName: 'large hall',
            hasProjectors: 'true',
            numOfProjectors: 5,
            hasChairs: 'true',
            numOfChairs: 5000,
            hasTables: 'true',
            numOfTables: 1250,
            hasToilets: 'true',
            numOfToilets: 100,
            descriptionFacility: '',
            facilityId: 4,
            centerName: 'La posh garden',
            address: '122 VGC lagos island,',
            location: 'lagos state, nigeria.',
            centerCategory: 'garden',
            capacity: 5000,
            usageFee: 50000,
            createdBy: 'ode akugbe',
            description: ''
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(404)
            .end((error, response) => {
              expect(response.body).to.have.property('message');
              expect(response.status).to.equal(404);
              expect(response.body.message).to.equal('Facility 4 was not found.');
              done();
            });
        });// ends it
        it('should return "403 status and center name already exist"', (done) => {
          const centerObject = {
            isFacilityExisting: 'true',
            facilityName: 'small hall',
            hasProjectors: 'true',
            numOfProjectors: 5,
            hasChairs: 'true',
            numOfChairs: 5000,
            hasTables: 'true',
            numOfTables: 1250,
            hasToilets: 'true',
            numOfToilets: 100,
            descriptionFacility: '',
            facilityId: 1,
            centerName: 'La posh garden',
            address: '122 VGC lagos island,',
            location: 'lagos state, nigeria.',
            centerCategory: 'garden',
            capacity: 5000,
            usageFee: 50000,
            createdBy: 'ode akugbe',
            description: ''
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', adminToken)
            .send(centerObject)
            .expect(403)
            .end((error, response) => {
              expect(response.body).to.have.property('Center Creation Error');
              expect(response.status).to.equal(403);
              expect(response.body['Center Creation Error']).to.equal('center name already exist');
              done();
            });
        });// ends it
        it('should return "401 status and User is not authorised to create center."', (done) => {
          const centerObject = {
            isFacilityExisting: 'true',
            facilityName: 'small hall',
            hasProjectors: 'true',
            numOfProjectors: 5,
            hasChairs: 'true',
            numOfChairs: 5000,
            hasTables: 'true',
            numOfTables: 1250,
            hasToilets: 'true',
            numOfToilets: 100,
            descriptionFacility: '',
            facilityId: 1,
            centerName: 'La posh garden',
            address: '122 VGC lagos island,',
            location: 'lagos state, nigeria.',
            centerCategory: 'garden',
            capacity: 5000,
            usageFee: 50000,
            createdBy: 'ode akugbe',
            description: ''
          };
          request(app)
            .post('/api/v1/centers')
            .set('x-access-token', userToken2)
            .send(centerObject)
            .expect(401)
            .end((error, response) => {
              expect(response.body).to.have.property('Center Creation Failed');
              expect(response.status).to.equal(401);
              expect(response.body['Center Creation Failed']).to.equal('User is not authorised to create center.');
              done();
            });
        });// ends it
      });// Invalid Cases
    });// POST /api/v1/centers
  });// Create Center API enpoint test
});// Main describe
