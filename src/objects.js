// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  // const keysInObj = [];
  // for (const key in obj) {
  //     keysInObj.push(key);
  // }
  // return keysInObj;
  let keysInObj = [];
  keysInObj = Object.keys(obj);
  return keysInObj;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  // const vals = [];
  // for (const key in obj) {
  //   vals.push(obj[key]);
  // }
  // return vals;
  let val = [];
  val = Object.values(obj);
  return val;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  let keyss = [];
  keyss = Object.keys(obj);
  for (let i = 0; i < keyss.length; i++) {
    obj[keyss[i]] = cb(obj[keyss[i]]);
  }
  return obj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const paired = [];
  const k = Object.keys(obj);
  // const values = Object.values(obj);

  for (let i = 0; i < k.length; i++) {
    const newArray = [];
    newArray.push(k[i], obj[k[i]]);
    paired.push(newArray);
  }
  return paired;
};

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObject = {};
  const Objkeys = Object.keys(obj);
  for (let i = 0; i < Objkeys.length; i++) {
    const newKey = obj[Objkeys[i]];
    const newValue = Objkeys[i];
    newObject[newKey] = newValue;
  }
  return newObject;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defKeys = Object.keys(defaultProps);
  for (let i = 0; i < defKeys.length; i++) {
    if (obj[defKeys[i]] === undefined) {
      obj[defKeys[i]] = defaultProps[defKeys[i]];
    }
  }
  return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
