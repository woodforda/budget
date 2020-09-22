import React, {Dispatch, ReducerAction, ReducerState, useContext, useMemo, useReducer} from "react"
import {INCOME_DATA_SOURCE} from "./income-data";
import {IncomeData} from "./model";


export interface IncomeState {
    data: IncomeData;
    drawer: string;
}

const initialState: IncomeState = {
    data: new IncomeData(INCOME_DATA_SOURCE),
    drawer: 'opened',
}

const incomeReducer = (state, action) => {
    switch (action.type) {
        case 'CLOSE_DRAWER':
            return {drawer: 'closed', ...state};
        case 'OPEN_DRAWER':
            return {drawer: 'opened', ...state};
        default:
            throw new Error()
    }
};

const IncomeContext = React.createContext([initialState, (value: any) => {}])

function useIncomeContext() {
    const context = useContext(IncomeContext)
    if (!context) {
        throw new Error(`useIncomeContext must be used within a IncomeContextProvider`)
    }
    const state: ReducerState<any> = context[0]
    const dispatch: Dispatch<ReducerAction<any>> = context[1] as Dispatch<ReducerAction<any>>
    const openDrawer = () => dispatch({type: 'OPEN_DRAWER'})
    return [state, dispatch, openDrawer]
}

function IncomeContextProvider(props) {
    const [state, dispatch] = useReducer(incomeReducer, initialState)
    const value = useMemo(() => [state, dispatch], [state])
    return <IncomeContext.Provider value={value}  {...props} />
}

export {IncomeContextProvider, useIncomeContext}
