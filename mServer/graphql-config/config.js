import { userModel } from "../mongo-config/initSchema"
import { SECRET_KEY } from "../constants";
import { resolvers } from "./resolver";
var jwt = require('jsonwebtoken');

export const getUser = async(token) => {
   const getToken = token.split(" ")[1];
   return await userModel.findOne({token: getToken})
}

export const verifyToken = (token) => {
   return new Promise((resolve , reject)=> {
      try {
         const getToken = token.split(" ")[1];
   
         var decoded = jwt.verify(getToken, SECRET_KEY);
         console.log("token dung")
         resolve(true)
         //no research
       } catch(err) {
         console.log("sai " +err)
         // err
         reject(new Error("invalid"))
       }
   })
}