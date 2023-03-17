import express from 'express';
import cors from 'cors';
import homeRouter from "./routes/home"
import roomsRouter from "./routes/rooms"
import bookingsRouter from "./routes/bookings"
import usersRouter from "./routes/users"
import reviewsRouter from "./routes/reviews"

const app = express();

// PORT
const PORT = 3000;

// CORS
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());

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
