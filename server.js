'use strict';

const express = require('express'),
    logger = require('morgan'),
    app = express();

const PORT = process.env.PORT || 3000;

app.set(logger('env'));
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'PlG'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en ${PORT}`);
});