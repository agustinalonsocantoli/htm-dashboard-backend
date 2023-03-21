import express, { Application } from 'express';
import cors from 'cors';
import homeRouter from "./routes/home"
import roomsRouter from "./routes/rooms"
import bookingsRouter from "./routes/bookings"
import usersRouter from "./routes/users"
import reviewsRouter from "./routes/reviews"
import loginRouter from "./routes/login"
import passport from 'passport';
import dotenv from 'dotenv';

dotenv.config()

const app: Application = express();

require('./auth/auth');

// PORT
export const PORT = process.env.PORT_KEY;

// CORS
const allowedOrigins = [`http://localhost:${PORT}`];

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

export default app;