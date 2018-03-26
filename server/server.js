const express = require('express')
const bodyParser = require('body-parser')
const PORT = 9000
const Comics = require('./Controller')

const app = express()
app.use(bodyParser.json())


app.listen(PORT, () => console.log(`It's over ${PORT}!!!`))

app.get('/api/allcomics',Comics.read);
app.post('/api/addcomics',Comics.addComic);
app.get('/api/filtercomics',Comics.filterComic);
app.put('/api/editcomics/:id',Comics.editComic);
app.delete('/api/deletecomics/:id',Comics.deleteComic)