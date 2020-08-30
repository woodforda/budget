import React, {useContext, useMemo, useState} from "react"
import {BudgetData} from "./model";
import {BUDGET_DATA_SOURCE} from "./budget-data";

const BudgetDataContext = React.createContext(new BudgetData([]))

function useBudgetData() {
  const context = useContext(BudgetDataContext)
  if (!context) {
    throw new Error(`useBudgetData must be used within a BudgetDataProvider`)
  }
  return context
}

function BudgetDataProvider(props) {
  const [budgetData, setBudgetData] = useState(new BudgetData(BUDGET_DATA_SOURCE))
  const value = useMemo(() => [budgetData, setBudgetData], [budgetData])
  return <BudgetDataContext.Provider value={value} {...props} />
}

export {BudgetDataProvider, useBudgetData}
