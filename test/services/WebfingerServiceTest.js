import 'sails-test-helper'
import assert from 'assert'
import InvalidDomainError from '../../api/errors/InvalidDomainError'

describe('WebfingerService', () => {

	it('.lookup should respond to valid id.ripple.com resource', done => {

		let resource = 'acct%3AReginelli%40id.ripple.com'

		WebfingerService.lookup(resource).then(webfingerResponse => {

			assert.strictEqual(webfingerResponse.subject, "acct:Reginelli@id.ripple.com")
			done()
		})
	})

	it('.lookup should error with a non-id.ripple.com resource', done => {

		let resource = 'acct%3AReginelli%40invaliddomain.com'

		WebfingerService.lookup(resource).catch(error => {
			assert(error instanceof InvalidDomainError)	
			assert(error instanceof Error)	
			done()
		})
	})
})

