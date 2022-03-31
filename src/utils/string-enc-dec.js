module.exports = function () {
  const {encode, decode} = require('string-encode-decode')
  return {
    enc: function enc(str) {
      return encode(str)
    },
    dec: function dec(str) {
      return decode(str)
    },
  }
}
