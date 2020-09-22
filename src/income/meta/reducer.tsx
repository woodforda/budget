import React, {Dispatch, useReducer} from "react";
import {IncomeData, Incoming} from "./model";
import {INCOME_DATA_SOURCE} from "./income-data";
import {removeArrayItem} from "../../components/utils";

export interface IncomeState {
    drawer: string
    incoming: string
    data: IncomeData
}

export interface IncomeContext {
    state: IncomeState
    dispatch: Dispatch<any>
    add: () => void
    edit: (record) => void
    remove: (record) => void
    cancel: () => void
    save: (record) => void
}

const initialState: IncomeState = {
    drawer: 'closed',
    incoming: '',
    data: new IncomeData(INCOME_DATA_SOURCE),
}

export const incomeReducer = (state: IncomeState, action) => {
    console.debug("Have received action", action)
    switch (action.type) {
        case 'ADD_INCOMING':
            console.debug("Add new requested")
            return {...state, drawer: 'opened', incoming: ''}

        case 'EDIT_INCOMING':
            console.debug("Edit requested", action.payload)
            return {...state, drawer: 'opened', incoming: action.payload.key}

        case 'REMOVE_INCOMING':
            console.debug("Remove requested", action.payload)
            let incomings: Incoming[] = removeArrayItem(state.data.allIncomings(), action.payload)
            let newState: IncomeState = {
                ...state,
                data: new IncomeData(incomings)
            }
            return {...state, state: newState, incoming: action.payload.key} as IncomeState

        case 'SAVE_INCOMING':
            console.debug("Save requested", action.payload)
            return {...state, drawer: 'closed', incoming: action.payload.key}

        case 'CANCEL':
            console.debug("Cancel requested")
            return {...state, drawer: 'closed', incoming: undefined}

        default:
            throw new Error()
    }
};

export const useIncomeState = () => {
    const [state, dispatch] = useReducer(incomeReducer, initialState as IncomeState)
    const add = () => dispatch({type: 'ADD_INCOMING'})
    const edit = (payload) => dispatch({type: 'EDIT_INCOMING', payload: payload})
    const remove = (payload) => dispatch({type: 'REMOVE_INCOMING', payload: payload})
    const cancel = () => dispatch({type: 'CANCEL'})
    const save = (payload) => dispatch({type: 'SAVE_INCOMING', payload: payload})

    return {state, dispatch, add: add, edit: edit, remove: remove, cancel: cancel, save: save} as IncomeContext;
}

