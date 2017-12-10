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
          if ((signupObject.email === isExisting.email) && (signupObject.username === isExisting.username)) {
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
}

export default HandleUserRequest;
