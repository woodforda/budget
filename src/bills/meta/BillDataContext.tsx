import React, {useContext, useMemo, useState} from "react"
import {BILLS_DATA_SOURCE} from "./bills-data";
import {BillData} from "./model";

const BillDataContext = React.createContext(new BillData([]))

function useBillData() {
  const context = useContext(BillDataContext)
  if (!context) {
    throw new Error(`useBillData must be used within a BillDataProvider`)
  }
  return context
}

function BillDataProvider(props) {
  const [billData, setBillData] = useState(new BillData(BILLS_DATA_SOURCE))
  const value = useMemo(() => [billData, setBillData], [billData])
  return <BillDataContext.Provider value={value} {...props} />
}

export {BillDataProvider, useBillData}
