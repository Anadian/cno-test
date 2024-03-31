#!/usr/bin/env node
/**
# [lib.js](src/lib.js)
> cno-test: Micropackage: a simple, ultra-minimal test framework built around Node's builtin test runner.

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
	//## Standard
	import Test from 'node:test';
	import Assert from 'node:assert/strict';
	//## External
//# Constants
const FILENAME = 'lib.js';
//## Errors

//# Global Variables
/**## Functions*/
/**
### errorExpected
> Returns `true` if `received_error` matches `expected_error`; `false` otherwise.

#### Parametres
| name | type | description |
| --- | --- | --- |
| expected_error | Error | The error expected. \[default: { instanceOf: TypeError, code: 'ERR_INVALID_ARG_TYPE' }\] |
| received_error | Error | The error actually received.  |

#### Returns
| type | description |
| --- | --- |
| boolean | `true` if the errors match. |

#### History
| version | change |
| --- | --- |
| 0.0.1 | WIP |
*/
function errorExpected( expected_error = { instanceOf: TypeError, code: 'ERR_INVALID_ARG_TYPE' }, received_error ){
	const FUNCTION_NAME = 'errorExpected';
	// Variables
	var arguments_array = Array.from(arguments);
	var _return = false;
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `received: ${arguments_array}`});
	// Parametre checks
	// Function
	if( received_error instanceof expected_error.instanceOf ){
		if( received_error.code === expected_error.code ){
			_return = true;
		}
	}
	// Return
	this?.logger?.log({file: FILENAME, function: FUNCTION_NAME, level: 'debug', message: `returned: ${_return}`});
	if( _return !== true ){
		return Assert.fail(`received: ${JSON.stringify( received_error, null, '\t' )}\nexpected:${JSON.stringify( expected_error, null, '\t' )}\n`);
	}
	return _return;
} // errorExpected

const NAMESPACE = { errorExpected: errorExpected, test: Test, assert: Assert };
export { NAMESPACE as default, errorExpected, Test as test, Assert as assert };

// lib.js EOF

