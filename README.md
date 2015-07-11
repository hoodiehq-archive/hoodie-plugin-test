Hoodie Test Plugin
======================

> The simplest hoodie plugin. Good for playing with tasks

## Usage

```js
// start a task that will succeed
hoodie.test({foo: 'bar'}).done(function() { alert('works'); })
// start a task that will fail (add `fail` property)
hoodie.test({foo: 'bar', fail: true}).fail(function() { alert('works'); })
```

**NOTE:** This plugin is used in Hoodie’s CI tests
