import mysql from 'mysql2';
import 'dotenv/config';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_MYSQL_KEY,
    database: 'hotelmiranda',
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

export const dbQuery = (query: any, data: object | null = null) => {
    return new Promise((resolve, reject) => {
        connection.query( query, data, function(error, results) {
                if(error) reject(error);

                resolve(results)
                console.log(results);
            }
        );
    })
}