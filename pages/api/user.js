// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { CreateUser } from "../../server/controller/Users"

export default async(req, res) => {

  console.log(req.body)
  const {name , password , email , phoneNumber} = req.body

  const data = await CreateUser({name , password , email , phoneNumber})

  res.status(200).json(data)
}
