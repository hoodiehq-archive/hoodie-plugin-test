var boom = require('boom')

module.exports = function (hoodie, hoodieEvents, next) {
  hoodieEvents.on('server.api.plugin-request', function (request, reply) {
    if (request.method === 'options') return reply(boom.methodNotAllowed())
    reply({
      method: request.method,
      query: request.query,
      payload: request.payload
    })
  })
  next()
}
