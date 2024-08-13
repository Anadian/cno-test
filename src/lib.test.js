#!/usr/bin/env node
/**
# [lib.test.js](src/lib.test.js)
> Test file for `cno-test`.

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
	import DefaultExport from './lib.js';
	import * as NamespaceExport from './lib.js';
	import { errorExpected } from './lib.js';
	//## Standard
	//## External
//# Constants
const FILENAME = 'lib.test.js';
//## Errors

//# Global Variables
/**## Functions*/
NamespaceExport.test( 'errorExpected:throws', function( t ){
	t.diagnostic( t.name );
	const test_matrix = {
		functions: {
			defaultExport: DefaultExport.errorExpected,
			namespaceExport: NamespaceExport.errorExpected,
			namedExport: errorExpected
		},
		conditions: {
			failure_type: {
				args: [
					{
						instanceOf: TypeError,
						code: 'ERR_INVALID_ARG_TYPE'
					},
					{
						instanceOf: Error,
						code: 'ERR_INVALID_ARG_TYPE'
					}
				],
				expected: {
					instanceOf: DefaultExport.assert.AssertionError,
					code: 'ERR_ASSERTION',
					operator: 'fail'
				}
			},
			failure_code: {
				args: [
					{
						instanceOf: Error,
						code: 'ERR_INVALID_ARG_VALUE'
					}
				],
				expected: {
					instanceOf: DefaultExport.assert.AssertionError,
					code: 'ERR_ASSERTION',
					operator: 'fail'
				}
			},
			functional: {
				args: [
					function( input ){
						if( input === 1 ){
							return true;
						} else{
							return false;
						}
					},
					0
				],
				expected: {
					instanceOf: DefaultExport.assert.AssertionError,
					code: 'ERR_ASSERTION',
					operator: 'fail'
				}
			}
		}
	};
	var new_error = new Error();
	new_error.code = 'ERR_INVALID_ARG_TYPE';
	test_matrix.conditions.failure_code.args.push( new_error );
	for( const function_key of Object.keys( test_matrix.functions ) ){
		var input_function = test_matrix.functions[function_key];
		//console.error( "%s (%s)", function_key, typeof(input_function) );
		for( const condition_key of Object.keys( test_matrix.conditions ) ){
			t.diagnostic( `${t.name}:${function_key}:${condition_key}` );
			var condition = test_matrix.conditions[condition_key];
			var bound_function = input_function.bind( /*{ logger: { log: console.log } }*/null, ...condition.args );
			var validator_function = input_function.bind( /*{ logger: { log: console.log } }*/null, condition.expected ); // Input is also validator
			NamespaceExport.assert.throws( bound_function, validator_function );
		}
	}
} );
DefaultExport.test( 'errorExpected:returns', function( t ){
	t.diagnostic( t.name );
	var test_matrix = {
		functions: {
			defaultExport: DefaultExport.errorExpected,
			namespaceExport: NamespaceExport.errorExpected,
			namedExport: errorExpected
		},
		conditions: {
			input_options_default: {
				args: [
					{
						instanceOf: TypeError,
						code: 'ERR_INVALID_ARG_TYPE'
					}
				],
				expected: true
			},
			functional: {
				args: [
					function( input ){
						if( input === 1 ){
							return true;
						} else{
							return false;
						}
					},
					1
				],
				expected: true
			}
		}
	};
	var error = new TypeError();
	error.code = 'ERR_INVALID_ARG_TYPE';
	test_matrix.conditions.input_options_default.args.push( error );
	for( const function_key of Object.keys( test_matrix.functions ) ){
		var input_function = test_matrix.functions[function_key];
		for( const condition_key of Object.keys( test_matrix.conditions ) ){
			t.diagnostic( `${t.name}:${function_key}:${condition_key}` );
			var condition = test_matrix.conditions[condition_key];
			var function_return = input_function.apply( null, condition.args );
			DefaultExport.assert.deepStrictEqual( function_return, condition.expected );
		}
	}
} );

// lib.test.js EOF

