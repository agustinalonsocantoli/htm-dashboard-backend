import express, { Application } from 'express';
import cors from 'cors';
import homeRouter from "./routes/home"
import roomsRouter from "./routes/rooms"
import bookingsRouter from "./routes/bookings"
import usersRouter from "./routes/users"
import reviewsRouter from "./routes/reviews"
import loginRouter from "./routes/login"
import dotenv from 'dotenv';
import passport from 'passport';

dotenv.config()

const app: Application = express();

// PORT
const PORT = 3000;

require('./auth/auth');

// CORS
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());

// ROUTES
app.use('/api/login', loginRouter);
app.use('/api', homeRouter);
app.use('/api/rooms', passport.authenticate('jwt', { session: false }), roomsRouter);
app.use('/api/bookings', passport.authenticate('jwt', { session: false }), bookingsRouter);
app.use('/api/users', passport.authenticate('jwt', { session: false }), usersRouter);
app.use('/api/contact', passport.authenticate('jwt', { session: false }), reviewsRouter);

// ERROR
app.use((_req, res) => {
    res.status(500).send({message: 'Not found'})
})

app.use((_req, res) => {
    res.status(404).send({message: 'Not found'})
})

// SERVER
try {
    app.listen(PORT, () => {
        console.log(`Server run port ${PORT}`);
    })
} catch(err) {
    console.log(err);
}
