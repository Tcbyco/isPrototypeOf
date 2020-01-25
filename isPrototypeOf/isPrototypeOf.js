function isPrototypeOf(proto, obj) {
  // javascript gotcha: typeof null === 'object'
  if (!(typeof proto === 'object') || proto === null) {
    return false;
  } 

  if (!(typeof obj === 'object')) {
    return false;
  } 

  // Recursive base case A: the prototype of Object.prototype === null.
  // We arrive here if proto is not a prototype of obj.
  if (obj === null) {
    return false;
  }

  // Recursive base case B
  // Compare prototype with the prototype of object.
  if (proto === Object.getPrototypeOf(obj)) {
    return true; 
  } 
  
  // Recurse, passing in prototype and the prototype of object.
  // In other words, step up 1 link in the object's prototype chain
  // and compare that to prototype.
  return isPrototypeOf(proto, Object.getPrototypeOf(obj));
}