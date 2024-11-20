import express from "express"
import bodyParser from "body-parser"


var app = express.Router();

  userRouter.post('/' , (res , req) => {
      userRouter(req.body)
    .then((result) => {
        res.status(200).send({STATUS : 'user add SUCCESSFULLY"'})
    })
    }).catch((err) => {
        err.sttus(500).send({error :err})      
    });   

    userRouter.delete("/:id", (req, res) => {
      userRouter(req.params.id)
          .then((result) => {
            if (result) {
              res.status(200).send({ STATUS: "data delete successfully " });
            } else {
              res.status(404).send({ STATUS: "id not found" });
            }
          })
          .catch((err) => res.send(500).send({ ERROR: err }));
      });

      export default userRouter ;