import 'sails-test-helper'
import assert from 'assert'

describe('WebfingerResponseService', () => {

	it('.buildFromIdLookup should format an id lookup for webfinger', done => {

		let name = 'stevenzeiler'
		let address = 'r4EwBWxrx5HxYRyisfGzMto3AT8FZiYdWk'

		RippleIdService.lookupName(name).then(idResponse => {

			var webfingerResponse = WebfingerResponseService.buildFromIdLookup(idResponse)

			assert.strictEqual(webfingerResponse.subject, 'acct:stevenzeiler@id.ripple.com')
			assert(webfingerResponse.links instanceof Array)
			
			var rippleNameLink = _.find(webfingerResponse.links, link => {
				return link.rel === 'https://ripple.com/standards/webfinger#ripple-name'
			})

			let target = `acct:${name}@id.ripple.com`

			assert.strictEqual(rippleNameLink.href, target)

			var rippleAddressLink = _.find(webfingerResponse.links, link => {
				return link.rel === 'https://ripple.com/standards/webfinger#ripple-address'
			})

			assert.strictEqual(rippleAddressLink.href, `ripple:${address}`)

			done()
		})
	})
})

