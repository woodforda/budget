import {renderActionButton, renderAmount, renderDuration} from "./Renderers";
import {formatNumber} from "../utils";
import moment from "moment";


const sortDates = (a, b) => moment(a.dueDate).diff(moment(b.dueDate))
const sortAmounts = (a, b) => a.amount - b.amount
const sortStrings = (a, b) => a.localeCompare(b)

export const columnAmount = {
  title: 'Amount',
  dataIndex: 'amount',
  key: 'amount',
  align: 'right' as 'right',
  render: renderAmount,
  sorter: sortAmounts,
  sortDirections: ['ascend', 'descend', 'ascend']
}

export const columnDueDate = {
  title: 'Due',
  dataIndex: 'dueDate',
  key: 'dueDate',
  align: 'center' as 'center',
  render: renderDuration,
  defaultSortOrder: 'ascend',
  sorter: sortDates,
  sortDirections: ['ascend', 'descend', 'ascend']
}

export const columnGoal = {
  title: 'Goal',
  dataIndex: 'goal',
  key: 'goal',
  sorter: (a, b) => sortStrings(a.goal, b.goal),
  sortDirections: ['ascend', 'descend', 'ascend']
}

export const columnPayee = {
  title: 'To',
  dataIndex: 'payee',
  key: 'payee',
  sorter: (a, b) => sortStrings(a.payee, b.payee),
  sortDirections: ['ascend', 'descend', 'ascend']
}

export const columnPayer = {
  title: 'From',
  dataIndex: 'payer',
  key: 'payer',
  sorter: (a, b) => sortStrings(a.payer, b.payer),
  sortDirections: ['ascend', 'descend', 'ascend']
}

export const columnCategory = {
  title: 'Category',
  dataIndex: 'category',
  key: 'category',
  sorter: (a, b) => sortStrings(a.category, b.category),
  sortDirections: ['ascend', 'descend', 'ascend']
}

export const columnBudget = {
  title: 'Budgeted',
  dataIndex: 'budget',
  key: 'budget',
  align: 'right' as 'right',
  render: formatNumber,
}

export const columnActual = {
  title: 'Actual',
  dataIndex: 'actual',
  key: 'actual',
  align: 'right' as 'right',
  render: formatNumber,
}

export const columnDifference = {
  title: 'Difference',
  dataIndex: 'difference',
  key: 'difference',
  align: 'right' as 'right',
  render: formatNumber,
}

export const columnAction = {
  title: 'Action',
  key: 'action',
  render: renderActionButton
}