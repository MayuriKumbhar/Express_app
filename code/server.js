//import express 

const express = require('express')

//create express app
const app = express()

//allow user to send the data
//used to read data from request body
//&convert it into js object
app.use(express.json())


//create the routes
const routerTask = require('./routes/task')
const routerAuth = require('./routes/auth') 
//add the routes
app.use(routerTask)
app.use(routerAuth)

//start app
app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
})