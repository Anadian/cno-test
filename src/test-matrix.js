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
	import Bedrock from 'cno-bedrock';
//# Constants
const FILENAME = 'test-matrix.js';
//## Errors

//# Global Variables
/**## Functions*/
function FunctionsObject( options = null ){
	if( !new.target ){
		return new FunctionsObject( options );
	}
	const FUNCTION_NAME = 'FunctionsObject';
	const DEFAULT_OPTIONS = {};
	return this;
}
FunctionsObject.assertFunctionsObject = function( input_object = null ){	
	var return_error = null;
	var errors_array = [];
	if( input_object == null ){
		return_error = new Error( `Invalid object value; received obect is null.` );
		throw return_error;
	}
	for( const function_key of input_object ){
		if( typeof(input_object[function_key]) !== 'function' ){
			return_error = new Error( `Invalid property "${function_key}"; all properties must be functions.` );
			errors_array.push( return_error );
		}
	}
	if( errors_array.length > 1 ){
		return_error = new AggregateError( errors_array, 'Multiple non-function properties found.' );
		throw return_error;
	} else if( errors_array.length === 1 ){
		return_error = errors_array[0];
		throw return_error;
	}
}
FunctionsObject.isFunctionsObject = function( input_object = null ){
	var _return = false;
	try{
		FunctionsObject.assertFunctionsObject( input_object );
		_return = true;
	} catch( error ){
		_return = false;
	}
	return _return;
}
/**
### FunctionsObject.prototype.addFunction
> Adds a function to a the FunctionsObject instance.

#### Parametres
| name | type | description |
| --- | --- | --- |
| name | string | The name with which the function will be referred.  |
| func | function | The actually function to be added to the FunctionsObject  |

#### Throws
| code | type | condition |
| --- | --- | --- |
| 'ERR_INVALID_ARG_TYPE' | TypeError | Thrown if a given argument isn't of the correct type. |

#### History
| version | change |
| --- | --- |
| 0.0.1 | WIP |
*/
FunctionsObject.prototype.addFunction = function( name, func ){

	// Constants
	const FUNCTION_NAME = 'FunctionsObject.prototype.addFunction';
	// Variables
	var return_error = null;
	// Parametre checks
	if( typeof(name) !== 'string' ){
		return_error = new TypeError('Param "name" is not of type string.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}
	if( typeof(func) !== 'function' ){
		return_error = new TypeError('Param "func" is not of type function.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}
	// Function
	this[name] = func;
} // FunctionsObject.prototype.addFunction

/**
### ConditionsObject
> A object containing definitions for multiple conditions and subtest in a test matrix.

#### Parametres
| name | type | description |
| --- | --- | --- |
| input_options | object | Run-time options. \[default: {}\] |

##### `options` Properties
| name | type | default | description |
| --- | --- | --- | --- |
| noop | boolean | false | Skip primary functionality. |

#### Returns
| type | description |
| --- | --- |
| ConditionsObject | Returns the new instance of ConditionsObject. |

#### Throws
| code | type | condition |
| --- | --- | --- |
| 'ERR_INVALID_ARG_TYPE' | TypeError | Thrown if a given argument isn't of the correct type. |

#### History
| version | change |
| --- | --- |
| 0.0.1 | WIP |
*/
function ConditionsObject( input_options = {} ){
	if( !new.target ){
		return new ConditionsObject(input_options, );
	}
	// Constants
	const FUNCTION_NAME = 'ConditionsObject';
	const DEFAULT_OPTIONS = {
		noop: false, // Skip primary functionality.
	};// Variables
	var _return = null;
	var return_error = null;
		// Private Properties
	
	// Public Properties
	Object.defineProperties( this, {
	} );
	// Parametre checks
	if( typeof(input_options) !== 'object' ){
		return_error = new TypeError('Param "input_options" is not of type object.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}

	// Options
	var { options, log_function, validation_function } = Bedrock.deriveOptions.call( this, input_options, DEFAULT_OPTIONS );
	// Function
	// Return
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `returned: ${_return}`});
	return _return;
} // ConditionsObject

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
	if( !new.target ){
		return new TestMatrix( options );
	}
	const FUNCTION_NAME = 'TestMatrix';
	const DEFAULT_OPTIONS = {};
	// Variables
	var _return = null;
	var return_error = null;
	// Private properties
	// Public Properties
	this.constants ??= options?.constants ?? null;
	this.state ??= options?.state ?? null;
	Object.defineProperties( this, {
		_functions: {
			writable: true,
			value: new FunctionsObject()
		},
		_conditions: {
			writable: true,
			value: new ConditionsObject()
		},
		functions: {
			get(){
				return this._functions;
			},
			set( functions_object ){
				var return_error = null; 
				if( FunctionsObject.isFunctionsObject( functions_object ) === true ){
					this._functions = { ...functions_object };
				} else{
					return_error = new Error( 'Tried to assign an invalid value to TestMatrix.prototype.functions; value must be an instance of `FunctionsObject`.' );
					throw return_error;
				}
			}
		},
		conditions: {
			get(){
				return this._conditions;
			},
			set( conditions_object ){
				var return_error = null;
				for( const condition_key of conditions_object ){
					if( Condition.isCondition(conditions_object[condition_key]) !== true ){
						return_error = new Error( `Invalid property "${condition_key}": attempted to assign an object with an invalid condition to \`TestMatrix.conditions\`; all properties on the assigned conditions object must be valid \`Condition\` objects.` );
						throw return_error;
					}
				}
				this._conditions = { ...conditions_object };
			}
		}
	} );
	this.addFunction = this._functions.addFunction.bind( this._functions );
	//this.addCondition = this._conditions.addCondition.bind( this._conditions );
	return this;
}
/**
### TestMatrix.assertTestMatrix
> Returns if the given object is a valid `TestMatrix`-compatible object and throws with error otherwise.

#### Parametres
| name | type | description |
| --- | --- | --- |
| input_object | object | The object to test for `TestMatrix` properties. \[default: null\] |

#### Returns
| type | description |
| --- | --- |
| boolean | Returns `true` if compatible with `TestMatrix` and throws otherwise. |

#### Throws
| code | type | condition |
| --- | --- | --- |
| 'ERR_INVALID_ARG_TYPE' | TypeError | Thrown if a given argument isn't of the correct type. |

#### History
| version | change |
| --- | --- |
| 0.0.1 | WIP |
*/
TestMatrix.assertTestMatrix = function( input_object = null ){
	// Constants
	const FUNCTION_NAME = 'TestMatrix.assertTestMatrix';
	// Variables
	var return_error = null;
	var errors_array = [];
	// Parametre checks
	try{
		Bedrock.assert.assertStrictlyNotEqual( input_object, null, 'input_object' );
	} catch(error){
		errors_array.push( error );
	}
	// Function
	try{
		Bedrock.assert.assertStrictlyNotEqual( input_object.constants, null, 'input_object.constants', 'null', 'object' );
	} catch(error){
		errors_array.push( error );
	}
	try{
		Bedrock.assert.assertStrictlyNotEqual( input_object.state, null, 'input_object.state' );
	} catch(error){
		errors_array.push( error );
	}
	try{
		FunctionsObject.assertFunctionsObject( input_object._functions );
	} catch(error){
		errors_array.push( error );
	}
	try{
		ConditionsObject.assertConditionsObject( input_object._conditions );
	} catch(error){
		errors_array.push( error );
	}
	// Return
	if( errors_array.length > 1 ){
		return_error = new AggregateError( errors_array );
		throw return_error;
	} else if( errors_array.length === 1 ){
		return_error = errors_array[0];
		throw return_error;
	}
} // TestMatrix.assertTestMatrix

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
	// Variables
	var _return = false;
	// Parametre checks
	// Function
	try{
		TestMatrix.assertTestMatrix( input_object );
		_return = true;
	} catch(error){
		_return = false;
	}
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
		if( options.name != '' && typeof(options.name) === typeof('') ){
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
	if( !new.target ){
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
Condition.assertCondition = function( condition_object = null ){
	Bedrock.assert.assertStrictlyNotEqual( condition_object, null );
	Bedrock.assert.deepStrictEqual( typeof(condition_object.skip), 'boolean' );
	Bedrock.assert.deepStrictEqual( typeof(condition_object.debug), 'boolean' );
	Bedrock.assert.deepStrictEqual( typeof(condition_object.success), 'boolean' );
	Bedrock.assert.deepStrictEqual( typeof(condition_object.promise), 'boolean' );
	Bedrock.assert.deepStrictEqual( typeof(condition_object.pre), 'function' );
	Bedrock.assert.deepStrictEqual( typeof(condition_object.post), 'function' );
	Bedrock.assert.deepStrictEqual( Array.isArray(condition_object.args), true );
}
Condition.isCondition = function( condition_object = null ){
	var _return = false;
	try{
		Condition.assertCondition( condition_object );
		_return = true;
	} catch( error ){
		_return = false;
	}
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
		functionsObject: null,
		conditionsObject: null
	};// Variables
	var arguments_array = Array.from(arguments);
	var _return = null;
	var return_error = null;
	var options = null;
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `received: ${arguments_array}`});
	// Parametre checks
	if( typeof(input_options) !== 'object' ){
		return_error = new TypeError('Param "input_options" is not of type object.');
		return_error.code = 'ERR_INVALID_ARG_TYPE';
		throw return_error;
	}

	// Options
	options = Bedrock.derive( input_options, DEFAULT_OPTIONS );
	if( options.noop !== true ){
		// Function
		_return = new TestMatrix();
		//if( FunctionsObject.isFunctionsObject( options.functionsObject ) ){
		_return.functions = options.functionsObject;
		_return.conditions = options.conditionsObject;
		//}
	} // noop
	// Return
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `returned: ${_return}`});
	return _return;
} // TestMatrix.create

// test-matrix.js EOF

