'use strict';

class SelectorEngine {
	constructor( converter ) {
		this.converter = converter;
	}

	find( selector, context = document ) {
		const convertedSelector = this.converter.convert( selector );
		const result = {
			selector: convertedSelector
		};
		let cssSelector = convertedSelector.CSS;
		let tmpId = false;

		if ( context !== document ) {
			if ( !context.id ) {
				tmpId = true;
				context.id = `BEMQueryTMP_${Date.now()}`;
			}

			cssSelector = `#${context.id} ${cssSelector}`;
		}

		result.elements = Array.from( context.querySelectorAll( cssSelector ) );

		if ( tmpId ) {
			context.removeAttribute( 'id' );
		}

		return result;
	}
}

export default SelectorEngine;