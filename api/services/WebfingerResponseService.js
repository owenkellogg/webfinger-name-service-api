
export default class WebfingerResponseService {

	static buildFromIdLookup(idResponse) {
	
		return {
			"subject": `acct:${idResponse.username}@id.ripple.com`,
			"links": [
				{
					"rel": "https://ripple.com/standards/webfinger#ripple-address",
					"href": `ripple:${idResponse.address}`
				},
				{
					"rel": "https://ripple.com/standards/webfinger#ripple-name",
					"href": `acct:${idResponse.username}@id.ripple.com`
				}
			]
		}
    }
}
