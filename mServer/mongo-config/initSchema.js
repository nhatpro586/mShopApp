import mongoose from "mongoose"

let Schema = mongoose.Schema

let userSchema = new Schema({
    name: {
        type: String,
        unique: true // Unique index. If you specify `unique: true`
        // specifying `index: true` is optional if you do `unique: true`
      },
    age: Number,
    token: String,
    password: String,
})

export let userModel=mongoose.model('user',userSchema)

//Vinh 30
//Ti 24

//aa 30 null