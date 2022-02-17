const express = require('express')

const router = express.Router()
const db = require('../db')
//import crypto-js for encrypt password
const cryptoJs = require('crypto-js')

router.get('/auth/all', (request,response)=>{
    const query='select * from Auth'
    db.execute(query, (error,result)=>{
        if(error)
        {
            console.log(error);
        }
        else{
            console.log(result);
        }
        response.send('done')
    });
})

router.post('/auth/signup', (request, response) => {
    //get body parameters
    //console.log(request.body)

    //extracting the keys from request body
    const {firstName, lastName, email, password} = request.body
   
    const encryptedPassword = '' + cryptoJs.MD5(password)
   
    const query = `insert into Auth (firstName, lastName, email, password) values(?, ?, ?, ?)`
    const params = [firstName, lastName, email, encryptedPassword]
    db.execute(query, params, (error, result) => {
       if (error) {
           console.log(error)
       } else {
           console.log(result)
       }

       response.send('done')
    })
   
})

router.post('/auth/signin', (request, response) => {
   
    const { email, password} = request.body
    const encryptedPassword = '' + cryptoJs.MD5(password)
    console.log(`user: ` +email)
    console.log(`password: ` +encryptedPassword)
    const query = `select * from Auth where email = ? and password = ?`
    const params = [email, encryptedPassword]

    db.execute(query, params, (error, users) => {
        if (error) {
            console.log(error)
            response.send('error')
        } else {
            console.log(users)
            if (users.length == 0) {
                response.send('user does not exist')
            } else {
                response.send(users[0])
            }
        }

    } )
})

router.get('/auth/profile/:id',(request,response)=>{
    
    const{ id }=request.params
    const query ='select * from Auth where id = ?'
    const params=[id]

    db.execute(query,params,(error,result)=>{
        if(error)
        {
            console.log("No Data:"+error)
            response.send("No data")
        }
        else
        {
            response.send(result)
        }
    })
})
module.exports = router