import jwt from 'jsonwebtoken';
import tokenSecret from '../../../code';
/**
 *
 *
 * @class Token
 */
class Token {
/**
 *
 *
 * @static
 * @param {any} payLoad
 * @returns {Token} The identifier for ...
 * @memberof Token
 */
  static generateToken(payLoad) {
    return jwt.sign(payLoad, tokenSecret.secret, { expiresIn: 24 * 60 * 60 });
  }
  /**
 *
 *
 * @static
 * @param {any} tokenObject
 * @returns {Token} The identifier for ...
 * @memberof Token
 */
  static decodeToken(tokenObject) {
    try {
      return jwt.verify(tokenObject, tokenSecret.secret);
    } catch (error) {
      return 'no token';
    }
  }
}

export default Token;
