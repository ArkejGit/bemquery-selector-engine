'use strict';

class Selector {
	constructor( BEM, CSS ) {
		this.BEM = BEM;
		this.CSS = CSS;

		Object.freeze( this );
	}
}

export default Selector;