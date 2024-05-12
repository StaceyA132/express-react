// import express into our file
const express = require('express')

// create a new express application
const app = express()

// define the porrt our server will run on
const port = 3000

//define our server routes
app.get('/messsage', (req, res)=> {
    // something when the server processes this request

    // send back a response to the client
    res.send("server is operational")
})

app.get('/messsage', (req, res)=> {
    // something when the server processes this request

    // send back a response to the client
    res.send("hello from our server!")
})


/*run our server to listen a the port we defined
app.listen(port, ()=> {
    console.log('Server is running on port ${port}')
}) */