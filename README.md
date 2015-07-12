# webfinger-name-service

Webfinger-based identity API

a [Sails](http://sailsjs.org) application

## Usage

````
npm install
npm start
````

````
GET /.well-known/webfinger?resource=acct:stevenzeiler@id.ripple.com

{
  "subject": "acct:stevenzeiler@id.ripple.com",
  "links": [
    {
      "rel": "https://ripple.com/standards/webfinger#ripple-address",
      "href": "ripple:r4EwBWxrx5HxYRyisfGzMto3AT8FZiYdWk"
    },
    {
      "rel": "https://ripple.com/standards/webfinger#ripple-name",
      "href": "acct:stevenzeiler@id.ripple.com"
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

