'use strict';

import Selector from './Selector';
import defaultConfig from './defaultConfig';

function convertToken( tokens, config, selector = '' ) {
	const rules = config.rules;
	const delimiter = tokens.shift();
	let rule;
	let token;

	if ( !delimiter ) {
		return selector;
	} else if ( !selector ) {
		token = delimiter;
		rule = rules.default;
	} else {
		token = tokens.shift();
		rule = rules[ delimiter ];
	}

	if ( typeof rule !== 'function' ) {
		throw new SyntaxError( 'Malfored BEM rule' );
	}

	selector += rule( token, config, selector );

	return convertToken( tokens, config, selector );
}

function convert( selector, config ) {
	const rules = Object.keys( config.rules ).filter( ( rule ) => {
		return rule !== 'default';
	} );

	const splitRule = new RegExp( `(${rules.join( '|' )})`, 'g' );

	const splittedSelector = selector.split( splitRule );

	selector = convertToken( splittedSelector, config );

	return selector;
}

class Converter {
	constructor( config = defaultConfig ) {
		this.config = config;
	}

	convert( selector ) {
		const convertedSelector = convert( selector, this.config );

		return new Selector( selector, convertedSelector );
	}
}

export default Converter;