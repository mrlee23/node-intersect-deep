let oneMocha = require('one-mocha'),
	intersectDeep = require('./index.js');

oneMocha([
	{
		method: intersectDeep,
		name: 'intersectDeep',
		test: [
			{
				assert: 'deepEqual',
				args: [
					[
						{
							a: 'hi',
							c: 'hi',
							d: 'hi'
						},
						{
							a: 'hey',
							b: 'hey'
						},
						{
							a: 'ho',
							b: 'ho',
							c: 'ho'
						},
						{
							a: 'ho'
						}
					],
					[
						{
							a: 'hi',
							b: {
								a: 'a',
								b: 'b',
								c: 'c'
							}
						},
						{
							a: 'hey',
							b: {
								a: 'aa',
								b: 'bb',
								c: 'cc'
							}
						},
						{
							a: 'ho',
							b: {
								a: 'abcd'
							}
						},
						{
							a: 'ho',
							b: {
								a: 'abcd'
							}
						}
					],
					[
						{
							a: undefined
						},
						{
							a: undefined
						},
						{
							a: undefined
						}
					],
					[
						{
							a: 1
						},
						{
							a: {
								b: 'c',
								d: 'e'
							}
						},
						{}
					],
					[
						{
							a: ['a', 'b']
						},
						{
							a: ['c', 'd']
						},
						{
							a: ['c', 'd']
						}
					],
					[
						{
							a: 1
						},
						{
							a: ['c', 'd']
						},
						{}
					]
				]
			}
		]
	}
]);
