const express = require('express')
const Router = express.Router()

const User = require('../models/user')



//@API http://localhost:7000/api/users
//@Desc Add new user
//@access public
Router.post('/', (req, res) => {
    const newUser = new User({ ...req.body })
    newUser.save()
        .then(user => res.status(200).json({ msg: 'successfuly added', user }))
        .catch(err => res.status(400).json(err))
})

//@API http://localhost:7000/api/users
//@Desc Get all users
//@access public
Router.get('/', (req, res) => {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => console.log(err))
})

//@API http://localhost:7000/api/users/:id
//@Desc Get user by id
//@access public
Router.get('/:_id', (req, res) => {
    // let id = req.params._id
    let { _id } = req.params
    User.find({ _id })
        .then(user => res.send(user))
        .catch(err => res.send(err))
})

//@API http://localhost:7000/api/users/:id
//@Desc Delete user by id
//@access public
Router.delete("/:_id", (req, res) => {
    let { _id } = req.params
    User.findByIdAndDelete(_id)
        .then(() => res.send("User has been deleted"))
        .catch(err => res.send(err))
})


//@API http://localhost:7000/api/users/:id
//@Desc Update user by id
//@access public
Router.put('/:_id', (req, res) => {
    let { _id } = req.params
    User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(() => res.send("User has been updated"))
        .catch(err => res.send(err))
})


module.exports = Router