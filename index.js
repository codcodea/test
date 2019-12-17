

const file = require('file-system');
const fs = require('fs');


const https = require('https')
const fetch = require('node-fetch')

const express = require('express');
const app = express();	
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server running at ${port}`))
app.use(express.static('public'));



app.get('/test',  (req, res)  => {


console.log("server gor request")
res.send("Server response: Bra Fredrik!!")

})

console.log("server test ok")
