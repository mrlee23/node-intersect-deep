let _ = require('lodash'),
	objectDeep = require('object-deep');
function intersectDeep (...args) {
	args.forEach((arg, i) => {
		if (!_.isPlainObject(arg))
			throw new Error(`'${i}'th argument is not an object type.`);
	});

	let mergedObj = {},
		retObj = {},
		lastArg = args.pop();
	args.push(_.cloneDeep(lastArg));
	args.reverse();
	mergedObj = _.defaultsDeep.apply(null, args);
	args[0] = lastArg;

	objectDeep.each(mergedObj, (value, path) => {
		if (args.every(arg => _.has(arg, path))) {
			_.set(retObj, path, value);
		}
	});
	return retObj;
}
module.exports = intersectDeep;
