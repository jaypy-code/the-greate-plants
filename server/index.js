const path = require('path'), fs = require('fs'), express = require('express');

const PORT = 3000, app = express();

const index = fs.readFileSync(path.resolve('build/index.html')).toString(),
    innerInedx = fs.readFileSync(path.resolve('server/innerIndex.html')).toString();

const html = index.replace('<div id="app"></div>', `<div id="app">${innerInedx}</div>`);

app.use(express.static('build'));

app.get('/', (req, res) => {
    res.send(html);
})

app.listen(PORT);