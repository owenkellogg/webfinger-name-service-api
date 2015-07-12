import 'sails-test-helper'
import assert from 'assert'

describe('WebfingerController', () => {

	it('#show should return the correct address for a valid name', done => {

		const url = "/.well-known/webfinger?resource=acct%3Astevenzeiler%40id.ripple.com"

		request
			.get(url)
			.end((err, resp) => {
				assert.strictEqual(resp.body.subject, "acct:stevenzeiler@id.ripple.com")
				assert(resp.body.links instanceof Array)
				done()
			})
	})

	it('#show should return an error for an invalid address', done => {

		const url = "/.well-known/webfinger?resource=acct%3AReginkkekeiooooeeoeoeodkxkxkelli%40id.ripple.com"

		request
			.get(url)
			.end((err, resp) => {
				assert.strictEqual(resp.statusCode, 400)
				done()
			})
	})

	it('#show should return error without "resource" query parameter', done => {

		const url = '/.well-known/webfinger'

		request
			.get(url)
			.end((err, resp) => {
				assert.strictEqual(resp.statusCode, 400)
				assert.strictEqual(resp.body.error.message, 'MissingResourceQueryParameter')
				done()
			})
	}) 


	it('#show should return error with invalid "resource" protocol', done => {

		const url = '/.well-known/webfinger?resource=ucrt:stevenzeiler@id.ripple.com'

		request
			.get(url)
			.end((err, resp) => {
				assert.strictEqual(resp.statusCode, 400)
				assert.strictEqual(resp.body.error.message, 'InvalidResourceProtocolError')
				done()
			})
	}) 

})

