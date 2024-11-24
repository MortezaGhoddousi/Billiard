import express from 'express';
const userRouter = express.Router();
import {adduser, deleteuser } from '../db.mjs'

userRouter.post('/' , (res, req )=> {
  adduser(req.body)
  .then((result)=> {res.status(200).send({status : 'data addded database'})})
  .catch(res.status(500).send({error : err}))
})

userRouter.delete("/:id" , (err , rew)=> {
  deleteuser(id)
  .then((result)=> {
    if(result)
    res.status(200).send({status : 'data delete database'})
  else {
    res.status(404).send({status : 'id not found'})
  }
  })
})

export default userRouter ;