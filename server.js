const express = require('express')
// import the index
const indexRouter = require('./routes/index')

const app = express()

app.use('/', indexRouter)

const server = app.listen(process.env.PORT || 3000,function (){
    console.log('Server running on port', server.address().port)

})
