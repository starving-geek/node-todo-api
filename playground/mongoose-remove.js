const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5ac33e4d34de3791dc22e632').then((todo) => {
    console.log(todo);
});

// Todo.findOneAndRemove({_id: '5ac33e4d34de3791dc22e632'}).then((todo) => {

// });