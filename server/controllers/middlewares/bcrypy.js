import bcrypt from 'bcrypt';
/**
 *
 *
 * @class SecurePassword
 */
class SecurePassword {
/**
 *
 *
 * @static
 * @param {any} password
 * @returns {SecurePassword} The identifier for ...
 * @memberof SecurePassword
 */
  static encryptPassword(password) {
    return bcrypt.hashSync(password, 10);
  }
  /**
 *
 *
 * @static
 * @param {any} password
 * @param {any} hash
 * @returns {SecurePassword} The identifier for ...
 * @memberof SecurePassword
 */
  static decryptPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

export default SecurePassword;
