import express from 'express' ;
const reservationrouter = express.Router();
import {reserveTable,
        deletereserv,
        updateReservation} from '../db.mjs';
reservationrouter.get("/checkall", (req, res) => {
reserveTable()
    .then((results) => {
    res.status(200).send(results);
        })
    .catch((err) => res.status(500).send({ ERROR: err }))
});
reservationrouter.delete("/:id", (req, res) => {
    deletereserv(req.params.id)
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
  reservationrouter.put("/:id", (req, res) => {
    updateReservation(req.params.id, req.body.role)
      .then((result) => {
        if (result) {
          res.status(200).send({ STATUS: "Data updated successfully" });
        } else {
          res.status(404).send({ ERROR: "Phone not found for updating" });
        }
      })
      .catch((err) => res.status(500).send({ ERROR: err }));
  });
  export default reservationrouter ;