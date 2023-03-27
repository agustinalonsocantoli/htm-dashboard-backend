export type Review = {
    id?: number;
    src: string;
    date: Date;
    customer: string;
    email: string;
    phone: string;
    affair: string;
    comment: string;
    archived: boolean;
}