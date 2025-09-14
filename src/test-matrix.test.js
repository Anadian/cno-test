#!/usr/bin/env node
/**
# [test-matrix.test.js](src/test-matrix.test.js)
> Testing the TestMatrix. This is going to get confusing.

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
	import Test from './lib.js'
	import TestMatrix from './test-matrix.js';
	//## Standard
	//## External
//# Constants
const FILENAME = 'test-matrix.test.js';
//## Errors

//# Global Variables
/**## Functions*/
Test.test( 'TestMatrix:constructor:returns', function( t ){
	t.diagnostic( t.name );
	var test_matrix = TestMatrix();
	test_matrix.addFunction( 'constructor', TestMatrix );
	test_matrix.addCondition( { name: 'essential', success: true, expected: ( value ) => { return TestMatrix.isTestMatrix( value ) } } );

	test_matrix.run();
} );

// test-matrix.test.js EOF

