function isPrototypeOf(proto, obj) {
  if (proto === null || proto === undefined) {
    throw new TypeError(`Cannot read property isPrototypeOf of ${proto}.`)
  }

  if (!(typeof proto === 'object')) {
    return false;
  } 

  if (!(typeof obj === 'object')) {
    return false;
  } 

  // Recursive base case A
  // We arrive here if proto is not a prototype of obj.
  if (obj === null) {
    return false;
  }

  // Compare prototype with the prototype of object.
  // If the two are equal, this is Recursive base case B.
  if (proto === Object.getPrototypeOf(obj)) {
    return true; 
  } 
  
  // Recurse, passing in prototype and the prototype of object.
  // In other words, step up 1 link in the object's prototype chain
  // and compare that to proto.
  return isPrototypeOf(proto, Object.getPrototypeOf(obj));
}
