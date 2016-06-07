/**
 * Replaces first character in string to lower case equivalent
 * @param string
 * @returns {string}
 */
const toLowerFirst = (string) => {
  return string.substr(0, 1).toLowerCase() + string.substr(1);
};

/**
 * Replaces first character in string to upper case equivalent
 * @param string
 * @returns {string}
 */
const toUpperFirst = (string) => {
  return string.substr(0, 1).toUpperCase() + string.substr(1);
};

/**
 * Replaces text with camelCase equivalent
 *
 * @param mixedString
 * @param delimiter
 * @param startsWithUpper
 * @returns {string}
 */
const toUpperCase = (mixedString, delimiter = '_', startsWithUpper = false) => {

  let camelized = mixedString.split(delimiter).map(part => toUpperFirst(part)).join('');

  if (!startsWithUpper) {
    camelized = toLowerFirst(camelized);
  }

  return camelized;
};

export default toUpperCase;
