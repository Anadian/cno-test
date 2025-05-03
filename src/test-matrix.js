#!/usr/bin/env node
/**
# [test-matrix.js](src/test-matrix.js)
> A robust test matrix.

Author: Anadian

Code license: MIT
```
	Copyright 2024 Anadian
	Permission is hereby granted, free of charge, to any person obtaining a copy of this 
software and associated documentation files (the "Software"), to deal in the Software 
without restriction, including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so, subject to the following 
conditions:
	The above copyright notice and this permission notice shall be included in all copies 
or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
Documentation License: [![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)
> The source-code comments and documentation are written in [GitHub Flavored Markdown](https://github.github.com/gfm/).

*/

//# Dependencies
	//## Internal
	import Test from './lib.js';
	//## Standard
	//## External
//# Constants
const FILENAME = 'test-matrix.js';
//## Errors

//# Global Variables
/**## Functions*/
function FunctionsObject( options = null ){
	if( !( this instanceof FunctionsObject ) ){
		return new FunctionsObject( options );
	}
	const FUNCTION_NAME = 'FunctionsObject';
	const DEFAULT_OPTIONS = {};
	//Object.defineProperties( this, {} );
	return this;
}
FunctionsObject.isFunctionsObject = function( input_object = null ){	
}
/**
### TestMatrix
> A robust test matrix.
#### Parametres
| name | type | description |
| --- | --- | --- |
| options | object | Additional options to pass to the smart constructor. |

##### `options` Properties
| name | type | description |
| --- | --- | --- |
| packageMeta | PackageMeta | An instance of [cno-package-meta](https://github.com/Anadian/cno-package-meta) to be used by this instance and any subclasses initialised along with it. |
| logger | object | The logger to be used by this instance. |
| config | ConfigManager? | The [cno-config-manager] instance to be used by the created instance. |

#### Throws
| code | type | condition |
| --- | --- | --- |
| 'ERR_INVALID_ARG_TYPE' | TypeError | Thrown if `options` is neither an object nor `null` |

#### History
| version | change |
| --- | --- |
| 0.0.0 | Introduced |
*/
export default function TestMatrix( options = null ){
	if( !( this instanceof TestMatrix ) ){
		return new TestMatrix( options );
	}
	const FUNCTION_NAME = 'TestMatrix';
	const DEFAULT_OPTIONS = {};
	this.constants ??= options.constants ?? null;
	this.state ??= options.state ?? null;
	this._functions ??= options.functions ?? null;
	this._conditions ??= options.conditions ?? null;
	Object.defineProperties( this, {
		functions: {
			get(){
				return this._functions;
			},
			set( functions_object ){
				var return_error = null; 
				if( functions_object == null || typeof(functions_object) !== 'object' ){
					return_error = new Error( 'Only simple key-value objects can be assigned to `TestMatrix.functions`; value was either `null` or not an object.' );
					throw return_error;
				}
				for( const function_key of functions_object ){
					if( typeof(functions_object[function_key]) !== 'function' ){
						return_error = new Error( `Invalid property "${function_key}": to assign to \`TestMatrix.functions\` all properties must be functions.` );
						throw return_error;
					}
				}
				this._functions = { ...functions_object };
			}
		},
		conditions: {
			get(){
				return this._conditions;
			},
			set( conditions_object ){
				var return_error = null;
				for( const condition_key of conditions_object ){
					if( Condition.IsCondition(conditions_object[condition_key]) !== true ){
						return_error = new Error( `Invalid property "${condition_key}": attempted to assign an object with an invalid condition to \`TestMatrix.conditions\`; all properties on the assigned conditions object must be valid \`Condition\` objects.` );
						throw return_error;
					}
				}
				this._conditions = { ...conditions_object };
			}
		}
	} );
	return this;
}
/**
### TestMatrix.isTestMatrix
> Returns true if the object passed is a `TestMatrix` instance or structually equivalent.

#### Parametres
| name | type | description |
| --- | --- | --- |
| input_object | object | Object to test. \[default: null\] |

##### `options` Properties
| name | type | default | description |
| --- | --- | --- | --- |
| noop | boolean | false | Skip primary functionality. |
| noDefaults | boolean | false | Don't apply static default options. |
| noDynamic | boolean | false | Don't apply dynamic default options. |

#### Returns
| type | description |
| --- | --- |
| boolean | Returns `true` if object is an instance of `TestMatrix` or at least has all its properties; `false` otherwise. |

#### Throws
| code | type | condition |
| --- | --- | --- |
| 'ERR_INVALID_ARG_TYPE' | TypeError | Thrown if a given argument isn't of the correct type. |

#### History
| version | change |
| --- | --- |
| 0.0.1 | WIP |
*/
TestMatrix.isTestMatrix = function( input_object = null ){
	const FUNCTION_NAME = 'TestMatrix.isTestMatrix';
	const DEFAULT_OPTIONS = {
		noop: false, // Skip primary functionality.
		noDefaults: false, // Don't apply static default options.
		noDynamic: false, // Don't apply dynamic default options.
	};// Variables
	var arguments_array = Array.from(arguments);
	var _return = null;
	var return_error = null;
	var options = {};
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `received: ${arguments_array}`});
	// Parametre checks
	if( typeof(input_object) !== 'object' ){
		return_error = new TypeError('Param "input_object" is not of type object.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}

	// Options
	if( input_options.noDefaults !== true ){
		if( input_options.noDynamic !== true ){
			var dynamic_defaults = {};
			options = Object.assign( {}, DEFAULT_OPTIONS, dynamic_defaults, input_options );
		} else{
			options = Object.assign( {}, DEFAULT_OPTIONS, input_options );
		} // noDynamic
	} else{
		options = Object.assign( {}, input_options );
	} // noDefaults
	if( options.noop !== true ){
		// Function
	} // noop
	// Return
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `returned: ${_return}`});
	return _return;
} // TestMatrix.isTestMatrix



/**
### TestMatrix.prototype.addCondition
> Adds a condition to the TestMatrix.

#### Parametres
| name | type | description |
| --- | --- | --- |
| input_options | object | Run-time options. \[default: {}\] |

##### `options` Properties
| name | type | default | description |
| --- | --- | --- | --- |
| noop | boolean | false | Skip primary functionality. |
| noDefaults | boolean | false | Don't apply static default options. |
| noDynamic | boolean | false | Don't apply dynamic default options. |
| name | string | '' | The name by which the new condition will be addressed in the TestMatrix. |
| condition | [Condition](#Condtion) | null | A valid object containing all of the following properites. |
| skip | boolean | false | Whether to skip this condition at runtime. |
| debug | boolean | false | Whether to do some additional debugging for this condition at runtime. |
| success | boolean | false | Whether the condition is meant to trigger an error or a normal return: if true, assert with `deepStrictEqual`; if false, assert with `throws`. |
| promise | boolean | false | Whether the condition executes asynchronously: if true, await then assert with `deepStrictEqual`; if false, assert with `rejects`. |
| pre | function | null | A function to be called pre-testing the condition; always called asynchronously with a "subtest" object as a parametre. |
| post | function | null | A function to be called post-testing the condition; always called asynchronously with a "subtest" object as a parametre. |
| args | Array | [] | An array of arguments to be passed to the function being tested. |
| expected | function\|object | null | Either a function with which to validate the return result or error; or an object representing the actual expected return value or caught error. |

#### Returns
| type | description |
| --- | --- |
| object | The TestMatrix object to allow for dot-chaining. |

#### Throws
| code | type | condition |
| --- | --- | --- |
| 'ERR_INVALID_ARG_TYPE' | TypeError | Thrown if a given argument isn't of the correct type. |

#### History
| version | change |
| --- | --- |
| 0.0.1 | WIP |
*/
TestMatrix.prototype.addCondition = function( input_options = {} ){
	const FUNCTION_NAME = 'TestMatrix.prototype.addCondition';
	const DEFAULT_OPTIONS = {
		noop: false, // Skip primary functionality.
		noDefaults: false, // Don't apply static default options.
		noDynamic: false, // Don't apply dynamic default options.
		name: '', // The name by which the new condition will be addressed in the TestMatrix.
		condition: null, //
		skip: false, // Whether to skip this condition at runtime.
		debug: false, // Whether to do some additional debugging for this condition at runtime.
		success: false, // Whether the condition is meant to trigger an error or a normal return: if true, assert with `deepStrictEqual`; if false, assert with `throws`.
		promise: false, // Whether the condition executes asynchronously: if true, await then assert with `deepStrictEqual`; if false, assert with `rejects`.
		pre: null, // A function to be called pre-testing the condition; always called asynchronously with a "subtest" object as a parametre.
		post: null, // A function to be called post-testing the condition; always called asynchronously with a "subtest" object as a parametre.
		args: [], // An array of arguments to be passed to the function being tested.
		expected: null // Either a function with which to validate the return result or error; or an object representing the actual expected return value or caught error.
	};// Variables
	var arguments_array = Array.from(arguments);
	var _return = null;
	var return_error = null;
	var options = {};
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `received: ${arguments_array}`});
	// Parametre checks
	if( typeof(input_options) !== 'object' ){
		return_error = new TypeError('Param "input_options" is not of type object.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}

	// Options
	if( input_options.noDefaults !== true ){
		if( input_options.noDynamic !== true ){
			var dynamic_defaults = {};
			if( input_options.condition == null ){
				dynamic_defaults.condition = new Condition( {
					skip: input_options.skip,
					debug: input_options.debug,
					success: input_options.success,
					promise: input_options.promise,
					pre: input_options.pre,
					post: input_options.post,
					args: input_options.args,
					expected: input_options.expected
				} );
			}
			options = Object.assign( {}, DEFAULT_OPTIONS, dynamic_defaults, input_options );
		} else{
			options = Object.assign( {}, DEFAULT_OPTIONS, input_options );
		} // noDynamic
	} else{
		options = Object.assign( {}, input_options );
	} // noDefaults
	if( options.noop !== true ){
		// Function
		if( options.name =!= '' ){
			if( Condition.isCondition( options.condition ) === true ){
				this._conditions[options.name] = options.condition;
				_return = this;
			} else{
				return_error = new Error('Invalid option property: "condition" must be a valid Condition object or `null`');
				return_error.code = 'ERR_INVALID_ARG_VALUE';
				throw return_error;
			}
		} else{
			return_error = new Error('Invalid option property: "name" must be a non-empty string.');
			return_error.code = 'ERR_INVALID_ARG_VALUE';
			throw return_error;
		}
	} // noop
	// Return
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `returned: ${_return}`});
	return _return;
} // TestMatrix.prototype.addCondition

/**
### TestMatrix.prototype.run
> Run the tests in the TestMatrix.

#### Parametres
| name | type | description |
| --- | --- | --- |
| input_options | object | Run-time options. \[default: {}\] |

##### `options` Properties
| name | type | default | description |
| --- | --- | --- | --- |
| noop | boolean | false | Skip primary functionality. |
| noDefaults | boolean | false | Don't apply static default options. |
| noDynamic | boolean | false | Don't apply dynamic default options. |
| log | Function | null | A function to be used for logging. |

#### Returns
| type | description |
| --- | --- |
| Promise | A Promise which resolves if all test pass; rejects otherwise. |

#### Throws
| code | type | condition |
| --- | --- | --- |
| 'ERR_INVALID_ARG_TYPE' | TypeError | Thrown if a given argument isn't of the correct type. |

#### History
| version | change |
| --- | --- |
| 0.0.1 | WIP |
*/
TestMatrix.prototype.run = async function( input_options = {} ){
	const FUNCTION_NAME = 'TestMatrix.prototype.run';
	const DEFAULT_OPTIONS = {
		noop: false, // Skip primary functionality.
		noDefaults: false, // Don't apply static default options.
		noDynamic: false, // Don't apply dynamic default options.
		logger: null
	};// Variables
	var arguments_array = Array.from(arguments);
	var _return = null;
	var return_error = null;
	var options = {};
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `received: ${arguments_array}`});
	// Parametre checks
	if( typeof(input_options) !== 'object' ){
		return_error = new TypeError('Param "input_options" is not of type object.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}

	// Options
	if( input_options.noDefaults !== true ){
		if( input_options.noDynamic !== true ){
			var dynamic_defaults = {};
			if( input_options.logger == null ){
				if( typeof(input_options.log) === 'function' ){
					dynamic_defaults.logger = {
						log: input_options.log
					};
				} else{
					dynamic_defaults.logger = {
						log: () => {}
					};
				}
			}
			options = Object.assign( {}, DEFAULT_OPTIONS, dynamic_defaults, input_options );
		} else{
			options = Object.assign( {}, DEFAULT_OPTIONS, input_options );
		} // noDynamic
	} else{
		options = Object.assign( {}, input_options );
	} // noDefaults
	if( options.noop !== true ){
		// Function
		for( const function_key of Object.keys( this.functions ) ){
			var input_function = this.functions[function_key];
			//console.log( "function key: %s type: %s", function_key, typeof(input_function) );
			for( const condition_key of Object.keys( this.conditions ) ){
				var subtest = {
					id: `${this.name}:${function_key}:${condition_key}`,
					condition: this.conditions[condition_key],
					state: {
						thisObject: null
					}
				};
				if( subtest.condition.skip !== true ){
					t.diagnostic( subtest.id );
					if( subtest.condition.debug === true ){
						subtest.state.thisObject = {
							logger: { 
								log: function( message_object ){
									console.log( "%s: %s: %s: %s", subtest.id, message_object.function, message_object.level, message_object.message );
								}
							}
						};
					}
					if( typeof(subtest.condition.pre) === 'function' ){
						subtest = await subtest.condition.pre.call( subtest.state.thisObject, subtest );
					}
					try{
						subtest.state.returnedValue = input_function.call( subtest.state.thisObject, ...subtest.condition.args );
					} catch( error ){
						subtest.state.error = error;
					}
					if( subtest.state.returnedValue instanceof Promise ){
						try{
							subtest.state.resolvedValue = await subtest.state.returnedValue;
						} catch( error ){
							subtest.state.rejection = error;
						}
					}
					//var bound_function = input_function.bind( subtest.state.thisObject, ...subtest.condition.args );
					if( typeof(subtest.condition.expected) === 'function' ){
						Test.assert( await subtest.condition.expected( subtest.state.returnedValue ?? subtest.state.error ), `${subtest.id}:customValidator` );
					} else{ // condition.expected is a value
						if( subtest.condition.success === true ){
							Test.assert.deepStrictEqual( await subtest.state.returnedValue, subtest.condition.expected, `${subtest.id}:success` );
						} else{
							var validator_function = Test.errorExpected.bind( subtest.state.thisObject, subtest.condition.expected );
							if( subtest.state.error ){
								Test.assert( validator_function.call( subtest.state.thisObject, subtest.state.error ), `${subtest.id}:throw` );
							} else{
								await Test.assert.rejects( subtest.state.returnedValue, validator_function, `${subtest.id}:reject` );
							} 
						}
					}
					if( typeof(subtest.condition.post) === 'function' ){
						//t.diagnostic('Calling post');
						await subtest.condition.post.call( subtest.state.thisObject, subtest );
					}
				} else{
					t.diagnostic( `${subtest.id}: skipped.` );
				}
			} //for condition_key
		} //for function_key
	} // noop
	// Return
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `returned: ${_return}`});
	return _return;
} // TestMatrix.prototype.run

function Condition( options = null ){
	if( !( this instanceof Condition ) ){
		return new Condition( options );
	}
	this.skip ??= options.skip ?? false;
	this.debug ??= options.debug ?? false;
	this.success ??= options.success ?? false;
	this.promise ??= options.promise ?? false;
	this.pre ??= options.pre ?? null;
	this.post ??= options.post ?? null;
	this.args ??= options.args ?? [];
	this.expected ??= options.expected ?? null;
	// Return
	return this;
}

function Condition.isCondition( condition_object = null ){
	var _return = true;
	if( typeof(condition_object.skip) !== 'boolean' ) _return = false;
	if( typeof(condition_object.debug) !== 'boolean' ) _return = false;
	if( typeof(condition_object.success) !== 'boolean' ) _return = false;
	if( typeof(condition_object.promise) !== 'boolean' ) _return = false;
	if( condition_object.pre != null && typeof(condition_object.pre) === 'function' ) _return = false;
	if( condition_object.post != null && typeof(condition_object.post) === 'function' ) _return = false;
	if( Array.isArray(condition_object.args) !== true ) _return = false;
	return _return;
}
/**
### TestMatrix.create
> Create a new TestMatrix from options.

#### Parametres
| name | type | description |
| --- | --- | --- |
| input_options | object | Run-time options. \[default: {}\] |

##### `options` Properties
| name | type | default | description |
| --- | --- | --- | --- |
| noop | boolean | false | Skip primary functionality. |
| noDefaults | boolean | false | Don't apply static default options. |
| noDynamic | boolean | false | Don't apply dynamic default options. |

#### Returns
| type | description |
| --- | --- |
| TestMatrix | The newly created TestMatrix |

#### Throws
| code | type | condition |
| --- | --- | --- |
| 'ERR_INVALID_ARG_TYPE' | TypeError | Thrown if a given argument isn't of the correct type. |

#### History
| version | change |
| --- | --- |
| 0.0.1 | WIP |
*/
TestMatrix.create = function( input_options = {} ){
	const FUNCTION_NAME = 'TestMatrix.create';
	const DEFAULT_OPTIONS = {
		noop: false, // Skip primary functionality.
		noDefaults: false, // Don't apply static default options.
		noDynamic: false, // Don't apply dynamic default options.
	};// Variables
	var arguments_array = Array.from(arguments);
	var _return = null;
	var return_error = null;
	var options = {};
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `received: ${arguments_array}`});
	// Parametre checks
	if( typeof(input_options) !== 'object' ){
		return_error = new TypeError('Param "input_options" is not of type object.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}

	// Options
	if( input_options.noDefaults !== true ){
		options = Object.assign( options, DEFAULT_OPTIONS, input_options );
	} else{
		options = Object.assign( options, input_options );
	}
	if( options.noop !== true ){
		// Function
	} // noop
	// Return
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `returned: ${_return}`});
	return _return;
} // TestMatrix.create

// test-matrix.js EOF

