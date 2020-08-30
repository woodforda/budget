export interface BudgetEntry {
  key: string;
  category: string;
  budget: number;
  actual: number;
}

export class BudgetData {

  readonly budgetEntries: BudgetEntry[];

  constructor(budgetEntries: BudgetEntry[]) {
    this.budgetEntries = budgetEntries
  }

  allBudgetEntries() {
    return this.budgetEntries;
  }

  allActualsVerseBudget() {
    return this.budgetEntries.map(it => {
      return {
        ...it,
        difference: it.budget - it.actual
      }
    })
  }

  overview() {
    let result = this.allActualsVerseBudget()
        .map(it => it.difference)
        .reduce((x, y) => x + y)

    return [{
      category: 'Overview',
      difference: result
    }]
  }
}
