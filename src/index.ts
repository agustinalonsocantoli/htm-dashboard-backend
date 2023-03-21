import app, { PORT } from "./app";
import 'dotenv/config';
import { dbConnection, dbEnd, dbQuery } from "./database";

// const insert = 'INSERT INTO users SET ?'
// const user = {
//     name: 'Gabriel Rodriguez',
//     src: null, 
//     email: 'gabriel@hm.com', 
//     start: new Date(), 
//     job: 'Assistant', 
//     contact: '+34625478654', 
//     status: 'active'
// }

// CONNECTION
dbConnection();
// dbQuery(insert, user);
dbQuery('SELECT * FROM users');
dbEnd();

// SERVER
try {
    app.listen(PORT, () => {
        console.log(`Server Run`);
    })
} catch(err) {
    console.log(err);
}