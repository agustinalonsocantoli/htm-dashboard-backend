export type Review = {
    id?: number;
    date: Date;
    customer: string;
    email: string;
    phone: string;
    affair: string;
    comment: string;
    archived: boolean;
}