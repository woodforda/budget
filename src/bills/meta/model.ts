export interface Outgoing {
  key: string;
  payee: string;
  amount: number;
  dueDate: Date;
  recurring: boolean;
}

export class BillData {

  readonly outgoings: Outgoing[];

  constructor(outgoings: Outgoing[]) {
    this.outgoings = outgoings
  }

  recurringBills() {
    return this.outgoings.filter(it => it.recurring)
  }

  adHocOutgoings() {
    return this.outgoings.filter(it => !it.recurring)
  }

  allOutgoings() {
    return this.outgoings;
  }
}
