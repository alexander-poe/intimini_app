require('babel-polyfill');
const express = require('express');
const bodyParser = require('body-parser');

const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;

console.log(`Server running in ${process.env.NODE_ENV} mode`);

const app = express();
const knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'intimini'
  },
});

app.use(bodyParser.json());

app.get('/users', (req, res) => {
	knex('users').select('id', 'username', 'password').then((users) => {
		return res.json({users});
	});
});

app.get('/entries', (req, res) => {
    knex('entries').select('id', 'mood', 'date', 'entry', 'user_id').then((entries) => {
        return res.json({entries})
    });
});

app.post('/users', (req, res) => {
    const body = req.body;
    console.log(body.the);
    knex.insert({id: 3, username: "dog", password: "im a dog"}).into('users').then(id => {
        console.log(id);
    })
    .finally(function() {
        knex.destroy();
    })
    return res.json({})
})


app.post('/entries', (req, res) => {
    const body = req.body;
    console.log(body.the);
    knex.insert({mood: "zaz", date: "12101201", entry: 'sheet', user_id: 2}).into('entries').then(id => {
        console.log(id);
    })
    .finally(function() {
        knex.destroy();
    })
    return res.json({})
})


app.use(express.static(process.env.CLIENT_PATH));

function runServer() {
    return new Promise((resolve, reject) => {
        app.listen(PORT, HOST, (err) => {
            if (err) {
                console.error(err);
                reject(err);
            }

            const host = HOST || 'localhost';
            console.log(`Listening on ${host}:${PORT}`);
        });
    });
}

if (require.main === module) {
    runServer();
}
