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
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// ROUTES
app.use('/api', homeRouter);
app.use('/api/rooms', roomsRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/users', usersRouter);
app.use('/api/contact', reviewsRouter);

// SERVER
try {
    app.listen(PORT, () => {
        console.log(`Server run port ${PORT}`);
    })
} catch(err) {
    console.log(err);
}
