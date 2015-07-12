
export default class MissingResourceQueryParameterError extends Error {

	constructor() {
		super()
		this.message = 'MissingResourceQueryParameter'
	}
}
