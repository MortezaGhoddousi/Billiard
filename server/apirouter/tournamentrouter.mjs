import express from "express";
import multer from "multer";
import {
    addtour,
    deletetour,
    updatecomp,
    gettour,
    addPlayer,
    getAllPlayers,
} from "../db.mjs";

const TournamentsRouter = express.Router();

TournamentsRouter.get("/register-player", async (req, res) => {
    try {
        const result = await getAllPlayers();

        if (!result || result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No players found",
                players: [],
            });
        }

        res.json({ success: true, players: result });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ success: false, message: "Database error" });
    }
});

const storage = multer.memoryStorage(); // Store image in memory as buffer
const upload = multer({ storage: storage });

TournamentsRouter.post(
    "/register-player",
    upload.single("photo"),
    (req, res) => {
        const { fullName, contactNumber } = req.body;
        const photoBuffer = req.file ? req.file.buffer : null;

        if (!fullName || !contactNumber) {
            return res
                .status(400)
                .json({ success: false, message: "Missing fields" });
        }

        addPlayer(fullName, contactNumber, photoBuffer)
            .then(() => {
                res.json({
                    success: true,
                    message: "Player added successfully",
                });
            })
            .catch(() => {
                res.status(500).json({
                    success: false,
                    message: "Database error",
                });
            });
    }
);

//
TournamentsRouter.post("/", (req, res) => {
    addtour(req.body)
        .then((result) => {
            res.status(200).send({ STATUS: "Data added successfully" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({
                ERROR: err.message || "Internal Server Error",
            });
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
export default TournamentsRouter;
