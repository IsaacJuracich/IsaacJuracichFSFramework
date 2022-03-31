module.exports = function () {
  const generateApiKey = require('generate-api-key')
  const bcrypt = require('bcrypt')

  return {
    genKey: function genKey(method, length, pool) {
      const key = generateApiKey({
        method: method,
        length: length,
        pool: pool,
      })
      return key
    },
    genKeys: function genKeys(method, length, pool, amount) {
      const keys = generateApiKey({
        method: method,
        length: length,
        pool: pool,
        batch: amount,
      })
      return keys
    },
    hasKey: function hasKey(key) {
      return bcrypt.hash(key, 10)
    },
    doesKeyMatch: function doesKeyMatch(text, hash) {
      return bcrypt.compare(text, hash)
    },
  }
}
