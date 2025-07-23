// import dotenv

require('dotenv').config()

// import connection

require('./connection')

// import express

const express=require('express')

// import cors

const cors=require('cors')

// import router

const router=require('./router/router')

// create server

const todoserver= express() 

// server using cors

todoserver.use(cors())

// parse the data ->middleware to parse the data

todoserver.use(express.json())

// use

todoserver.use(router)

// port

const PORT = 4000 || process.env.PORT

// listen
todoserver.listen(PORT,()=>{
    console.log(`todoserver is running successfully in port number ${PORT}`);
    
})


todoserver.get('/',(req,res)=>{
    res.send('get request recieved')
})  
