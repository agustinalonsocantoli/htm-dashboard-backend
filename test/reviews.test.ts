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
    
    test("GET method all reviews without token", async () => {
        const res = await request(app)
        .get("/api/contact")

        expect(res.statusCode).toEqual(401)
    })

    test('GET method all reviews', async () => {
        const res = await request(app)
        .get('/api/contact')
        .set("Authorization", "Bearer " + token);
        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
    })

    test('GET method review', async () => {
        const res = await request(app)
        .get('/api/contact/C0002')
        .set("Authorization", "Bearer " + token);
        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
      })

    test('POST method new review', async () => {
        const newReview = {
            id: "C0025",
            date: "2022-03-07",
            customer: "Kusnaidi Anderson",
            email: "kanderson@gmail.com",
            phone: "+34 623 455 928",
            affair: "recommendation",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            archived: false
        }

        const res = await request(app)
        .post('/api/contact')
        .set("Authorization", "Bearer " + token)
        .send(newReview)

        expect(res.statusCode).toEqual(200)
    })
})