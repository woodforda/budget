export interface SavingsGoal {
  key: string;
  goal: string;
  amount: number;
  dueDate: Date;
  priority: number;
}


export class SavingsData {

  readonly savingsGoals: SavingsGoal[];

  constructor(savingsGoals: SavingsGoal[]) {
    this.savingsGoals = savingsGoals
  }

  allSavingsGoals() {
    return this.savingsGoals;
  }
}
