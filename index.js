// Hoodie E-Mail worker.
// pickes up new emails, sends them via the
// `hoodie.sendEmail` API, and writes status
// back to email tasks
module.exports = function (hoodie, doneCallback) {

  hoodie.task.on('test:add', handleNewTest)

  function handleNewTest (dbName, test) {
    if (test.fail) {
      hoodie.task.error(dbName, test, {error: 'TestError', message: 'Test failed errored intentionally.'})
    } else {
      hoodie.task.success(dbName, test)
    }
  }

  doneCallback()
}
