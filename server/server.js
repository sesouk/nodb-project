const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./Controller')
const axios = require('axios');
// const massive = require('massive');
const session = require('express-session');

require('dotenv').config();

const app = express()
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
}));
app.use(express.static(`${__dirname}/../build`));

const PORT = 9000
app.listen(PORT, () => console.log(`It's over ${PORT}!!!`))

app.get('/api/allcomics',ctrl.read);
app.post('/api/addcomics',ctrl.addComic);
// app.get('/api/filtercomics',ctrl.filterComic);
app.put('/api/editcomics/:id',ctrl.editComic);
app.delete('/api/deletecomics/:id',ctrl.deleteComic)

app.get('/auth/callback', (req, res) => {
    axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }).then(accessTokenResponse => {
        return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessTokenResponse.data.access_token}`).then(userInfoResponse => {
            const userData = userInfoResponse.data;
            req.session.user = userData;
            console.log('userData', userData);
            res.redirect('/')
        })
    }).catch(error => {
        res.status(500).json({ message: 'Major L fam...' });
        console.log('Server error', error);
    })
})

app.get('/api/user-data', (req, res) => {
    res.json({ user: req.session.user });
  });

app.post('/api/logout', (req, res) => {
    res.session.destroy();
    res.send()
});