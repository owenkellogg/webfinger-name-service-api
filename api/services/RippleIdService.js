import superagent from 'superagent'
import bluebird from 'bluebird'
import UsernameNotFoundError from '../errors/UsernameNotFoundError'

const ID_SERVICE_URL = 'https://id.ripple.com/v1/authinfo'
const http = bluebird.promisifyAll(superagent)

export default class RippleIdService {

	static lookupName(name) {
		return new Promise((resolve, reject) => {
			let url = `${ID_SERVICE_URL}?username=${name}`

   		 	http
   		 		.get(url)
   		 		.endAsync()
				.then(resp => {
					if (resp.body.exists) {
					    resolve(resp.body)
					} else {
					    reject(new UsernameNotFoundError())
					}
				})
				.catch(reject)
		})
    }
}

