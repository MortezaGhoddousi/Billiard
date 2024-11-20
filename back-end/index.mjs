import express from 'express';
import { Router } from "express";
import bodyParser from 'body-parser';
import userRouter from './apirouter/userRouter.mjs';
import sessoinrouter from './apirouter/sessoinrouter.mjs';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
var app= express();

app.use("/api/user", userRouter);

app.use('/api/sessoin', sessoinrouter);








const port = 8000 ;
app.listen(port , () => {
    console.log(`server is runing on port ${port}`)

})

