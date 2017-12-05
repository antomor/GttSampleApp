/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function login(req, res) {
  let {
    name,
    password
  } = req.allParams()

  User
    .findOne({
      name: name
    })
    .exec((error, user) => {
      if (error) return res.serverError(error)
      if (!user) return res.forbidden()

      User
        .checkIfPasswordIsValid(password, user, (error, isValid) => {
          if (error) return res.serverError(error)
          if (!isValid) return res.forbidden()

          sails.log.info('User logged in', user)

          let encryptedId = CryptographyService.encrypt(user.id)

          return res.json({
            token: TokenService.issue({
              id: user.id
            }),

            cookie: encryptedId
          })
        })
    })
}

function register(req, res) {
  let {
    name,
    password
  } = req.allParams()

  User
    .create({
      name,
      password
    })
    .exec((error, user) => {
      if (error) return res.serverError(error)

      sails.log.info('Created user', user)

      if (user) return res.ok()
    })
}

module.exports = {
  login: login,
  register: register
};
