import { User } from '../../models';
import Token from './token';
/**
 *
 *
 * @class DoAuthentication
 */
class DoAuthentication {
/**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 *  @param {any} next
 * @returns {DoAuthentication} The identifier for ...
 * @memberof DoAuthentication
 */
  static isAuthenticated(request, response, next) {
    const token = request.body.token || request.query.token || request.headers['x-access-token'];
    const decodedToken = Token.decodeToken(token);

    if (decodedToken === 'no token') {
      return response.status(401).send({
        'Authentication failed': 'Access denied.'
      });
    }
    User
      .findOne({
        where: {
          id: parseInt(decodedToken.userID, 10)
        }
      })
      .then(() => {
        request.decodedToken = decodedToken;
        next();
      })
      .catch(error => response.status(500).send({
        'Authentication failed': error.errors[0].message
      }));
  }
}

export default DoAuthentication;
