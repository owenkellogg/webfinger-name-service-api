import querystring from 'querystring'
import InvalidDomainError from '../errors/InvalidDomainError'
import MissingResourceQueryParameterError from '../errors/MissingResourceQueryParameterError'
import InvalidResourceProtocolError from '../errors/InvalidResourceProtocolError'

export default class WebfingerService {

	static lookup(resource) {

		return new Promise((resolve, reject) => {

			if (!resource) {
				return reject(new MissingResourceQueryParameterError())
			}

			var query = querystring.unescape(resource)
	
			if (!query.match(/^acct:/)) {
				return reject(new InvalidResourceProtocolError())
			}

			var domain = query.split('@')[1]

			if (domain !== 'id.ripple.com') {
				return reject(new InvalidDomainError())
			}

			var name = (query.split(':')[1].split('@')[0])

			RippleIdService.lookupName(name).then(response => {

				return WebfingerResponseService.buildFromIdLookup(response)
			})
			.then(resolve)
			.catch(reject)
		})
	}
}

