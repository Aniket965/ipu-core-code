const sha256 = require("sha256");

//@ts-check

/**
 * Returns the code for ipu-core
 * @param {string} rollnumber
 * @param {number} yearcode
 * @param {number} month
 * @returns {string} code
 */
function findCode(rollnumber, yearcode, month) {
  var code = "";
  if (
    rollnumber.indexOf("039") === 6 ||
    rollnumber.indexOf("021") === 6 ||
    rollnumber.indexOf("044") === 6 ||
    rollnumber.indexOf("065") === 6 ||
    rollnumber.indexOf("088") === 6 ||
    rollnumber.indexOf("089") === 6 ||
    rollnumber.indexOf("248") === 6 ||
    rollnumber.indexOf("740") === 6 ||
    rollnumber.indexOf("020") === 6 ||
    rollnumber.indexOf("174") === 6
  ) {
    code = rollnumber.substr(6, 3) + yearcode;
  } else {
    if (month > 5) {
      var semcode = (yearcode - parseInt(rollnumber.substring(9, 11))) * 2;
    } else {
      var semcode = (yearcode - parseInt(rollnumber.substring(9, 11))) * 2 - 1;
    }
    var roll_code = rollnumber.substring(6, 9);
    code = semcode + roll_code + yearcode;
  }
  return code;
}

/**
 * Returns the SHA 256 Hashed code for ipu-core
 * @param {string} rollnumber
 * @param {number} yearcode
 * @param {number} month
 * @param {number} callcode
 * @returns {string} code
 */
function findSHA256Code(rollnumber, yearcode, month, callcode = 0) {
  let code = findCode(rollnumber,yearcode,month,0)
  return sha256(code)
}

module.exports = {
    findCode,
    findSHA256Code
}
