import { dbConnection, dbEnd, dbQuery } from './database';

// const date = new Date().toLocaleDateString("en-US");

// const insert = 'INSERT INTO users SET ?'
// const user = {
//     name: 'Gabriel Rodriguez',
//     src: null, 
//     email: 'gabriel@hm.com', 
//     start: date, 
//     job: 'Assistant', 
//     contact: '+34625478654', 
//     status: 'active'
// }

async function run(){
    dbConnection();
    // const result = await dbQuery(insert, user);
    const amenities = await dbQuery("SELECT * FROM amenities");
    const users = await dbQuery("SELECT * FROM users");
    dbEnd();

    return [amenities, users]
}

run()