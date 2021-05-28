function validatePIN (pin) {
  //return true or false
  let test = /^(\d{4}||\d{6})$/g.test(pin)
  return test
}
console.log(validatePIN("12573"))