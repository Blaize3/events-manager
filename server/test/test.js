import request from 'supertest';
import { expect } from 'chai';
import app from '../app';

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
  });// Sign Up API endpoint test
});// Main describe
