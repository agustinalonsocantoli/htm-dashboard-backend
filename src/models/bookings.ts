export type Booking = {
    src: any;
    id?: number; 
    name: string;
    date: Date;
    checkin: Date;
    checkout: Date;
    note: string;
    type: string;
    status: string;
    id_room: number;
}