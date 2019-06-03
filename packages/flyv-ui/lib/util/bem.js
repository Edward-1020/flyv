var BEM;

(function (BEM) {
  BEM["ELEMENT"] = "__";
  BEM["MODIFIER"] = "_";
})(BEM || (BEM = {}));

export var join = function join(name, element, modifier) {
  if (!element) {
    return "flyv-".concat(name);
  } else if (modifier) {
    return "flyv-".concat(name).concat(BEM.ELEMENT).concat(element).concat(BEM.MODIFIER).concat(modifier);
  } else {
    return "flyv-".concat(name).concat(BEM.ELEMENT).concat(element);
  }
};
export var prefixBem = function prefixBem(name) {
  return function (element, modifier) {
    return join(name, element, modifier);
  };
};