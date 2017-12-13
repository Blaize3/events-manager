/**
 *
 *
 * @class RegularExpression
 */
class RegularExpression {
/**
 *
 *
 * @static
 * @param {any} email
 * @returns {RegularExpression} The identifier for ...
 * @memberof RegularExpression
 */
  static regExpEmail(email) {
    const regularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regularExpression.test(email);
  }
  /**
   *
   *
   * @static
   * @param {any} charactersOnly
   * @returns {RegularExpression} The identifier for ...
   * @memberof RegularExpression
   */
  static regExpCharactersOnly(charactersOnly) {
    const regularExpression = /^[a-zA-Z]+$/;
    return regularExpression.test(charactersOnly);
  }
  /**
 *
 *
 * @static
 * @param {any} charactersAndSpace
 * @returns {RegularExpression} The identifier for ...
 * @memberof RegularExpression
 */
  static regExpCharactersAndSpace(charactersAndSpace) {
    const regularExpression = /^[a-zA-Z _]+$/;
    return regularExpression.test(charactersAndSpace);
  }
  /**
 *
 *
 * @static
 * @param {any} charactersAndSpace
 * @returns {RegularExpression} The identifier for ...
 * @memberof RegularExpression
 */
  static regExpCharNumPuncAndSpace(charactersAndSpace) {
    const regularExpression = /^[a-zA-Z0-9,.!? ]*$/;
    return regularExpression.test(charactersAndSpace);
  }
  /**
 *
 *
 * @static
 * @param {any} charAndNumOnly
 * @returns {RegularExpression} The identifier for ...
 * @memberof RegularExpression
 */
  static regExpCharAndNumOnly(charAndNumOnly) {
    const regularExpression = /^[a-zA-Z0-9]+$/;
    return regularExpression.test(charAndNumOnly);
  }
  /**
 *
 *
 * @static
 * @param {any} charAndNumAndSpace
 * @returns {RegularExpression} The identifier for ...
 * @memberof RegularExpression
 */
  static regExpCharAndNumAndSpace(charAndNumAndSpace) {
    const regularExpression = /^[a-zA-Z0-9 _]*[a-zA-Z0-9][a-zA-Z0-9 _]*$/;
    return regularExpression.test(charAndNumAndSpace);
  }
  /**
 *
 *
 * @static
 * @param {any} numbersOnly
 * @returns {RegularExpression} The identifier for ...
 * @memberof RegularExpression
 */
  static regExpNumbersOnly(numbersOnly) {
    const regularExpression = /(\d+(\.\d+)?)/;
    return regularExpression.test(numbersOnly);
  }
  /**
 *
 *
 * @static
 * @param {any} trueFalseOnly
 * @returns {RegularExpression} The identifier for ...
 * @memberof RegularExpression
 */
  static regExpBoolean(trueFalseOnly) {
    const regularExpression = /^(true|false)$/;
    return regularExpression.test(trueFalseOnly);
  }
  /**
 *
 *
 * @static
 * @param {any} maleFemaleOnly
 * @returns {RegularExpression} The identifier for ...
 * @memberof RegularExpression
 */
  static regExpSex(maleFemaleOnly) {
    const regularExpression = /^(male|female)$/;
    return regularExpression.test(maleFemaleOnly);
  }
  /**
 *
 *
 * @static
 * @param {any} timeFormat
 * @returns {RegularExpression} The identifier for ...
 * @memberof RegularExpression
 */
  static regExpTime(timeFormat) {
    const regularExpression = /(\d{2}(:\d{2}){2}\s(pm|am))/;
    return regularExpression.test(timeFormat);
  }
  /**
 *
 *
 * @static
 * @param {any} numbersOnly
 * @returns {RegularExpression} The identifier for ...
 * @memberof RegularExpression
 */
  static validateNumbers(numbersOnly) {
    let result = null;
    if (!RegularExpression.regExpNumbersOnly(numbersOnly)) {
      // result = 'Integers and float numbers only. Try 123 or 123.4 (Regular Expression)';
      result = false;
    } else if (Number.isNaN(Number(numbersOnly))) {
      // result = 'Integers and float numbers only. Try 123 or 123.4 (is NaN)';
      result = false;
    } else {
      result = true;
    }
    return result;
  }
}

export default RegularExpression;
