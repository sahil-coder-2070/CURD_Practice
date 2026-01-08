import express from "express";
import users from "./MOCK_DATA.json" with { type: "json" };
import fs from "fs"

const app = express();
const port = 8000

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get('/api/users', (req, res) => {
    res.send(users)
})
app.get('/api/users/:id', (req, res) => {
    const Id = Number(req.params.id);
    const user = users.find(u => u.id === Id)
    return res.json(user)
})
app.post('/api/users', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        return res.json({ status: "user created", id: users.length });
    })
})

app.delete('/api/users/:id', (req, res) => {
    const Id = Number(req.params.id)
    const user = users.findIndex(u => u.id === Id)
    users.splice(user, 1)
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        return res.json({ status: "deleted" })
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})