/**
 *
 *
 * @class TestPasswordStrength
 */
class TestPasswordStrength {
/**
 *
 *
 * @static
 * @param {any} password
 * @returns {TestPasswordStrength} The identifier for ...
 * @memberof TestPasswordStrength
 */
  static test(password) {
    let status = '';
    let upperChar = 0;
    let lowerChar = 0;
    let numChar = 0;
    let specialChar = 0;

    for (let index = 0; index < password.length; index += 1) {
      const char = password.charAt(index);

      for (let upperCase = 65; upperCase <= 90; upperCase += 1) {
        if (char === String.fromCharCode(upperCase)) {
          upperChar = 1;
          break;
        }
      }

      for (let lowerCase = 97; lowerCase <= 122; lowerCase += 1) {
        if (char === String.fromCharCode(lowerCase)) {
          lowerChar = 1;
          break;
        }
      }

      for (let numCase = 48; numCase <= 57; numCase += 1) {
        if (char === String.fromCharCode(numCase)) {
          numChar = 1;
          break;
        }
      }

      if ((char === '!') || (char === '@') || (char === '#') || (char === '$') || (char === '^') || (char === '&') || (char === '*') || (char === '(') || (char === ')') || (char === '_') || (char === '-') || (char === '+') || (char === '=') || (char === ' ') || (char === ']') || (char === '[') || (char === '{') || (char === '}') || (char === '?') || (char === '/') || (char === '\\')) {
        specialChar = 1;
      }
    }// ends for loop

    const passwordString = upperChar + lowerChar + numChar + specialChar;

    if (passwordString === 1) {
      status = 'Password is very Weak.';
    } else if (passwordString === 2) {
      status = 'Password is Weak.';
    } else if (passwordString === 3) {
      status = 'Password is Strong.';
    } else if (passwordString === 4) {
      status = 'Password is very Strong.';
    }

    return status;
  }
}

export default TestPasswordStrength;
