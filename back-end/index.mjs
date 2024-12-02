import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './apirouter/userRouter.mjs';
import customerRouter from './apirouter/custrouter.mjs';
import paymentsrouter from './apirouter/paymentrouter.mjs';
import reservationrouter from './apirouter/reservrouter.mjs';
import tablerouter from './apirouter/tablerouter.mjs';
import TournamentsRouter from './apirouter/tournamentrouter.mjs';
import sessionrouter from './apirouter/sessoinrouter.mjs';

var app= express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/admin', userRouter)
app.use('/api/customer', customerRouter)
app.use('/api/payments', paymentsrouter)
app.use('/api/reserv', reservationrouter)
app.use('/api/table', tablerouter)
app.use('/api/tour', TournamentsRouter)
app.use('/api',sessionrouter )

const port = 8000 ;
app.listen(port , () => {
    console.log(`server is runing on port ${port}`)

})

