'use strict';

const defaultConfig = {
	bem: {
		elemSeparator: '__',
		modifierSeparator: '_'
	},
	rules: {
		default( token ) {
			return `.${token}`;
		}
	}
};

export default defaultConfig;