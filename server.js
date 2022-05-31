const express = require('express')
const App = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

// Les middleware telecharger
App.use(cors(corsOptions))
App.use(morgan('dev'))
App.use(bodyParser.json())
App.use(bodyParser.urlencoded({ extended: true }))

//User api
App.use('/api/user', (req, res) => {
    res.send("je suis ici")
});

const port = 5000

// Lancement du server soite sur le port 5000 ou 3000
App.listen(port, () => {
    console.log(`Server is running on @localhost:${port}`);
})