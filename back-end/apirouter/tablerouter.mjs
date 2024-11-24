import express from "express";
import {
getall,
updatetable,
deletetable,
addtable,
} from "../db.mjs";
const tablerouter = express.Router();
tablerouter.get("/:id", (req, res) => {
    getall(req.params.id)
      .then((result) => {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(404).send({ ERROR: "Phone not found" });
        }
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  
  // addphone
  tablerouter.post("/", (req, res) => {
    addtable(req.body)
      .then((result) => {
        res.status(200).send({ STATUS: "Data added successfully" });
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  
  // deletephone
  tablerouter.delete("/:id", (req, res) => {
    deletetable(req.params.id)
      .then((result) => {
        if (result) {
          res.status(200).send({ STATUS: "Data deleted successfully" });
        } else {
          res.status(404).send({ ERROR: "Phone not found" });
        }
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  
  // updatePhone
  tablerouter.put("/:id", (req, res) => {
    updatetable(req.params.id, req.body.role)
      .then((result) => {
        if (result) {
          res.status(200).send({ STATUS: "Data updated successfully" });
        } else {
          res.status(404).send({ ERROR: "Phone not found for updating" });
        }
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  export default tablerouter ;