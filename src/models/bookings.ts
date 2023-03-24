export type Booking = {
    src: any;
    id?: number; 
    name: string;
    date: Date;
    checkinDate: string;
    checkinTime: string;
    checkoutDate: string;
    checkoutTime: string;
    note: string;
    type: string;
    status: string;
}