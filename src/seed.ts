import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import User, { IntUser } from './models/users';
import Room, { IntRoom } from './models/rooms';
import Booking, { IntBooking } from './models/bookings';
import Review, { IntReview } from './models/reviews';
import { dbConnection, dbEnd } from './database';

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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id laoreet lacus. Etiam cras amet",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices pulvinar sollicitudin. Fusce fringilla euismod mauris. Ut lobortis est ut mi",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dolor magna, suscipit id est a, elementum viverra ex. Sed ultrices tincidunt nibh, et semper elit pharetra commodo. Suspendisse erat curae",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin elementum odio, et laoreet dui dapibus in. Curabitur nec accumsan tellus, mattis aliquam diam. Praesent felis augue, consequat sodales euismod at, sollicitudin sed"
]

const amenities = [
    "Air conditioner", 
    "Shower", 
    "Towels", 
    "Smart Locker", 
    "24 Hours Guard", 
    "Free Wifi", 
    "Television", 
    "Room Services"
]

export const encryptPassword = (password: string): string => {
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash
}

export const validatePassword = (password: string, token: string): boolean => {
    const compare = bcrypt.compareSync(password, token);

    return compare
} 

async function createRandomUser(): Promise<IntUser> {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return {
        name: `${firstName} ${lastName}`,
        src: faker.helpers.arrayElement(imgPerson),
        email: faker.internet.email(firstName, lastName),
        start: faker.date.between('2022-01-01', '2023-02-02'),
        job: faker.helpers.arrayElement(['Receptionist', 'Room attendant', 'Assistant', 'Doorman', 'Valet parking', 'Security guard', 'Bartender']),
        contact: faker.phone.number('+34 ### ### ###'),
        status: faker.helpers.arrayElement(['active', 'inactive']),
        password: encryptPassword(faker.internet.password())
    };
}

async function createRandomRoom(randomAmenities: string[]): Promise<IntRoom> {

    return {
        name: `${faker.helpers.arrayElement(['Deluxe', 'Single'])} ${faker.datatype.number({ min: 100, max: 400 })}`,
        src: faker.helpers.arrayElement(imgRoom),
        type: faker.helpers.arrayElement(['Double Bed', 'Single Bed', 'Double Superior']),
        amenities: randomAmenities,
        price: faker.datatype.number({ min: 250, max: 750 }),
        offer: faker.datatype.number({ min: 5, max: 25 }),
        status: faker.helpers.arrayElement(['Booked', 'Available']),
    };
}


async function createRandomBooking(): Promise<IntBooking> {
    const formatDate = faker.date.between('2022-01-01', '2023-02-02');
    const formatCheckin = faker.date.between(formatDate, '2023-02-02');

    return {
        name: faker.name.fullName(),
        src: faker.internet.avatar(),
        date: formatDate,
        checkin: formatCheckin,
        checkout: faker.date.between(formatCheckin, '2023-02-02'),
        note: faker.helpers.arrayElement(note),
        type: faker.helpers.arrayElement(['Double Bed', 'Single Bed', 'Double Superior']),
        status: faker.helpers.arrayElement(['Booked', 'Refund', 'Progress'])
    };
}

async function createRandomReview(): Promise<IntReview> {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    return {
        src: faker.internet.avatar(),
        date: faker.date.between('2022-01-01', '2023-02-02'),
        customer: `${firstName} ${lastName}`,
        email: faker.internet.email(firstName, lastName),
        phone: faker.phone.number('+34 ### ### ###'),
        affair: "recommendation",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        archived: true
    };
}
  
async function insertUsers() {

    for (let i = 1; i < 21; i++) {
        const userData = await createRandomUser();
        
        await User.create(userData)
    }
}

async function insertRooms() {

    for (let i = 1; i < 51; i++) {
        const numAmenities = faker.datatype.number({ min: 1 , max: 8 });
        const added = new Set();
        let randomAmenities: Array<string> = [];

        for (let j = 0; j <= numAmenities; j++) {
            let amenitiyAdd: string = faker.helpers.arrayElement(amenities);
    
            added.add(amenitiyAdd)
        }
    
        added.forEach((amenity: any) => { 
    
            randomAmenities.push(amenity)
        });


        const roomData = await createRandomRoom(randomAmenities);

        await Room.create(roomData)

        added.clear();
        randomAmenities = [];
    }
}

async function insertBookings() {

    for (let i = 1; i < 101; i++) {
        const bookingData = await createRandomBooking();

        await Booking.create(bookingData)
        
    }
}

async function insertReviews() {

    for (let i = 1; i < 21; i++) {
        const reviewData = await createRandomReview();

        await Review.create(reviewData)
    }
}

export async function run() {
    console.log("Seed Start")

    await dbConnection();

    await insertUsers();
    await insertRooms();
    await insertReviews();
    await insertBookings();

    setTimeout( async () =>{
        await dbEnd();
        console.log('Seed End');
    }, 3000)
}
