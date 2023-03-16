import express from 'express';
import homeRouter from "./routes/home"
import roomsRouter from "./routes/rooms"
import bookingsRouter from "./routes/bookings"
import usersRouter from "./routes/users"
import reviewsRouter from "./routes/reviews"

const app = express();
app.use(express.json());

// PORT
const PORT = 3000;

// CORS
// app.use((_, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

// ROUTES
app.use('/public', homeRouter);
app.use('/private/rooms', roomsRouter);
app.use('/private/bookings', bookingsRouter);
app.use('/private/users', usersRouter);
app.use('/private/contact', reviewsRouter);

// SERVER
try {
    app.listen(PORT, () => {
        console.log(`Server run port ${PORT}`);
    })
} catch(err) {
    console.log(err);
}
