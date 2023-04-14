import request from 'supertest';
import app from '../src/app';
import jwt from "jsonwebtoken";
import 'dotenv/config'

const token = jwt.sign({ user: {
    email: 'agusti@hm.com',
    password: '000000',
}}, 
process.env.SECRET_KEY === undefined ? 'TOP_SECRET' : process.env.SECRET_KEY)


beforeAll(() => {
    token
})

describe('Endpoints', () => {
    
    test("GET method all bookings without token", async () => {
        const res = await request(app)
        .get("/api/bookings")

        expect(res.statusCode).toEqual(401)
    })

    test('GET method all bookings', async () => {
        const res = await request(app)
        .get('/api/bookings')
        .set("Authorization", "Bearer " + token);
        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
    })

    test('GET method book', async () => {
        const res = await request(app)
        .get('/api/bookings/B000002')
        .set("Authorization", "Bearer " + token);
        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
      })

    test('POST method new book', async () => {
        const newBook = {
            src: "",
            id: "B000020", 
            name: "Juan Garcia",
            date: "2023-01-15",
            checkinDate: "Ago 2th, 2020",
            checkinTime: "9.46 PM",
            checkoutDate: "Nov 4th, 2020",
            checkoutTime: "6.12 PM",
            note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            type: "Deluxe 120",
            status: "Booked"
        }

        const res = await request(app)
        .post('/api/bookings')
        .set("Authorization", "Bearer " + token)
        .send(newBook)

        expect(res.statusCode).toEqual(200)
    })
})