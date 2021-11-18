var express = require('express');
var app = express();

// app.use(express.static(__dirname+ '/docs'));
// app.use( express.static(__dirname+ '/docs/09:20') );
// app.use( express.static(__dirname+ '/docs/premium-app-sample') );
app.use( express.static(__dirname+ '/docs/wizard') );

console.log('99999999' + __dirname);
app.listen(8080, () => console.log('Listening on 8080'));