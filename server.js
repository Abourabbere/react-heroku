const express = require('express')
const App = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const corsOptions = {
    origin: '*',
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'method': 'POST,HEAD,PUT,GET,PATCH,DELETE',
    'preflightContinue': false
}

// Les middleware telecharger
App.use(cors(corsOptions))
App.use(morgan('dev'))
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: true }))

//User api
App.use('/', (req, res) => {
    res.send("je suis ici")
});

const port = 5500

// Lancement du server soite sur le port 5000 ou 3000
App.listen(port, () => {
    console.log(`Server is running on @localhost:${port}`);
})