exports.parse = function(node, state) {
	return require('./base').parse(node, state, parse);
};

function parse(node, state, args) {
	return { 
		parent: {
			node: node,
			symbol: args.symbol
		},
		styles: state.styles,
		code: require('./default').parse(node, state).code 
	};
};