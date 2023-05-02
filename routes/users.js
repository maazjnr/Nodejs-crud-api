import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';
uuidv4()

let users = [

    {
        firstName: " Maaz",
        lastName:  "Ishaq",
        age: 20
    },

    {
        firstName: "Raheem",
        lastName: "Izzy",
        age: 25
    }
 
]

router.get('/', (req, res) => {
    res.send(users)
    console.log(users)
})

router.post('/', (req, res) => {

    const user = req.body;
    users.push({...user, id: uuidv4()});

    res.send(`user with the name ${user.firstName} added to the database `)
})

router.get("/:id", (req, res) => {

    const {id} = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)

})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id)
    res.send(`user with the ${id} was removed from the database`);
})


export default router;
