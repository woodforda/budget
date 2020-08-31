export interface Incoming {
  key: string;
  payer: string;
  amount: number;
  dueDate: Date;
  recurring: boolean;
}

export class IncomeData {

  readonly incomings: Incoming[]
  private drawVisible: boolean = true

  constructor(incomings: Incoming[]) {
    this.incomings = incomings
  }

  setDrawVisible(value: boolean) {
    this.drawVisible = value
  }

  isDrawerVisible() {
    return this.drawVisible
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
