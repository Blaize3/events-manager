import { Center, Facility } from '../models';
import DoValidation from './middlewares/validateCenter';
/**
 *
 *
 * @class HandleCenterRequests
 */
class HandleCenterRequests {
  /**
   *
   *
   * @static
   * @param {any} request
   * @param {any} response
   * @returns {HandleCenterRequests} The identifier for ...
   * @memberof HandleCenterRequests
   */
  static addCenter(request, response) {
    const addCenterObject = {
      isFacilityExisting: request.body.isFacilityExisting,
      facilityName: request.body.facilityName,
      hasProjectors: request.body.hasProjectors,
      numOfProjectors: request.body.numOfProjectors,
      hasChairs: request.body.hasChairs,
      numOfChairs: request.body.numOfChairs,
      hasTables: request.body.hasTables,
      numOfTables: request.body.numOfTables,
      hasToilets: request.body.hasToilets,
      numOfToilets: request.body.numOfToilets,
      descriptionFacility: request.body.descriptionFacility,
      facilityId: request.body.facilityId,
      centerName: request.body.centerName,
      address: request.body.address,
      location: request.body.location,
      centerCategory: request.body.centerCategory,
      capacity: request.body.capacity,
      usageFee: request.body.usageFee,
      createdBy: '',
      description: request.body.description
    };

    const validateFacility = DoValidation
      .validateIsFacilityExisting(addCenterObject.isFacilityExisting);
    if (validateFacility.validationHasFailed) {
      return response.status(400).send({
        message: `${validateFacility.errorCount} user input ${(validateFacility.errorCount === 1 ? 'field' : 'fields')} failed to validate.`,
        Details: validateFacility.errorObject
      });
    }

    // if facility does exist, supply Facility id then create Center
    if (addCenterObject.isFacilityExisting.toLowerCase().trim() === 'true') {
      const validate = DoValidation.validateAddCenter(addCenterObject);
      if (validate.validationHasFailed) {
        return response.status(400).send({
          message: `${validate.errorCount} user input ${(validate.errorCount === 1 ? 'field' : 'fields')} failed to validate.`,
          Details: validate.errorObject
        });
      }

      const centerObject = {
        facilityId: parseInt(addCenterObject.facilityId, 10),
        centerName: (addCenterObject.centerName.charAt(0).toUpperCase() +
          addCenterObject.centerName.slice(1).toLowerCase()).trim(),
        address: addCenterObject.address.toLowerCase().trim(),
        location: addCenterObject.location.toLowerCase().trim(),
        centerCategory: addCenterObject.centerCategory.toLowerCase().trim(),
        capacity: parseInt(addCenterObject.capacity, 10),
        usageFee: parseFloat(addCenterObject.usageFee).toFixed(2),
        createdBy: `${request.decodedToken.lastname} ${request.decodedToken.firstname}`,
        description: addCenterObject.description.toLowerCase().trim()
      };

      if (request.decodedToken.role === 'ordinary user') {
        return response.status(401).send({
          'Center Creation Failed': 'User is not authorised to create center.'
        });
      }

      return Facility
        .findOne({
          where: {
            id: centerObject.facilityId
          }
        })
        .then((isExisting) => {
          if (!isExisting) {
            return response.status(404).send({
              message: `Facility ${centerObject.facilityId} was not found.`
            });
          }
          if (isExisting) {
            return Center
              .findOne({
                where: {
                  centerName: centerObject.centerName
                }
              });
          }
        })
        .then((centerName) => {
          if (centerName) {
            return response.status(403).send({
              'Center Creation Error': 'center name already exist',
              centerName
            });
          }
          if (!centerName) {
            return Center
              .create(centerObject)
              .then(createdCenter => response.status(201).send({
                message: 'Center has been created.',
                Details: {
                  'Center Id': createdCenter.id,
                  'Facility Id': createdCenter.facilityId,
                  'Center name': createdCenter.centerName,
                  'Center address': createdCenter.address,
                  'Center location': createdCenter.location,
                  'Center category': createdCenter.centerCategory,
                  'Center capacity': createdCenter.capacity,
                  'Usage fee': `N ${createdCenter.usageFee}`,
                  'Created by': createdCenter.createdBy,
                  Description: createdCenter.description
                },
                centerName
              }));
          }
        });
    }

    // if facility does not exist, create Facility then create Center
    if (!(addCenterObject.isFacilityExisting.toLowerCase().trim() === 'true')) {
      const validate = DoValidation.validateAddFacilityCenter(addCenterObject);
      if (validate.validationHasFailed) {
        return response.status(400).send({
          message: `${validate.errorCount} user input ${(validate.errorCount === 1 ? 'field' : 'fields')} failed to validate.`,
          Details: validate.errorObject
        });
      }

      const centerObject = {
        centerName: (addCenterObject.centerName.charAt(0).toUpperCase() +
          addCenterObject.centerName.slice(1).toLowerCase()).trim(),
        address: addCenterObject.address.toLowerCase().trim(),
        location: addCenterObject.location.toLowerCase().trim(),
        centerCategory: addCenterObject.centerCategory.toLowerCase().trim(),
        capacity: parseInt(addCenterObject.capacity, 10),
        usageFee: parseFloat(addCenterObject.usageFee).toFixed(2),
        createdBy: `${request.decodedToken.lastname} ${request.decodedToken.firstname}`,
        description: addCenterObject.description.toLowerCase().trim()
      };

      const facilityObject = {
        facilityName: (addCenterObject.facilityName.charAt(0).toUpperCase() +
          addCenterObject.facilityName.slice(1).toLowerCase()).trim(),
        hasProjectors: (addCenterObject.hasProjectors.toString().toLowerCase().trim() === 'true'),
        numOfProjectors: parseInt(addCenterObject.numOfProjectors, 10),
        hasChairs: (addCenterObject.hasChairs.toLowerCase().trim() === 'true'),
        numOfChairs: parseInt(addCenterObject.numOfChairs, 10),
        hasTables: (addCenterObject.hasTables.toLowerCase().trim() === 'true'),
        numOfTables: parseInt(addCenterObject.numOfTables, 10),
        hasToilets: (addCenterObject.hasToilets.toLowerCase().trim() === 'true'),
        numOfToilets: parseInt(addCenterObject.numOfToilets, 10),
        descriptionFacility: addCenterObject.descriptionFacility.toLowerCase().trim()
      };

      if (request.decodedToken.role === 'ordinary user') {
        return response.status(401).send({
          'Center Creation Failed': 'User is not authorised to create center.'
        });
      }

      return Facility
        .findOne({
          where: {
            facilityName: facilityObject.facilityName
          }
        })
        .then((facilityName) => {
          if (!facilityName) {
            return Center
              .findOne({
                where: {
                  centerName: centerObject.centerName
                }
              });
          }
          if (facilityName) {
            return response.status(403).send({
              'Facility and Center Creation Error': 'facility name already exist'
            });
          }
        })
        .then((centerName) => {
          if (!centerName) {
            return Facility
              .create(facilityObject);
          }
          if (centerName) {
            return response.status(403).send({
              'Facility and Center Creation Error': 'center name already exist'
            });
          }
        })
        .then((createdFacility) => {
          centerObject.facilityId = createdFacility.id;

          return Center
            .create(centerObject);
        })
        .then(createdCenter => response.status(201).send({
          message: 'Center has been created.',
          Details: {
            'Center Id': createdCenter.id,
            'Facility Id': createdCenter.facilityId,
            'Center name': createdCenter.centerName,
            'Center address': createdCenter.address,
            'Center location': createdCenter.location,
            'Center category': createdCenter.centerCategory,
            'Center capacity': createdCenter.capacity,
            'Usage fee': `N ${createdCenter.usageFee}`,
            'Created by': createdCenter.createdBy,
            Description: createdCenter.description
          },
          'Other Information': `Facility ${createdCenter.facilityId} was also created.`
        }));
    }
  }// ends addCenter
}// ends HandleCenterRequests

export default HandleCenterRequests;
