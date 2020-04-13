import {userModel} from '../mongo-config/initSchema.js'
import { EXIST_USER_ERROR_CODE, SECRET_KEY } from '../constants.js'
import sha256 from 'js-sha256'
var jwt = require('jsonwebtoken');

export const resolvers = {
  user:(parent, param, context) => {
    console.log(JSON.stringify(parent))
    return null
  },

  Query: {
    user:async(parent,param,context) => {
      const getUsers = await userModel.find({name: param.name})
      return getUsers
    },
    getMySelf:async (_, param, context) => {
      console.log("get my self" , context.user)
      let user = context.user
    
      return user;
    },
    getInfomationAnother: async(_,param , context) =>{
      const user = context.user;
        const userFind= await userModel.findById(param._id)
        if(userFind === user._id){
          return user
        } else{
           userFind.token = null
        }
        return userFind
    },
    login: async(_, param, context) =>{
      const existUser = await userModel
      .findOne({name: param.username, password: sha256(param.password)})
      if(!existUser){
        throw "ko co user"
      }

      const token = jwt.sign({
        exp: Math.floor(Date.now()/1000) + (6000),
        data: {
          name: "ti",
          email: "test@gmail.com"
        }
      }, SECRET_KEY);

      const updatedUser = await userModel.updateOne(
        {name: param.username}, 
        {token: token}).catch(
        e => console.log(e)
      )
      
      return await userModel.findById(existUser._id)
    }
  },

  Mutation: {
    createUser:async (parent, param, context) => {
      const model = await userModel.create(param.input)
      return model
    },
    updateUser:async(parent, param, context) => {
      console.log(param)
      const updateUser = await userModel.findByIdAndUpdate(param._id, {age: param.age})
      return updateUser
    },
    register: async (_, param)=>{
        const existUser = await userModel.findOne({name: param.info.username})
        if(existUser){
          throw new Error(422)
        }
        const userCreate = {
          name: param.info.username,
          password: sha256(param.info.password)
        }

       return await userModel.create(userCreate)
    }
  }
}