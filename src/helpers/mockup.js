import React from 'react'
import Home from '../client/components/Home'
import {renderToString} from 'react-dom/server'
import Routes from '../client/routes'
import {StaticRouter} from 'react-router-dom'

const mockup = (content) => {
	return`<html>
	<head>
	<title>Website</title>
	<meta charset="utf-8" />
	<meta property="og:url"          content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
	<meta property="og:type"         content="article" />
	<meta property="og:title"        content="When Great Minds Don’t Think Alike" />
	<meta property="og:description"  content="How much does culture influence creative thinking?" />
	<meta property="og:image"        content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
	</head>
	<body>
		<div id="root">${content}</div>
		<script src="client.js"></script>
	</body>
	</html>`
}

module.exports = (req) => {
	let content = renderToString(
		<StaticRouter location={req.path} context={{}}>
			<Routes />
		</StaticRouter>
	)
	return mockup(content)
}