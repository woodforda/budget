export interface Incoming {
    key: string;
    payer: string;
    amount: number;
    dueDate: Date;
    recurring: boolean;
}

