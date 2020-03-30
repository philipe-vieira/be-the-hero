const crypto = require('crypto');

module.exports= function generateUniqueid() {
    return crypto.randomBytes(8).toString('HEX')
  }