const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./Controller')


const app = express()
app.use(bodyParser.json())


const PORT = 9000
app.listen(PORT, () => console.log(`It's over ${PORT}!!!`))

app.get('/api/allcomics',ctrl.read);
app.post('/api/addcomics',ctrl.addComic);
app.put('/api/editcomics/:id',ctrl.editComic);
app.delete('/api/deletecomics/:id',ctrl.deleteComic)