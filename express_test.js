const express = require('express')
const logger  = require('morgan')
const app = express()


const mw = (req, res, next) => {
    //throw Error('error!')
    next()
}

const errorMw = (err, req, res, next) => {
    console.log(err.message)
}


/*const mw = (req, res, next) => {
    console.log('mw!')
    next()
}
const mw2 = (req, res, next) => {
    console.log('mw2!')
    next()
}
*/

//app.use(mw)
//app.use(mw2)
app.use(logger('dev'))
app.use(mw)
app.use(errorMw)


app.listen(3000, () => console.log('running'))