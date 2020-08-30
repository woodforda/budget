import {toDate} from '../../components/utils';
import {Incoming} from "./model";

export const INCOME_DATA_SOURCE: Incoming[] = [
  {
    key: '1',
    payer: 'Salary',
    amount: 7500.00,
    dueDate: toDate("2020-09-25"),
    recurring: true,
  },
  {
    key: '2',
    payer: 'Child Allowance',
    amount: 200,
    dueDate: toDate("2020-10-01"),
    recurring: true,
  },
  {
    key: '3',
    payer: 'Spesen',
    amount: 150,
    dueDate: toDate("2020-10-01"),
    recurring: false,
  },
];
