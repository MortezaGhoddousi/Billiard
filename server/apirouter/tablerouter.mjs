import express from "express";
import {
    gettable,
    getalltables,
    updatetable,
    deletetable,
    addtable,
} from "../db.mjs";

const tableRouter = express.Router();
tableRouter.get("/:id", (req, res) => {
    gettable(req.params.id)
        .then((result) => {
            if (result) {
                res.status(200).send(result);
            } else {
                res.status(404).send({ ERROR: "Phone not found" });
            }
        })
        .catch((err) => res.status(500).send({ ERROR: err }));
});

tableRouter.get("/", (req, res) => {
    getalltables(req.params.id)
        .then((result) => {
            if (result) {
                res.status(200).send(result);
            } else {
                res.status(404).send({ ERROR: "Phone not found" });
            }
        })
        .catch((err) => res.status(500).send({ ERROR: err }));
});

// addTABLE
tableRouter.post("/", (req, res) => {
    addtable(req.body)
        .then((result) => {
            res.status(200).send({ STATUS: "Data added successfully" });
        })
        .catch((err) => res.status(500).send({ ERROR: err }));
});

// deletetable
tableRouter.delete("/:id", (req, res) => {
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
// updatetable
tableRouter.put("/:id", (req, res) => {
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
export default tableRouter;
