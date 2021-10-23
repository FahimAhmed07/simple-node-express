const express = require('express');
const cors = require('cors')
const app = express();
const port = 5000;
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Wow im learning node yes!!! its really cool!!HUhhhh')
})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log("hitting", req.body)
    res.json(newUser)
})
const users = [
    { id: 0, name: "Ahmed", email: "Ahmed@gmail.com", phone: '0187777777777' },
    { id: 1, name: "Rahman", email: "Rahman@gmail.com", phone: '0187777777777' },
    { id: 2, name: "Khan", email: "Khan@gmail.com", phone: '0187777777777' },
    { id: 3, name: "Taluqdar", email: "Taluqdar@gmail.com", phone: '0187777777777' },
    { id: 4, name: "Chowdhory", email: "Chowdhory@gmail.com", phone: '0187777777777' }
]
app.get('/users', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})
app.listen(port, () => {
    console.log('listening to port', port)
})