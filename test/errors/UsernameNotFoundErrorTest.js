import 'sails-test-helper'
import assert from 'assert'
import UsernameNotFoundError from '../../api/errors/UsernameNotFoundError'

describe('UsernameNotFoundError', () => {

	it('#constructor should return an instance of Error', () => {

		let error = new UsernameNotFoundError()

		assert(error instanceof Error)
		assert(error instanceof UsernameNotFoundError)
	})
})

