// type checks for all known types
//
// note that:
//
// - check by duck-typing on a property like `isUnit`, instead of checking instanceof.
//   instanceof cannot be used because that would not allow to pass data from
//   one instance of math.js to another since each has it's own instance of Unit.
// - check the `isUnit` property via the constructor, so there will be no
//   matches for "fake" instances like plain objects with a property `isUnit`.
//   That is important for security reasons.
// - It must not be possible to override the type checks used internally,
//   for security reasons, so these functions are not exposed in the expression
//   parser.

export function isNumber (x) {
  return typeof x === 'number'
}

/**
 * @param {*} x
 */
export function isBigNumber (x) {
  return (x && x.constructor.prototype.isBigNumber === true) || false
}

/**
 * @param {*} x
 */
export function isComplex (x) {
  return (x && typeof x === 'object' && Object.getPrototypeOf(x).isComplex === true) || false
}

/**
 * @param {*} x
 */
export function isFraction (x) {
  return (x && typeof x === 'object' && Object.getPrototypeOf(x).isFraction === true) || false
}

/**
 * @param {*} x
 */
export function isUnit (x) {
  return (x && x.constructor.prototype.isUnit === true) || false
}

/**
 * @param {*} x
 */
export function isString (x) {
  return typeof x === 'string'
}

export const isArray = Array.isArray

/**
 * @param {*} x
 */
export function isMatrix (x) {
  return (x && x.constructor.prototype.isMatrix === true) || false
}

/**
 * Test whether a value is a collection: an Array or Matrix
 * @param {*} x
 * @returns {boolean} isCollection
 */
export function isCollection (x) {
  return Array.isArray(x) || isMatrix(x)
}

/**
 * @param {*} x
 */
export function isDenseMatrix (x) {
  return (x && x.isDenseMatrix && x.constructor.prototype.isMatrix === true) || false
}

/**
 * @param {*} x
 */
export function isSparseMatrix (x) {
  return (x && x.isSparseMatrix && x.constructor.prototype.isMatrix === true) || false
}

/**
 * @param {*} x
 */
export function isRange (x) {
  return (x && x.constructor.prototype.isRange === true) || false
}

/**
 * @param {*} x
 */
export function isIndex (x) {
  return (x && x.constructor.prototype.isIndex === true) || false
}

/**
 * @param {*} x
 */
export function isBoolean (x) {
  return typeof x === 'boolean'
}

/**
 * @param {*} x
 */
export function isResultSet (x) {
  return (x && x.constructor.prototype.isResultSet === true) || false
}

/**
 * @param {*} x
 */
export function isHelp (x) {
  return (x && x.constructor.prototype.isHelp === true) || false
}

/**
 * @param {*} x
 */
export function isFunction (x) {
  return typeof x === 'function'
}

/**
 * @param {*} x
 */
export function isDate (x) {
  return x instanceof Date
}

/**
 * @param {*} x
 */
export function isRegExp (x) {
  return x instanceof RegExp
}

/**
 * @param {*} x
 */
export function isObject (x) {
  return !!(x &&
    typeof x === 'object' &&
    x.constructor === Object &&
    !isComplex(x) &&
    !isFraction(x))
}

/**
 * @param {*} x
 */
export function isNull (x) {
  return x === null
}

/**
 * @param {*} x
 */
export function isUndefined (x) {
  return x === undefined
}

/**
 * @param {*} x
 */
export function isAccessorNode (x) {
  return (x && x.isAccessorNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isArrayNode (x) {
  return (x && x.isArrayNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isAssignmentNode (x) {
  return (x && x.isAssignmentNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isBlockNode (x) {
  return (x && x.isBlockNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isConditionalNode (x) {
  return (x && x.isConditionalNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isConstantNode (x) {
  return (x && x.isConstantNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isFunctionAssignmentNode (x) {
  return (x && x.isFunctionAssignmentNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isFunctionNode (x) {
  return (x && x.isFunctionNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isIndexNode (x) {
  return (x && x.isIndexNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isNode (x) {
  return (x && x.isNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isObjectNode (x) {
  return (x && x.isObjectNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isOperatorNode (x) {
  return (x && x.isOperatorNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isParenthesisNode (x) {
  return (x && x.isParenthesisNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isRangeNode (x) {
  return (x && x.isRangeNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isSymbolNode (x) {
  return (x && x.isSymbolNode === true && x.constructor.prototype.isNode === true) || false
}

/**
 * @param {*} x
 */
export function isChain (x) {
  return (x && x.constructor.prototype.isChain === true) || false
}

/**
 * @param {*} x
 */
export function typeOf (x) {
  const t = typeof x

  if (t === 'object') {
    // JavaScript types
    if (x === null) return 'null'
    if (Array.isArray(x)) return 'Array'
    if (x instanceof Date) return 'Date'
    if (x instanceof RegExp) return 'RegExp'

    // math.js types
    if (isBigNumber(x)) return 'BigNumber'
    if (isComplex(x)) return 'Complex'
    if (isFraction(x)) return 'Fraction'
    if (isMatrix(x)) return 'Matrix'
    if (isUnit(x)) return 'Unit'
    if (isIndex(x)) return 'Index'
    if (isRange(x)) return 'Range'
    if (isResultSet(x)) return 'ResultSet'
    if (isNode(x)) return x.type
    if (isChain(x)) return 'Chain'
    if (isHelp(x)) return 'Help'

    return 'Object'
  }

  if (t === 'function') return 'Function'

  return t // can be 'string', 'number', 'boolean', ...
}
