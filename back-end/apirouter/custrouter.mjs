import express from "express";
import {addcustomer,deletecustomer} from '../db.mjs';
const customerRouter = express.Router();
customerRouter.post("/add", (req, res) => {
    addcustomer(req.body)
      .then((result) => {
        res.status(200).send({ STATUS: "data add is SUCCESSFULLY" });
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  customerRouter.delete("/:id", (req, res) => {
    deletecustomer(req.params.id)
      .then((result) => {
        if (result) {
          res.status(200).send({ STATUS: "data delete successfully " });
        } else {
          res.status(404).send({ STATUS: "id not found" });
        }
      })
      .catch((err) => res.send(500).send({ ERROR: err }));
  });
  export default customerRouter ;