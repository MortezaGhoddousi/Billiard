import express from "express";
import multer from "multer";
import { addtour, deletetour, updatecomp, gettour, addPlayer } from "../db.mjs";

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

const storage = multer.memoryStorage(); // Store image in memory as buffer
const upload = multer({ storage: storage });

TournamentsRouter.post("/upload-image", upload.single("image"), (req, res) => {
    if (!req.file)
        return res
            .status(400)
            .json({ success: false, message: "No file uploaded" });

    const imageBuffer = req.file.buffer;

    addImage(imageBuffer)
        .then(() => {
            res.json({
                success: true,
                message: "Image uploaded successfully",
            });
        })
        .catch(() => {
            res.status(500).json({ success: false, message: "Database error" });
        });
});

TournamentsRouter.post("/add-player", (req, res) => {
    addPlayer(req.body)
        .then(() => {
            res.json({
                success: true,
                message: "Player added successfully",
            });
        })
        .catch(() => {
            res.status(500).json({ success: false, message: "Database error" });
        });
});

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
