const express = require('express')

const router =express.Router()
const db = require('../db')


router.get('/task', (request, response) => {
    const query =`select * from Task`
    const params=[]
    db.execute(query,params,(error,result)=>{
        if(error)
        {
            response.send(error)
        }
        else
        {
            response.send(result)
        }
    
    })
})


router.get('/task/:id', (request, response) => {
    const{ id }=request.params
    const query =`select * from Task where id= ${id}`
    const params=[]
    db.execute(query,params,(error,result)=>{
        if(error)
        {
            response.send(error)
        }
        else
        {
            response.send(result)
        }
    })
})


router.post('/task', (request, response) => {
    const{ title, auth_id, content }=request.body
    const query =`insert into Task (title, auth_id, content) values (?,?,?)`
    const params=[ title, auth_id, content]
    db.execute(query,params,(error,result)=>{
        if(error)
        {
            response.send(error)
        }
        else
        {
            response.send(result)
        }
    
    })
})




router.put('/task/:id/status', (request, response) => {
    console.log('update task')
    response.send()
})




//export router and use it in server.js
module.exports = router