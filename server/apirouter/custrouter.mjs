import express from "express";
import {
    addcustomer,
    deletecustomer,
    getcustomer,
    getAllCustomer,
} from "../db.mjs";
const customerRouter = express.Router();

//مشخصات مشتری و اضافه کردن اطلاعات
customerRouter.post("/add", (req, res) => {
    addcustomer(req.body)
        .then((result) => {
            res.status(200).send({ STATUS: "data add is SUCCESSFULLY" });
        })
        .catch((err) => res.status(500).send({ ERROR: err }));
});
//پاک کردن مشخصات مشتری
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

//دیدن تمام مشتری ها با ایدی
customerRouter.get("/id", (req, res) => {
    getcustomer(id)
        .then((result) => {
            if (result) {
                res.status(200).send({ STATUS: "data" });
            } else {
                res.status(404).send({ STATUS: "id is not found" });
            }
        })
        .catch((err) => res.send(500).send({ err: err }));
});
//دیدن تمام مشتری ها
customerRouter.get("/chek", (req, res) => {
    getAllCustomer()
        .then((result) => {
            res.status(200).send({ STATUS: "data" });
        })
        .catch((err) => {
            req.status(500).send({ Error: err });
        });
});
export default customerRouter;
