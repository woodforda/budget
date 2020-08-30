import React, {useContext, useMemo, useState} from "react"
import {IncomeData} from "./model";
import {INCOME_DATA_SOURCE} from "./income-data";

const IncomeDataContext = React.createContext(new IncomeData([]))

function useIncomeData() {
  const context = useContext(IncomeDataContext)
  if (!context) {
    throw new Error(`useIncomeData must be used within a IncomeDataProvider`)
  }
  return context
}

function IncomeDataProvider(props) {
  const [incomeData, setIncomeData] = useState(new IncomeData(INCOME_DATA_SOURCE))
  const value = useMemo(() => [incomeData, setIncomeData], [incomeData])
  return <IncomeDataContext.Provider value={value} {...props} />
}

export {IncomeDataProvider, useIncomeData}
