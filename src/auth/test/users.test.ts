import request from 'supertest';
import app from '../../app';
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
    
    test("GET method all users without token", async () => {
        const res = await request(app)
        .get("/api/users")

        expect(res.statusCode).toEqual(401)
    })

    test('GET method all users', async () => {
        const res = await request(app)
        .get('/api/users')
        .set("Authorization", "Bearer " + token);
        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
    })

    test('GET method user', async () => {
        const res = await request(app)
        .get('/api/users/U00002')
        .set("Authorization", "Bearer " + token);
        
        expect(res.statusCode).toEqual(200)
        expect(res.body).toBeInstanceOf(Object)
      })

    test('POST method new user', async () => {
        const newUser = {
            src: "",
            name: "Gabriel Rodriguez",
            id: "U00022",
            email: "grodriguez@hm.com",
            start: "2020-01-10",
            job: "Directing phone calls, coordinating travel plans.",
            contact: "012 334 55512",
            status: "active"
        }

        const res = await request(app)
        .post('/api/users')
        .set("Authorization", "Bearer " + token)
        .send(newUser)

        expect(res.statusCode).toEqual(200)
    })
})