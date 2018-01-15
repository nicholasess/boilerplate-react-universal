import express from 'express'
const app = express();
// const cors = require('cors')
// const compression = require('compression');
const Mockup = require('./helpers/mockup')
// app.use(cors())
// app.use(compression())
app.use(express.static('build'))

app.get('*', (req, res) => {
	return res.send(Mockup(req))
})

app.listen(3000, () => {
	console.log('Listen port 3000')
})