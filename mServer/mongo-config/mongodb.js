import mongoose from 'mongoose'
mongoose.connect('mongodb://my_user:password123@localhost:27017/my_database', {useNewUrlParser: true});


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("successful connect")

});
// const schema=mongoose.schema,
// const ObjectID = schema.ObjectID,

// const blogPost = new Schema({
//     author: ObjectID,
//     title:String,
//     body: String,
//     date: Date,
// });

// const comment = new schema({
//     name: {type:String, default: 'anonymous'},
//     age: {type: Number, min:15, index:true},
//     date: {type:Date, default: Date.now},
//     buff:Buffer
// })
