'use strict';

import SelectorEngine from './SelectorEngine';
import Converter from './converter/Converter';
import defaultConverterConfig from './converter/defaultConfig';

function factory( converterConfig = defaultConverterConfig ) {
	const converter = new Converter( converterConfig );
	const selectorEngine = new SelectorEngine( converter );

	return selectorEngine;
}

export default factory;