var express = require('express'),
    path = require('path'),
    app = express(),
    api = require('./data/api');

var port = process.env.PORT || 3000;

app.set('port', port);


// Serve static files (i.e. images, scripts, styles, templates) from public/ directory
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// JSON API
app.get('/api/name', api.name);

// Catch all
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'templates', '404.html'));
});

app.listen(app.get('port'), function () {
    console.log('Your app is listening on port ' + app.get('port'));
});
