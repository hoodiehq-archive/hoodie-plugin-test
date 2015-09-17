var boom = require('boom')

module.exports = function (hoodie, next) {
  hoodie.hooks.on(':request', function (request, reply) {
    if (request.method === 'options') return reply(boom.methodNotAllowed())
    reply({
      method: request.method,
      query: request.query,
      payload: request.payload
    })
  })

  next()
}
