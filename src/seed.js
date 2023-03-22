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

async function run(command = null, data = null){
    dbConnection();
    // dbQuery(command, data);
    const result = await dbQuery("SELECT * FROM users");
    dbEnd();

    return result
}

run();