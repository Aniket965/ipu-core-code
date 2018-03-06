# Ipu-core-code

> Core code finder for ipuresult

[![Build Status](https://travis-ci.org/Aniket965/ipu-core-code.svg?branch=master)](https://travis-ci.org/Aniket965/ipu-core-code)
## Usage

```js
const { findCode, findSHA256Code } = require('ipu-core-code')

const sha256Code = findSHA256Code("00451202716",18,3)
const code = findCode("00451202716",18,3)
```

## Development

```sh
$ git clone https://github.com/aniket965/ipu-core-code.git
$ cd ipu-core-code
$ npm install
```
## Testing

```sh
$ npm test
```

## License

MIT © [Aniket965](LICENSE)
