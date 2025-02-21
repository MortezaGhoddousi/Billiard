import express from "express";
import bodyParser from "body-parser";
import userRouter from "./apiRouter/userRouter.mjs";
import customerRouter from "./apiRouter/custRouter.mjs";
import paymentsRouter from "./apiRouter/paymentRouter.mjs";
import reservationRouter from "./apiRouter/reserveRouter.mjs";
import tableRouter from "./apiRouter/tableRouter.mjs";
import TournamentsRouter from "./apiRouter/tournamentRouter.mjs";
import sessionRouter from "./apiRouter/sessionRouter.mjs";
import logRouter from "./apirouter/logRouter.mjs";
import cors from "cors";
import routerVerify from "./apiRouter/verifyRouter.mjs";
import cookieParser from "cookie-parser";
import "dotenv/config";

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

// app.get("/login", (req, res) => {
//     res.redirect("http://localhost:3000/login");
// });

app.use(
    cors({
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
        credentials: true,
    })
);

app.use("/api/user", userRouter);
app.use("/api/customer", customerRouter);
app.use("/api/payments", paymentsRouter);
app.use("/api/reserve", reservationRouter);
app.use("/api/table", tableRouter);
app.use("/api/tour", TournamentsRouter);
app.use("/api", sessionRouter);
app.use("/api/cms", routerVerify);
app.use("/api/log", logRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
