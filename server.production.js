var express = require('express');
var path = require('path');
var history = require('connect-history-api-fallback');

var app = express();
app.use(history());

var port = process.env.PORT || 8083;


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/dist')));
}

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/dist/index.html')));

app.listen(port);
console.log('server started '+ port); // eslint-disable-line
