import express from "express";
const reservationRouter = express.Router();
import {
    getAllReserv,
    deletereserv,
    updateReservation,
    addreserv,
} from "../db.mjs";
reservationRouter.get("/checkall", (req, res) => {
    getAllReserv()
        .then((results) => {
            res.status(200).send(results);
        })
        .catch((err) => res.status(500).send({ ERROR: err }));
});
reservationRouter.delete("/:id", (req, res) => {
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

// updatereserv
reservationRouter.put("/:id", (req, res) => {
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
reservationRouter.post("/", (req, res) => {
    addreserv().then((results) => {
        res.status(200).send(results);
    });
    console
        .log("data errror")
        .catch((err) => res.status(500).send({ ERROR: err }));
});
export default reservationRouter;
