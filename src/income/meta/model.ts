export interface Incoming {
  key: string;
  payer: string;
  amount: number;
  dueDate: Date;
  recurring: boolean;
}

export class IncomeData {

  readonly incomings: Incoming[];

  constructor(incomings: Incoming[]) {
    this.incomings = incomings
  }

  recurringIncomings() {
    return this.incomings.filter(it => it.recurring)
  }

  adHocIncomings() {
    return this.incomings.filter(it => !it.recurring)
  }

  allIncomings() {
    return this.incomings;
  }
}
