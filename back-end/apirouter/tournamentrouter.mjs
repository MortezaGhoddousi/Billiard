import express from 'express';
import {addtour,
    deletetour,
    updatecomp,
    gettour} from "../db.mjs"
    const TournamentsRouter = express.Router();
    // 
TournamentsRouter.get("/:id", (req, res) => {
    gettour(req.params.id)
      .then((result) => {
        if (result) {
          res.status(200).send(result);
        } else {
          res.status(404).send({ ERROR: "Phone not found" });
        }
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  
  // 
  TournamentsRouter.post("/", (req, res) => {
    addtour(req.body)
      .then((result) => {
        res.status(200).send({ STATUS: "Data added successfully" });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ ERROR: err.message || "Internal Server Error" });
      });
  });
  
  
  // 
  TournamentsRouter.delete("/:id", (req, res) => {
    deletetour(req.params.id)
      .then((result) => {
        if (result) {
          res.status(200).send({ STATUS: "Data deleted successfully" });
        } else {
          res.status(404).send({ ERROR: "Phone not found" });
        }
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  
  
  // 
  TournamentsRouter.put("/:id", (req, res) => {
    updatecomp(req.params.id, req.body.role)
      .then((result) => {
        if (result) {
          res.status(200).send({ STATUS: "Data updated successfully" });
        } else {
          res.status(404).send({ ERROR: "Phone not found for updating" });
        }
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  export default TournamentsRouter ;