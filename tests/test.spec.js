'use strict';

// you can require your modules here
// webpack preprocessor will handle that!
var index = require('../index');

describe('Some test', function(){
	it('should check something', function(){
		expect(Object.create).toBeDefined();
	});
});