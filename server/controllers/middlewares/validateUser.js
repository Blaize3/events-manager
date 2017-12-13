import RegularExpression from './regularExpression';

/**
 *
 *
 * @class DoValidation
 */
class DoValidation {
  /**
 *
 *
 * @static
 * @param {any} object
 * @returns {DoValidation} The identifier for ...
 * @memberof DoValidation
 */
  static validateInput(object) {
    let errorCount = 0;
    const errorObject = {};
    let validationHasFailed = false;

    // /1. validate user email field
    if ((object.email === null) || (object.email === undefined) || (object.email === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.email = 'User email field cannot be empty.';
    } else if (typeof (object.email) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.email = 'User email field must be of type string.';
    } else if (!(RegularExpression.regExpEmail(object.email.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.email = 'Invalid email. use this snytax: you@domain.com';
    }

    // /2. validate user's username field
    if ((object.username === null) || (object.username === undefined) || (object.username === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.username = 'Username field cannot be empty.';
    } else if (typeof (object.username) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.username = 'Username field must be of type string.';
    } else if (!(RegularExpression.regExpCharAndNumOnly(object.username.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.username = 'Username field can take alphabets and white space.';
    } else if (object.username.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.username = 'Username field length cannot be less than 3 characters.';
    }

    // /3. validate user's password field
    if ((object.password === null) || (object.password === undefined) || (object.password === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.password = 'Password field cannot be empty.';
    } else if (typeof (object.password) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.password = 'Password field must be of type string.';
    } else if (object.password.length <= 8) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.password = 'Password field length cannot be less than 8 characters.';
    }

    // /4. validate user's lastname field
    if ((object.lastname === null) || (object.lastname === undefined) || (object.lastname === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.lastname = 'Lastname field cannot be empty.';
    } else if (typeof (object.lastname) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.lastname = 'Lastname field must be of type string.';
    } else if (!(RegularExpression.regExpCharactersOnly(object.lastname.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.lastname = 'Lastname field can take alphabets and white space.';
    } else if (object.lastname.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.lastname = 'Lastname field length cannot be less than 3 characters.';
    }

    // /5. validate user's firstname field
    if ((object.firstname === null) || (object.firstname === undefined) || (object.firstname === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.firstname = 'Firstname field cannot be empty.';
    } else if (typeof (object.firstname) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.firstname = 'Firstname field must be of type string.';
    } else if (!(RegularExpression.regExpCharactersOnly(object.firstname.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.firstname = 'Firstname field can take alphabets and white space.';
    } else if (object.firstname.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.firstname = 'Firstname field length cannot be less than 3 characters.';
    }

    // /6. validate user's sex field
    if ((object.sex === null) || (object.sex === undefined) || (object.sex === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.sex = 'Sex field cannot be empty.';
    } else if (typeof (object.sex) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.sex = 'Sex field must be of type string.';
    } else if (!(RegularExpression.regExpSex(object.sex.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.sex = 'Sex field should be "male" or "female".';
    }

    const validationStatus = {
      validationHasFailed,
      errorCount,
      errorObject
    };

    return validationStatus;
  }
  /**
 *
 *
 * @static
 * @param {any} password
 * @returns {DoValidation} The identifier for ...
 * @memberof DoValidation
 */
  static validateNewPassword(password) {
    let errorCount = 0;
    const errorObject = {};
    let validationHasFailed = false;

    // /3. validate user's password field
    if ((password === null) || (password === undefined) || (password === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.password = 'New password field cannot be empty.';
    } else if (typeof (password) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.password = 'New password field must be of type string.';
    } else if (password.length <= 8) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.password = 'New password field length cannot be less than 8 characters.';
    }

    const validationStatus = {
      validationHasFailed,
      errorCount,
      errorObject
    };

    return validationStatus;
  }

  /**
*
*
* @static
* @param {any} email
* @returns {DoValidation} The identifier for ...
* @memberof DoValidation
*/
  static validateEmail(email) {
    let errorCount = 0;
    const errorObject = {};
    let validationHasFailed = false;

    // /1. validate user email field
    if ((email === null) || (email === undefined) || (email === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.email = 'User email field cannot be empty.';
    } else if (typeof (email) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.email = 'User email field must be of type string.';
    } else if (!(RegularExpression.regExpEmail(email.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject.email = 'Invalid email. use this snytax: you@domain.com';
    }

    const validationStatus = {
      validationHasFailed,
      errorCount,
      errorObject
    };

    return validationStatus;
  }
}

export default DoValidation;
