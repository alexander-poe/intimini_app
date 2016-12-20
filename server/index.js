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
app.use(express.static(process.env.CLIENT_PATH));

app.get('/users', (req, res) => {
    knex('users').select('id', 'username', 'password').then((users) => {
        return res.json({users});
    });
});

app.get('/entries/u', (req, res) => {
    knex('entries').select('mood', 'date', 'entry', 'user_id').then((entries) => {
        return res.json({entries})
    });
});

app.post('/users', (req, res) => {
    const body = req.body;
    console.log(body);
    knex.insert({username: body.username, password: body.password}).into('users').then(id => {
        console.log(id);
    })
    .finally(function() {
        knex.destroy();
    })
    return res.json({})
})


app.post('/entries', (req, res) => {
    const body = req.body;
    console.log(body);
    knex.insert({mood: body.mood, date: new Date(), entry: body.entry, user_id: body.user_id}).into('entries').then(id => {
        console.log(id);
    })
    .finally(function() {
        knex.destroy();
    })
    return res.json({})
    //better response objects ? status , id
})

app.put('/entries', (req, res) => {
    knex('entries').where({id: 1}).update({mood:"awesomestAF"}).then(count => {
        console.log(count);
    })
    .finally(function() {
        knex.destroy();
    })
    return res.json({})
})


app.put('/users', (req, res) => {
    knex('users').where({id: 3}).update({username:"djangoUnchained"}).then(count => {
        console.log(count);
    })
    .finally(function() {
        knex.destroy();
    })
    return res.json({})
})




app.delete('/users', (req, res) => {
    knex('users').where({id: 3, username: "dog", password: "im a dog"}).del().then(count => {
        console.log(count);
    })
     .finally(function() {
        knex.destroy();
    })
    return res.json({})
})

app.delete('/entries', (req, res) => {
    knex('entries').where({mood: "zaz", date: "12101201", entry: 'sheet', user_id: 2}).del().then(count => {
        console.log(count);
    })
     .finally(function() {
        knex.destroy();
    })
    return res.json({})
})



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
