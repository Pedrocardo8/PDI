const express = require('express');
const apiRouter = require('./routes');
var cors = require('cors');
const app = express();
app.use(cors())


app.use(express.json());

app.use('/api/budget', apiRouter)

app.listen(process.env.PORT || '5000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '5000'}`)

});