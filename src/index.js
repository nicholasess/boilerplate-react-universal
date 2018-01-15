const express = require('express')
const React = require('react')
const renderToString = require('react-dom/server').renderToString
const App = require('./client/components/App').default
const app = express();
// const cors = require('cors')
// const compression = require('compression');
const Mockup = require('./helpers/mockup')
// app.use(cors())
// app.use(compression())
app.use(express.static('build/client'))

app.get('*', (req, res) => {
	let content = Mockup(renderToString(<App />))
	return res.send(content)
})

app.listen(3000, () => {
	console.log('Listen port 3000')
})