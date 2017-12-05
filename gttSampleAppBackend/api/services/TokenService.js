/**
 * Service used for generate and verify JWT token
 * @see https://jwt.io/
 * 
 * credits  :: https://github.com/ndabAP/vue-sails-example/blob/master/backend/api/services/TokenService.js
 */

const jwt = require('jsonwebtoken')
const tokenSecret = 'secretissecret'

module.exports = {

  /**
   * @param payload
   * @returns {*}
   */
  issue: payload => {
    return jwt.sign(payload, tokenSecret, {
      expiresIn: '7d'
    })
  },

  /**
   * @param token
   * @return {*}
   */
  verify: token => jwt.verify(token, tokenSecret)
}
