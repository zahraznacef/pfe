// Create server
const express = require('express');
app = express();


// Run DataBase
const db = require('./Config/db');
db();


// Run Cors
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Run Auth
const Auth = require('./Auth/AuthRoutes');
app.use('/app',Auth)

// Run User
const User = require('./User/UserRoutes');
app.use('/app',User)

// Run Contact
const Contact = require('./Contact/ContactRoutes');
app.use('/app',Contact)

// Run Lawyers
const Lawyer = require('./Lawyers/LawyersRoutes');
app.use('/app',Lawyer)


// env file
const dotenv = require('dotenv');
dotenv.config();

// call port from env
const PORT = process.env.PORT;


// Run server
app.listen(PORT, () => {
    try 
    {
        console.log(`Server is running ${PORT}`);
    }

    catch (err) 
    {
        console.log('Server Failed')
    }

})