const alert = require('./index.js')

alert({
    type: "success",
    msg: "hello world",
    name: 'done'
})
alert({type: "error",msg: "hello world"})
alert({type: "warning",msg: "hello world"})
alert({type: "info",msg: "hello world"})
alert({type: "info",msg: "hello world", name: "remember"})
alert()