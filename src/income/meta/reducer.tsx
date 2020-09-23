import React, {Dispatch, useReducer} from "react";
import {Incoming} from "./model";
import {INCOME_DATA_SOURCE} from "./income-data";
import {removeArrayItem} from "../../components/utils";
import * as Action from './actions';

export interface IncomeState {
    incomings: Incoming[]
    mode: string
    target?: Incoming
}

export interface IncomeContext {
    state: IncomeState
    dispatch: Dispatch<any>
    create: () => void
    edit: (record) => void
    remove: (record) => void
    cancel: () => void
    save: (record) => void
}

const initialState: IncomeState = {
    incomings: INCOME_DATA_SOURCE,
    mode: 'DEFAULT',
    target: undefined
}

export const incomeReducer = (state: IncomeState, action) => {
    console.debug("Have received action", action)
    switch (action.type) {
        case Action.CREATE_INCOMING:
            console.debug("Add new requested")
            return {
                ...state,
                mode: 'CREATE',
                target: undefined
            }

        case Action.EDIT_INCOMING:
            return {
                ...state,
                mode: 'EDIT',
                target: action.payload
            }

        case Action.REMOVE_INCOMING:
            let incomings: Incoming[] = removeArrayItem(state.incomings, action.payload)
            return {
                ...state,
                incomings: incomings,
                mode: 'DELETE',
                target: action.payload
            } as IncomeState

        case Action.SAVE_INCOMING:
            state.incomings.push(action.payload)
            return {
                ...state,
                mode: 'DEFAULT',
                target: undefined
            }

        case Action.CANCEL_ACTION:
            return {
                ...state,
                mode: 'DEFAULT',
                target: undefined
            }

        default:
            throw new Error("Unsupported action " + action.type)
    }
};

export const useIncomeState = () => {
    const [state, dispatch] = useReducer(incomeReducer, initialState as IncomeState)
    const create = () => dispatch(Action.createIncoming())
    const edit = (payload) => dispatch(Action.editIncoming(payload))
    const remove = (payload) => dispatch(Action.removeIncoming(payload))
    const cancel = () => dispatch(Action.cancelAction())
    const save = (payload) => dispatch(Action.saveIncoming(payload))
    return {state, dispatch, create: create, edit: edit, remove: remove, cancel: cancel, save: save} as IncomeContext;
}
