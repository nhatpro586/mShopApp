import dotenv from 'dotenv'
const result = dotenv.config()

if (result.error) {
  throw result.error
}

import mongoose from 'mongoose'

console.log("==== ", process.env.DB_HOST)

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/${process.env.DB_NAME}`, {useNewUrlParser: true});


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
