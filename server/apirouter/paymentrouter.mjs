import express from "express";
const paymentsRouter = express.Router();
import { getallpay, addpayments, deletepayments, getpayments } from "../db.mjs";

//چک کردن تمام پرداخت ها
paymentsRouter.get("/checkall", (req, res) => {
    getallpay()
        .then((results) => {
            res.status(200).send(results);
        })
        .catch((err) => res.status(500).send({ ERROR: err }));
});

//اضافه کردن پرداخت

paymentsRouter.post("/", (req, res) => {
    addpayments(req.body)
        .then((result) => {
            res.status(200).send({ STATUS: "Data added successfully" });
        })
        .catch((err) => res.status(500).send({ ERROR: err }));
});

//پاک کردن پرداخت

paymentsRouter.delete("/:id", (req, res) => {
    deletepayments(req.params.id)
        .then((result) => {
            if (result) {
                res.status(200).send({ STATUS: "Data deleted successfully" });
            } else {
                res.status(404).send({ ERROR: "payments not found" });
            }
        })
        .catch((err) => res.status(500).send({ ERROR: err }));
});

//دیدن پرداخت با استفاده از ایدی

paymentsRouter.get("/:id", (req, res) => {
    getpayments(req.params.id)
        .then((result) => {
            if (result) {
                res.status(200).send(result);
            } else {
                res.status(404).send({ ERROR: "payments not found" });
            }
        })
        .catch((err) => res.status(500).send({ ERROR: err }));
});
export default paymentsRouter;
