
export default class InvalidDomainError extends Error {

	constructor(domain) {
		super()
		this.message = 'InvalidDomain'
	}
}

