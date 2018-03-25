const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ab5aa17fd0e34ae157344ff11';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos); 
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo); 
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo); 
// }).catch((e) => console.log(e));

var userId = '5aade6518058c1991e6c6b2f';
User.findById(userId).then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
