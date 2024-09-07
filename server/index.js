require("dotenv").config()
const { error } = require("console")
const http =require("http")

const app = require("./src/config/express.config")

const server = http.createServer(app)
//port no 0 -2^16-1=>100 poorts well known
//(port, localhost ip,(error)) 
const port =process.env.PORT || 9000
server.listen(port,'127.0.0.1',(error)=>{
    if(error) {
        console.log("server error..")
    }else {
        console.log("server is running on port:"+port)
        console.log("press ctrl+c to discontinue server")
    }
} )