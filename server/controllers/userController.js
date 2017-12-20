import { User } from '../models';
import SecurePassword from './middlewares/bcrypy';
import Token from './middlewares/token';
import TestPasswordStrength from './middlewares/passwordStrength';
import DoValidation from './middlewares/validateUser';
/**
 *
 *
 * @class HandleUserRequest
 */
class HandleUserRequest {
/**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 * @returns {HandleUserRequest} The identifier for ...
 * @memberof HandleUserRequest
 */
  static signup(request, response) {
    let signupObject = {
      email: request.body.email, // must be unique
      username: request.body.username, // must be unique
      password: request.body.password,
      lastname: request.body.lastname,
      firstname: request.body.firstname,
      sex: request.body.sex,
      role: ''
    };

    const isValidUserInputs = DoValidation.validateInput(signupObject);
    if (isValidUserInputs.validationHasFailed) {
      return response.status(400).send({
        message: `${isValidUserInputs.errorCount} user input ${(isValidUserInputs.errorCount === 1 ? 'field' : 'fields')} failed to validate.`,
        Details: isValidUserInputs.errorObject
      });
    }

    const passwordStrength = TestPasswordStrength.test(signupObject.password);

    const hashedPassword = SecurePassword.encryptPassword(signupObject.password);

    signupObject = {
      email: signupObject.email.toLowerCase().trim(), // must be unique
      username: signupObject.username.toLowerCase().trim(), // must be unique
      password: hashedPassword,
      lastname: (signupObject.lastname.charAt(0).toUpperCase() +
      signupObject.lastname.slice(1).toLowerCase()).trim(),
      firstname: (signupObject.firstname.charAt(0).toUpperCase() +
      signupObject.firstname.slice(1).toLowerCase()).trim(),
      sex: signupObject.sex.toLowerCase().trim(),
      role: 'ordinary user'
    };

    return User
      .findOne({
        where: {
          $or: [
            { email: signupObject.email },
            { username: signupObject.username }
          ]
        }
      })
      .then((isExisting) => {
        if (!isExisting) {
          return User
            .create(signupObject)
            .then((createdUser) => {
              const payload = {
                userID: createdUser.id,
                email: createdUser.email,
                username: createdUser.username,
                lastname: createdUser.lastname,
                firstname: createdUser.firstname,
                sex: createdUser.sex,
                role: createdUser.role
              };

              const token = Token.generateToken(payload);

              return response.status(201).send({
                message: 'User account has been created.',
                'password strenght': (passwordStrength === 'Password is very Strong.' ? passwordStrength : `${passwordStrength} Update password to ensure better security.`),
                'account details': {
                  id: createdUser.id,
                  email: createdUser.email,
                  username: createdUser.username,
                  lastname: createdUser.lastname,
                  firstname: createdUser.firstname,
                  sex: createdUser.sex,
                  role: createdUser.role
                },
                token
              });
            })
            .catch(error => response.status(500).send({
              'Account Creation Error': error.errors[0].message
            }));
        }
        if (isExisting) {
          if ((signupObject.email === isExisting.email) &&
          (signupObject.username === isExisting.username)) {
            return response.status(403).send({
              message: 'Email and Username already exist.',
              help: 'Change Email and Username fields and submit the form to create account.'
            });
          }

          if ((signupObject.email === isExisting.email)) {
            return response.status(403).send({
              message: 'Email already exist.',
              help: 'Change Email field and submit the form to create account.'
            });
          }

          if ((signupObject.username === isExisting.username)) {
            return response.status(403).send({
              message: 'Username already exist.',
              help: 'Change Username field and submit the form to create account.'
            });
          }
        }
      })
      .catch(error => response.status(500).send({
        'Account Verification Error': error.errors[0].message
      }));
  }// ends signup
  /**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 * @returns {HandleUserRequest} The identifier for ...
 * @memberof HandleUserRequest
 */
  static signin(request, response) {
    let signinObject;
    try {
      signinObject = {
        emailUsername: request.body.emailUsername.toLowerCase().trim(),
        password: request.body.password
      };
    } catch (error) {
      signinObject = {
        emailUsername: undefined,
        password: undefined
      };
    }

    return User
      .findOne({
        where: {
          $or: [
            { email: signinObject.emailUsername },
            { username: signinObject.emailUsername }
          ]
        }
      })
      .then((signedInUser) => {
        if (!signedInUser) {
          return response.status(401).send({
            message: 'Sign in failed: Invalid Email or Username.'
          });
        }

        const isPasswordAuthorized = SecurePassword.decryptPassword(
          signinObject.password,
          signedInUser.password
        );

        if (isPasswordAuthorized) {
          const payload = {
            userID: signedInUser.id,
            email: signedInUser.email,
            username: signedInUser.username,
            lastname: signedInUser.lastname,
            firstname: signedInUser.firstname,
            sex: signedInUser.sex,
            role: signedInUser.role
          };

          const token = Token.generateToken(payload);

          return response.status(200).send({
            message: `User ${signedInUser.id} has been sign in successfully.`,
            'account details': {
              id: signedInUser.id,
              email: signedInUser.email,
              username: signedInUser.username,
              lastname: signedInUser.lastname,
              firstname: signedInUser.firstname,
              sex: signedInUser.sex,
              role: signedInUser.role
            },
            token
          });
        }
        return response.status(401).send({
          message: 'Sign in failed: Invalid Password.'
        });
      })
      .catch(error => response.status(500).send({
        'User Sign in failed': error.errors[0].message
      }));
  }// ends signin
  /**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 * @returns {HandleUserRequest} The identifier for ...
 * @memberof HandleUserRequest
 */
  static resetPassword(request, response) {
    let passwordResetObject;
    try {
      passwordResetObject = {
        newPassword: request.body.newPassword
      };
    } catch (error) {
      passwordResetObject = {
        newPassword: undefined
      };
    }

    const isValidUserInputs = DoValidation.validateNewPassword(passwordResetObject.newPassword);
    if (isValidUserInputs.validationHasFailed) {
      return response.status(400).send({
        message: `${isValidUserInputs.errorCount} user input ${(isValidUserInputs.errorCount === 1 ? 'field' : 'fields')} failed to validate.`,
        Details: isValidUserInputs.errorObject
      });
    }

    const passwordStrength = TestPasswordStrength.test(passwordResetObject.newPassword);

    const hashedPassword = SecurePassword.encryptPassword(passwordResetObject.newPassword);

    return User
      .findOne({
        where: {
          email: request.decodedToken.email
        }
      })
      .then((userAccount) => {
        const resetPassword = {
          password: hashedPassword
        };

        const updateObject = {
          ...userAccount.dataValues,
          ...resetPassword
        };

        return User
          .update(updateObject, {
            where: {
              email: request.decodedToken.email
            },
            returning: true,
            plain: true
          })
          .then(modifiedAccount => response.status(200).send({
            'Password Change was Successful': `User ${modifiedAccount[1].id} has successfully changed his password.`,
            'password strenght': (passwordStrength === 'Password is very Strong.' ? passwordStrength : `${passwordStrength} Update password to ensure better security.`)
          }));
      })
      .catch(error => response.status(500).send({
        'Change Password Account Verification Error': error.errors[0].message
      }));
  }// ends resetPassword
  /**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 * @returns {HandleUserRequest} The identifier for ...
 * @memberof HandleUserRequest
 */
  static makeAdmin(request, response) {
    let updateUserObject;
    try {
      updateUserObject = {
        email: request.body.email
      };
    } catch (error) {
      updateUserObject = {
        email: undefined
      };
    }

    const isValidUserInputs = DoValidation.validateEmail(updateUserObject.email);
    if (isValidUserInputs.validationHasFailed) {
      return response.status(400).send({
        message: `${isValidUserInputs.errorCount} user input ${(isValidUserInputs.errorCount === 1 ? 'field' : 'fields')} failed to validate.`,
        Details: isValidUserInputs.errorObject
      });
    }
    if (request.decodedToken.role !== 'ordinary user') {
      return User
        .findOne({
          where: {
            email: updateUserObject.email
          }
        })
        .then((userAccount) => {
          if (!userAccount) {
            return response.status(404).send({
              message: 'User account not found.'
            });
          }
          const resetRole = {
            role: 'admin user'
          };

          const updateObject = {
            ...userAccount.dataValues,
            ...resetRole
          };

          return User
            .update(updateObject, {
              where: {
                email: updateUserObject.email
              },
              returning: true,
              plain: true
            })
            .then(modifiedAccount => response.status(200).send({
              'Admin User Created': `User ${modifiedAccount[1].id} was successfully made an admin user.`
            }));
        })
        .catch(error => response.status(500).send({
          'Change Password Account Verification Error': error.errors[0].message
        }));
    }
    if (request.decodedToken.role === 'ordinary user') {
      return response.status(401).send({
        message: `User ${request.decodedToken.userID} is not authorized to create privileged Users`
      });
    }
  }// ends makeAdmin
}

export default HandleUserRequest;
