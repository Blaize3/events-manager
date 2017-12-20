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
 * @param {any} isFacilityExisting
 * @returns {DoValidation} The identifier for ...
 * @memberof DoValidation
 */
  static validateIsFacilityExisting(isFacilityExisting) {
    let errorCount = 0;
    const errorObject = {};
    let validationHasFailed = false;


    // /1. validate facility isExisting field
    if ((isFacilityExisting === null) || (isFacilityExisting === undefined) || (isFacilityExisting === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['is Facility existing?'] = 'Is Facility existing field cannot be empty.';
    } else if (!(RegularExpression.regExpBoolean(isFacilityExisting.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['is Facility existing?'] = 'Is Facility existing field can take "true" or "false".';
    }

    const validationStatus = {
      validationHasFailed,
      errorCount,
      errorObject
    };

    return validationStatus;
  }// ends validateIsFacilityExisting
  /**
*
*
* @static
* @param {any} object
* @returns {DoValidation} The identifier for ...
* @memberof DoValidation
*/
  static validateAddFacilityCenter(object) {
    let errorCount = 0;
    const errorObject = {};
    let validationHasFailed = false;

    // /1. validate facility name field
    if ((object.facilityName === null) || (object.facilityName === undefined) || (object.facilityName === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Facility name'] = 'Facility name field cannot be empty.';
    } else if (typeof (object.facilityName) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Facility name'] = 'Facility name field must be of type string.';
    } else if (!(RegularExpression
      .regExpCharactersAndSpace(object.facilityName.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Facility name'] = 'Facility name field can take alphabets and white space.';
    } else if (object.facilityName.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Facility name'] = 'Facility name field length cannot be less than 3 characters.';
    }

    // /2. validate facility has projector field
    object.hasProjectors = (object.hasProjectors === undefined ? '' : object.hasProjectors);
    if (object.hasProjectors === null || typeof (object.hasProjectors) !== 'string') {
      object.hasProjectors = '';
    }
    if ((object.hasProjectors === null) || (object.hasProjectors === undefined) || (object.hasProjectors === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['has Projectors?'] = 'Facility\'s has Projectors field cannot be empty.';
    } else if (!(RegularExpression.regExpBoolean(object.hasProjectors.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['has Projectors?'] = 'Facility\'s has Projectors field can take "true" or "false".';
    }

    // /3. valid Center's number of projector field
    const isHasProjectorsSetToTrue = (object.hasProjectors.toLowerCase() === 'true');
    if (!isHasProjectorsSetToTrue) {
      if (object.numOfProjectors > 0) {
        validationHasFailed = true;
        errorCount += 1;
        errorObject['number of Projectors'] = 'Facility\'s number of projectors field must be 0.';
      }
    } else if ((object.numOfProjectors === null) || (object.numOfProjectors === undefined) || (object.numOfProjectors === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Projectors'] = 'Facility\'s number of projectors field cannot be 0.';
    } else if (!(RegularExpression.validateNumbers(object.numOfProjectors))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Projectors'] = 'Facility\'s number of projectors field can take numbers.';
    } else if (parseInt(object.numOfProjectors, 10) === 0) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Projectors'] = 'Facility\'s number of projectors field cannot be 0.';
    }

    // /4. validate facility has chairs field
    object.hasChairs = (object.hasChairs === undefined ? '' : object.hasChairs);
    if (object.hasChairs === null || typeof (object.hasChairs) !== 'string') {
      object.hasChairs = '';
    }
    if ((object.hasChairs === null) || (object.hasChairs === undefined) || (object.hasChairs === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['has Chairs?'] = 'Facility\'s has Chairs field cannot be empty.';
    } else if (!(RegularExpression.regExpBoolean(object.hasChairs.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['has Chairs?'] = 'Facility\'s has Chairs field can take "true" or "false".';
    }

    // /5. valid Center's number of chairs field
    const isHasChairsSetToTrue = (object.hasChairs.toLowerCase() === 'true');
    if (!isHasChairsSetToTrue) {
      if (object.numOfChairs > 0) {
        validationHasFailed = true;
        errorCount += 1;
        errorObject['number of Chairs'] = 'Facility\'s number of chairs field must be 0.';
      }
    } else if ((object.numOfChairs === null) || (object.numOfChairs === undefined) || (object.numOfChairs === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Chairs'] = 'Facility\'s number of chairs field cannot be 0.';
    } else if (!(RegularExpression.validateNumbers(object.numOfChairs))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Chairs'] = 'Facility\'s number of chairs field can take numbers.';
    } else if (parseInt(object.numOfChairs, 10) === 0) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Chairs'] = 'Facility\'s number of chairs field cannot be 0.';
    }

    // /6. validate facility has tables field
    object.hasTables = (object.hasTables === undefined ? '' : object.hasTables);
    if (object.hasTables === null || typeof (object.hasTables) !== 'string') {
      object.hasTables = '';
    }
    if ((object.hasTables === null) || (object.hasTables === undefined) || (object.hasTables === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['has Tables?'] = 'Facility\'s has Tables field cannot be empty.';
    } else if (!(RegularExpression.regExpBoolean(object.hasTables.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['has Tables?'] = 'Facility\'s has Tables field can take "true" or "false".';
    }

    // /7. valid Center's number of tables field
    const isHasTablesSetToTrue = (object.hasTables.toLowerCase() === 'true');
    if (!isHasTablesSetToTrue) {
      if (object.numOfTables > 0) {
        validationHasFailed = true;
        errorCount += 1;
        errorObject['number of Tables'] = 'Facility\'s number of tables field must be 0.';
      }
    } else if ((object.numOfTables === null) || (object.numOfTables === undefined) || (object.numOfTables === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Tables'] = 'Facility\'s number of tables field cannot be 0.';
    } else if (!(RegularExpression.validateNumbers(object.numOfTables))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Tables'] = 'Facility\'s number of tables field can take numbers.';
    } else if (parseInt(object.numOfTables, 10) === 0) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Tables'] = 'Facility\'s number of tables field cannot be 0.';
    }

    // /8. validate facility has toilets field
    object.hasToilets = (object.hasToilets === undefined ? '' : object.hasToilets);
    if (object.hasToilets === null || typeof (object.hasToilets) !== 'string') {
      object.hasToilets = '';
    }
    if ((object.hasToilets === null) || (object.hasToilets === undefined) || (object.hasToilets === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['has Toilets?'] = 'Facility\'s has Toilets field cannot be empty.';
    } else if (!(RegularExpression.regExpBoolean(object.hasToilets.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['has Toilets?'] = 'Facility\'s has Toilets field can take "true" or "false".';
    }

    // /9. valid Center's number of toilets field
    const isHasToiletsSetToTrue = (object.hasToilets.toLowerCase() === 'true');
    if (!isHasToiletsSetToTrue) {
      if (object.numOfToilets > 0) {
        validationHasFailed = true;
        errorCount += 1;
        errorObject['number of Toilets'] = 'Facility\'s number of toilets field must be 0.';
      }
    } else if ((object.numOfToilets === null) || (object.numOfToilets === undefined) || (object.numOfToilets === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Toilets'] = 'Facility\'s number of toilets field cannot be 0.';
    } else if (!(RegularExpression.validateNumbers(object.numOfToilets))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Toilets'] = 'Facility\'s number of toilets field can take numbers.';
    } else if (parseInt(object.numOfToilets, 10) === 0) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['number of Toilets'] = 'Facility\'s number of toilets field cannot be 0.';
    }

    // /10. valid Facility description field
    if ((object.descriptionFacility === null) || (object.descriptionFacility === undefined) || (object.descriptionFacility === '')) {
      object.descriptionFacility = '';
    } else if (typeof (object.descriptionFacility) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Facility\'s description'] = 'Facility description field must be of type string.';
    } else if (!(RegularExpression.regExpCharNumPuncAndSpace(object.descriptionFacility))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Facility\'s description'] = 'Facility description field can take alphabets, numbers, period, comma and white space.';
    } else if (object.descriptionFacility.length <= 9) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Facility\'s description'] = 'Facility description field length cannot be less 10 characters.';
    }

    // /11. validate Center name field
    if ((object.centerName === null) || (object.centerName === undefined) || (object.centerName === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center name'] = 'Center name field cannot be empty.';
    } else if (typeof (object.centerName) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center name'] = 'Center name field must be of type string.';
    } else if (!(RegularExpression
      .regExpCharactersAndSpace(object.centerName.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center name'] = 'Center name field can take alphabets and white space.';
    } else if (object.centerName.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center name'] = 'Center name field length cannot be less than 3 characters.';
    }

    // /12. validate Center address field
    if ((object.address === null) || (object.address === undefined) || (object.address === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center address'] = 'Center address field cannot be empty.';
    } else if (typeof (object.address) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center address'] = 'Center address field must be of type string.';
    } else if (!(RegularExpression
      .regExpCharNumPuncAndSpace(object.address.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center address'] = 'Center address field can take alphabets and white space.';
    } else if (object.address.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center address'] = 'Center address field length cannot be less than 3 characters.';
    }

    // /13. validate Center location field
    if ((object.location === null) || (object.location === undefined) || (object.location === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center location'] = 'Center location field cannot be empty.';
    } else if (typeof (object.location) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center location'] = 'Center location field must be of type string.';
    } else if (!(RegularExpression
      .regExpCharNumPuncAndSpace(object.location.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center location'] = 'Center location field can take alphabets and white space.';
    } else if (object.location.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center location'] = 'Center location field length cannot be less than 3 characters.';
    }

    // /14. validate Center category field
    if ((object.centerCategory === null) || (object.centerCategory === undefined) || (object.centerCategory === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center category'] = 'Center category field cannot be empty.';
    } else if (typeof (object.centerCategory) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center category'] = 'Center category field must be of type string.';
    } else if (!(RegularExpression
      .regExpCharAndNumAndSpace(object.centerCategory.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center category'] = 'Center category field can take alphabets, numbers and white space.';
    } else if (object.centerCategory.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center category'] = 'Center category field length cannot be less than 3 characters.';
    }

    // /15. validate Center capacity field
    if ((object.capacity === null) || (object.capacity === undefined) || (object.capacity === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center capacity'] = 'Center capacity field cannot be 0.';
    } else if (!(RegularExpression.validateNumbers(object.capacity))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center capacity'] = 'Center capacity field can take numbers.';
    } else if (parseInt(object.capacity, 10) === 0) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center capacity'] = 'Center capacity field cannot be 0.';
    }

    // /16. validate Center usage fee field
    if ((object.usageFee === null) || (object.usageFee === undefined) || (object.usageFee === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center usage fee'] = 'Center usage fee field cannot be 0.00';
    } else if (!(RegularExpression.validateNumbers(object.usageFee))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center usage fee'] = 'Center usage fee field can take numbers.';
    } else if (parseInt(object.usageFee, 10) === 0) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center usage fee'] = 'Center usage fee field cannot be 0.00';
    }

    // /17. valid Center description field
    if ((object.description === null) || (object.description === undefined) || (object.description === '')) {
      object.description = '';
    } else if (typeof (object.description) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center\'s description'] = 'Center description field must be of type string.';
    } else if (!(RegularExpression.regExpCharNumPuncAndSpace(object.description))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center\'s description'] = 'Center description field can take alphabets, numbers, period, comma and white space.';
    } else if (object.description.length <= 9) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center\'s description'] = 'Center description field length cannot be less 10 characters.';
    }

    const validationStatus = {
      validationHasFailed,
      errorCount,
      errorObject
    };

    return validationStatus;
  }// ends validateAddFacilityCenter

  /**
*
*
* @static
* @param {any} object
* @returns {DoValidation} The identifier for ...
* @memberof DoValidation
*/
  static validateAddCenter(object) {
    let errorCount = 0;
    const errorObject = {};
    let validationHasFailed = false;

    // /1. Validate Facility id field
    if ((object.facilityId === null) || (object.facilityId === undefined) || (object.facilityId === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Facility Id'] = 'Facility\'s id field cannot be empty.';
    } else if (!(RegularExpression.validateNumbers(object.facilityId))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Facility Id'] = 'Facility\'s id field can take numbers.';
    } else if (parseInt(object.facilityId, 10) === 0) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Facility Id'] = 'Facility\'s id field cannot be 0.';
    }

    // /2. validate Center name field
    if ((object.centerName === null) || (object.centerName === undefined) || (object.centerName === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center name'] = 'Center name field cannot be empty.';
    } else if (typeof (object.centerName) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center name'] = 'Center name field must be of type string.';
    } else if (!(RegularExpression
      .regExpCharactersAndSpace(object.centerName.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center name'] = 'Center name field can take alphabets and white space.';
    } else if (object.centerName.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center name'] = 'Center name field length cannot be less than 3 characters.';
    }

    // /3. validate Center address field
    if ((object.address === null) || (object.address === undefined) || (object.address === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center address'] = 'Center address field cannot be empty.';
    } else if (typeof (object.address) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center address'] = 'Center address field must be of type string.';
    } else if (!(RegularExpression
      .regExpCharNumPuncAndSpace(object.address.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center address'] = 'Center address field can take alphabets and white space.';
    } else if (object.address.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center address'] = 'Center address field length cannot be less than 3 characters.';
    }

    // /4. validate Center location field
    if ((object.location === null) || (object.location === undefined) || (object.location === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center location'] = 'Center location field cannot be empty.';
    } else if (typeof (object.location) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center location'] = 'Center location field must be of type string.';
    } else if (!(RegularExpression
      .regExpCharNumPuncAndSpace(object.location.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center location'] = 'Center location field can take alphabets and white space.';
    } else if (object.location.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center location'] = 'Center location field length cannot be less than 3 characters.';
    }

    // /5. validate Center category field
    if ((object.centerCategory === null) || (object.centerCategory === undefined) || (object.centerCategory === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center category'] = 'Center category field cannot be empty.';
    } else if (typeof (object.centerCategory) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center category'] = 'Center category field must be of type string.';
    } else if (!(RegularExpression
      .regExpCharAndNumAndSpace(object.centerCategory.toLowerCase().trim()))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center category'] = 'Center category field can take alphabets, numbers and white space.';
    } else if (object.centerCategory.length <= 2) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center category'] = 'Center category field length cannot be less than 3 characters.';
    }

    // /6. validate Center capacity field
    if ((object.capacity === null) || (object.capacity === undefined) || (object.capacity === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center capacity'] = 'Center capacity field cannot be 0.';
    } else if (!(RegularExpression.validateNumbers(object.capacity))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center capacity'] = 'Center capacity field can take numbers.';
    } else if (parseInt(object.capacity, 10) === 0) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center capacity'] = 'Center capacity field cannot be 0.';
    }

    // /7. validate Center usage fee field
    if ((object.usageFee === null) || (object.usageFee === undefined) || (object.usageFee === '')) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center usage fee'] = 'Center usage fee field cannot be 0.00';
    } else if (!(RegularExpression.validateNumbers(object.usageFee))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center usage fee'] = 'Center usage fee field can take numbers.';
    } else if (parseInt(object.usageFee, 10) === 0) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center usage fee'] = 'Center usage fee field cannot be 0.00';
    }

    // /8. valid Center description field
    if ((object.description === null) || (object.description === undefined) || (object.description === '')) {
      object.description = '';
    } else if (typeof (object.description) !== 'string') {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center\'s description'] = 'Center description field must be of type string.';
    } else if (!(RegularExpression.regExpCharNumPuncAndSpace(object.description))) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center\'s description'] = 'Center description field can take alphabets, numbers, period, comma and white space.';
    } else if (object.description.length <= 9) {
      validationHasFailed = true;
      errorCount += 1;
      errorObject['Center\'s description'] = 'Center description field length cannot be less 10 characters.';
    }
    const validationStatus = {
      validationHasFailed,
      errorCount,
      errorObject
    };

    return validationStatus;
  }// ends validateAddCenter
}

export default DoValidation;
