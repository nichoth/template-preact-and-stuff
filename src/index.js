var { h, render } = require('preact')
var connect = require('@nichoth/preact-connect')
var Bus = require('@nichoth/events')
var { struct } = require('./lib')
var View = require('./view')

var bus = Bus({ memo: true })
var state = struct({
    hello: 'world'
})

var _view = connect({ state, bus, view: View })
render(h(_view), document.getElementById('content'))

