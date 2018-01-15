module.exports = (content) => {
	return`<html>
	<head>
	<title>Website</title>
	</head>
	<body>
		<div id="root">${content}</div>
		<script src="client.js"></script>
	</body>
	</html>`
}