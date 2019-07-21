/**
 * @typedef {function} TypedFunction
 * @property {Object.<string, function>} signatures
 */

/**
 * @typedef {Object} Matrix
 */

/**
 * @typedef {Object} DenseMatrix
 */

/**
 * @typedef {Object} SparseMatrix
 */

/**
 * @typedef {Object} Index
 */

/**
 * @typedef {Object} BigNumber
 * @property {String} type
 * @property {true} isBigNumber
 * @property {function() : number} toNumber
 * @property {function(): BigNumber} abs
 * @property {function(BigNumber): BigNumber} mul
 * @property {function(BigNumber): BigNumber} plus
 * @property {function(BigNumber): BigNumber} minus
 * @property {function(BigNumber): BigNumber} times
 * @property {function(BigNumber): BigNumber} div
 * @property {function(): boolean} isZero
 * @property {function(): boolean} isInt
 * @property {function(): boolean} isNaN
 * @property {function(): boolean} isFinite
 * @property {function(BigNumber | number | string): boolean} eq
 * @property {function(BigNumber | number | string): boolean} gt
 * @property {function(BigNumber | number | string): boolean} gte
 * @property {function(BigNumber | number | string): boolean} lt
 * @property {function(BigNumber | number | string): boolean} lte
 */

/**
 * @typedef {Object} Fraction
 */

/**
 * @typedef {Object} Unit
 */

/**
 * @typedef {Object} Complex
 * @property {string} type
 * @property {true} isComplex
 * @property {number} re
 * @property {number} im
 */

/**
 * @typedef {Object} Node
 * @property {string} type
 */

/**
 * @typedef {Node} AccessorNode
 */

/**
 * @typedef {Node} ArrayNode
 */

/**
 * @typedef {Node} AssignmentNode
 */

/**
 * @typedef {Node} BlockNode
 */

/**
 * @typedef {Node} ConditionalNode
 */

/**
 * @typedef {Node} ConstantNode
 */

/**
 * @typedef {Node} FunctionAssignmentNode
 */

/**
 * @typedef {Node} FunctionNode
 */

/**
 * @typedef {Node} IndexNode
 */

/**
 * @typedef {Node} ObjectNode
 */

/**
 * @typedef {Node} OperatorNode
 * @property {string} op
 * @property {string} fn
 * @property {Node[]} args
 * @property {boolean} implicit
 */

/**
 * @typedef {Node} ParenthesisNode
 */

/**
 * @typedef {Node} RangeNode
 */

/**
 * @typedef {Node} RelationalNode
 */

/**
 * @typedef {Node} SymbolNode
 */
