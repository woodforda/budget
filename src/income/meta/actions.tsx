import React from "react";
import {Incoming} from "./model";

export const CREATE_INCOMING: string = 'CREATE_INCOMING'
export const EDIT_INCOMING: string = 'EDIT_INCOMING'
export const REMOVE_INCOMING: string = 'REMOVE_INCOMING'
export const SAVE_INCOMING: string = 'SAVE_INCOMING'
export const CANCEL_ACTION: string = 'CANCEL_ACTION'

export function createIncoming() {
    return {type: CREATE_INCOMING}
}

export function editIncoming(incoming: Incoming) {
    return {type: EDIT_INCOMING, payload: incoming}
}

export function saveIncoming(incoming: Incoming) {
    return {type: SAVE_INCOMING, payload: incoming}
}

export function removeIncoming(incoming: Incoming) {
    return {type: REMOVE_INCOMING, payload: incoming}
}

export function cancelAction() {
    return {type: CANCEL_ACTION}
}

