import React, {useContext, useMemo, useState} from "react"
import {SavingsData} from "./model";
import {SAVINGS_DATA_SOURCE} from "./savings-data";

const SavingsDataContext = React.createContext(new SavingsData([]))

function useSavingsData() {
  const context = useContext(SavingsDataContext)
  if (!context) {
    throw new Error(`useSavingsData must be used within a SavingsDataProvider`)
  }
  return context
}

function SavingsDataProvider(props) {
  const [savingsData, setSavingsData] = useState(new SavingsData(SAVINGS_DATA_SOURCE))
  const value = useMemo(() => [savingsData, setSavingsData], [savingsData])
  return <SavingsDataContext.Provider value={value} {...props} />
}

export {SavingsDataProvider, useSavingsData}
