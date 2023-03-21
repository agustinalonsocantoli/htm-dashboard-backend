import request from 'supertest';
import app from '../src/index';
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
    
    test("GET method all rooms without token", async () => {
        const res = await request(app)
        .get("/api/rooms")

        expect(res.statusCode).toEqual(401)
    })

    test('GET method all rooms', async () => {
        const res = await request(app)
        .get('/api/rooms')
        .set("Authorization", "Bearer " + token);
        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
    })

    test('GET method room', async () => {
        const res = await request(app)
        .get('/api/rooms/R002')
        .set("Authorization", "Bearer " + token);
        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
      })

    test('POST method new room', async () => {
        const newRoom = {
        src: "",
        name: "Suite 33",
        id: "R020", 
        type: "Suite",
        amenities: ["Air conditioner", "Shower", "Towels"],
        price: 900,
        offer: 50,
        status: "Available"
        }

        const res = await request(app)
        .post('/api/rooms')
        .set("Authorization", "Bearer " + token)
        .send(newRoom)

        expect(res.statusCode).toEqual(200)
    })
})