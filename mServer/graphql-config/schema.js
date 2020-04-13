export const typeDefs = `
input userInput {
  name:String
  age: Int
}

input LoginInput{
  username: String!
  password: String!
}

type user {
  name: String
  _id: String
  age: Int
  token: String
}
type Query {
  user(name: String): [user]
  login(username: String!, password: String!): user
  getMySelf: user
  getInfomationAnother(_id: String): user
}

type Mutation {
  createUser(input: userInput): user
  updateUser(_id: String, age: Int): user
  register(info: LoginInput): user
}
`