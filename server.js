const express = require("express")
const colors = require("colors")
const cors = require("cors")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDb = require("./config/connectDb")

// config dot env file
dotenv.config();


//database call
connectDb();
//rest object
const app = express()

//middlewares 
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req,res) => {
    res.send('<h1>hello from server</h1>');
})

//port
const PORT = 8080 || process.env.PORT;

//listen server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})