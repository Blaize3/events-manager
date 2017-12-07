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
});// Main describe
