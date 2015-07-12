import 'sails-test-helper'
import assert from 'assert'
import UsernameNotFoundError from '../../api/errors/UsernameNotFoundError'

describe('RippleIdService', () => {

	it('#lookupName should return an address for valid name', done => {

		let name = 'stevenzeiler'
		let targetAddress = 'r4EwBWxrx5HxYRyisfGzMto3AT8FZiYdWk'

		RippleIdService.lookupName(name).then(record => {
			assert(record.exists)
			assert.strictEqual(record.username, name)
			assert.strictEqual(record.address, targetAddress)
			done()
		})
	})

	it('#lookupName should return an address for another valid name', done => {

		let name = 'Reginelli'
		let targetAddress = 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn'

		RippleIdService.lookupName(name).then(record => {
			assert(record.exists)
			assert.strictEqual(record.username, name)
			assert.strictEqual(record.address, targetAddress)
			done()
		})
	})

	it('#lookupName should throw UsernameNotFoundError', done => {
	
		let name = 'lkjasldkjlkjwelrkjelrkj'

		RippleIdService.lookupName(name)
			.catch(error => {
				assert(error instanceof Error)
				assert(error instanceof UsernameNotFoundError)
				done()
			})
	})
})
