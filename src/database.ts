import mysql from 'mysql2';
import 'dotenv/config';

const connection = mysql.createConnection({
    host: process.env.DB_MYSQL_HOST,
    user: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_KEY,
    database: process.env.DB_MYSQL_DATABASE,
})

export const dbConnection = () => {
    connection.connect((err) => {
        if(err) {
            console.error(`Error connecting: ${err.stack}`)
            return;
        }
    
        console.log(`connected as id ${connection.threadId}`);
    })
}

export const dbEnd = () => {
    connection.end((err) => {
        if(err) {
            console.log(err)
            return;
        }
    
        console.log('Connection finished');
    })
}

export const dbQuery = (query: any, data: any | null = null) => {

    return new Promise((resolve, reject) => {
        connection.query( query, data, function(error, results) {
                if(error) reject(error);

                resolve(results)
            }
        );
    })
}