# coingate-webfinger-service

Webfinger-based identity API

a [Sails](http://sailsjs.org) application

## Usage

````
npm install
npm start
````

````
GET /.well-known/webfinger?resource=bitcoin:12mJkMDet2NeofHXC7LTW9hnyqXU79nice@coingate.io

{
  "subject": "bitcoin:12mJkMDet2NeofHXC7LTW9hnyqXU79nice@coingate.io",
  "links": [
    {
      "rel": "https://ripple.com/standards/webfinger#ripple-address",
      "href": "ripple:78739355@r4EwBWxrx5HxYRyisfGzMto3AT8FZiYdWk"
    },
    {
      "rel": "https://coingate.io/standards/webfinger#bitcoin-address",
      "href": "bitcoin:12mJkMDet2NeofHXC7LTW9hnyqXU79nice"
    }
  ]
}
````

## Configuration

All configuration is done via the ENVIRONMENT:

PORT (default 1337)

## Errors

All errors are defined as subclasses of Error in /api/errors

- MissingResourceQueryParameter
- InvalidResourceProtocolError
- InvalidDomain
- UsernameNotFound

