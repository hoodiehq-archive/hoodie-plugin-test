module.exports = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/test/route',
    handler: function (request, reply) {
      reply({ok: true})
    }
  })
  next()
}
