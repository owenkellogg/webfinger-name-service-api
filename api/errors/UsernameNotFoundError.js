
export default class UsernameNotFoundError extends Error {

	constructor() {
		super()
		this.message = 'UsernameNotFound'
	}
}

