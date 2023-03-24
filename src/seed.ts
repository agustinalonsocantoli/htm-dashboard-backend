import { dbConnection, dbEnd, dbQuery } from './database';
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { User } from './models/users';
import { Room } from './models/rooms';
import { Booking } from './models/bookings';
import { Review } from './models/reviews';

export const encryptPassword = (password: string): string => {
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash
}

export const validatePassword = (password: string, token: string): boolean => {
    const compare = bcrypt.compareSync(password, token);

    return compare
} 

const imgPerson = [
    "https://images.unsplash.com/photo-1596305589440-2e180399a760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
]

const imgRoom = [
    "https://i.pinimg.com/564x/4e/0d/c7/4e0dc77344c1f54238cd136a0f0368f8.jpg",
    "https://i.pinimg.com/564x/74/f9/82/74f98233dfd81a93b06fd496125fe5a9.jpg",
    "https://i.pinimg.com/564x/b8/72/3f/b8723f2814d882af0d79d2d92e166191.jpg",
    "https://i.pinimg.com/564x/3a/ae/c5/3aaec5fb60cc2483893eaf55792f0793.jpg",
    "https://i.pinimg.com/564x/94/58/f2/9458f2e2224da675df3c7adda618a8b5.jpg",
    "https://i.pinimg.com/564x/16/77/52/1677529f6039530ba721e1eb5f6d8b52.jpg",
    "https://i.pinimg.com/564x/33/a2/ef/33a2ef13fd9331064dc309b763475998.jpg"
]

const note = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
]

function createRandomUser(): User {
    return {
        id: faker.datatype.number({ max: 999 }),
        name: faker.name.fullName(),
        src: faker.helpers.arrayElement(imgPerson),
        email: faker.internet.email(),
        start: faker.date.between('2022-01-01', '2023-02-02'),
        job: faker.helpers.arrayElement(['Receptionist', 'Room attendant', 'Assistant', 'Doorman', 'Valet parking', 'Security guard', 'Bartender']),
        contact: faker.phone.number('+34 ### ### ###'),
        status: faker.helpers.arrayElement(['active', 'inactive']),
        password: encryptPassword(faker.internet.password())
    };
}

function createRandomRoom(): Room {
    return {
        id: faker.datatype.number({ max: 999 }),
        name: `${faker.helpers.arrayElement(['Deluxe', 'Single'])} ${faker.datatype.number({ min: 100, max: 400 })}`,
        src: faker.helpers.arrayElement(imgRoom),
        type: faker.helpers.arrayElement(['Double Bed', 'Single Bed', 'Double Superior']),
        amenities: [],
        price: faker.datatype.number({ min: 250, max: 750 }),
        offer: faker.datatype.number({ min: 5, max: 25 }),
        status: faker.helpers.arrayElement(['Booked', 'Available']),
    };
}


function createRandomBooking(): Booking {
    return {
        id: faker.datatype.number({ max: 999 }),
        name: faker.name.fullName(),
        src: faker.helpers.arrayElement(imgPerson),
        date: faker.date.between('2022-01-01', '2023-02-02'),
        checkinDate: '',
        checkinTime: '',
        checkoutDate: '',
        checkoutTime: '',
        note: faker.helpers.arrayElement(note),
        type: faker.helpers.arrayElement(['Double Bed', 'Single Bed', 'Double Superior']),
        status: faker.helpers.arrayElement(['Booked', 'Refund', 'Progress']),
    };
}

function createRandomReview(): Review {
    return {
        id: faker.datatype.number({ max: 999 }),
        date: faker.date.between('2022-01-01', '2023-02-02'),
        customer: faker.name.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number('+34 ### ### ###'),
        affair: "recommendation",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        archived: true
    };
}
  
async function insertDataBase() {
    const insert = 'INSERT INTO users SET ?'

    for (let i = 0; i < 10; i++) {
        const userData = createRandomUser();
        console.log(userData);
        await dbQuery(insert, userData);
    }

    for (let i = 0; i < 50; i++) {
        const roomData = createRandomRoom();
        console.log(roomData);
        await dbQuery(insert, roomData);
    }

    for (let i = 0; i < 100; i++) {
        const bookingData = createRandomBooking();
        console.log(bookingData);
        await dbQuery(insert, bookingData);
    }

    for (let i = 0; i < 20; i++) {
        const reviewData = createRandomReview();
        console.log(reviewData);
        await dbQuery(insert, reviewData);
    }
}

async function run() {
    dbConnection();
    // const result = await dbQuery(insert, user);
    // const amenities = await dbQuery("SELECT * FROM amenities");
    // const users = await dbQuery("SELECT password FROM users WHERE name = 'Agustin Alonso'");
    insertDataBase();
    dbEnd();

    // return [amenities, users]
    // return users
    // return result
}

// const insert = "UPDATE users SET ? WHERE id = 1";
// const user = {password: encryptPassword('000000')}
// const insert = 'INSERT INTO users SET ?'

run();
