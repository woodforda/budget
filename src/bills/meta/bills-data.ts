import {Outgoing} from "./model";
import {toDate} from "../../components/utils";

const BILLS_DATA_SOURCE: Outgoing[] = [
  {
    key: '1',
    payee: 'Health Insurance',
    amount: 300.00,
    dueDate: toDate("2020-09-01"),
    recurring:true,
  },
  {
    key: '2',
    payee: 'New Microwave',
    amount: 85,
    dueDate: toDate("2020-09-01"),
    recurring:false,
  },
  {
    key: '3',
    payee: 'Mobile',
    amount: 65,
    dueDate: toDate("2020-09-15"),
    recurring:true,
  },
  {
    key: '4',
    payee: 'Rent',
    amount: 1500,
    dueDate: toDate("2020-09-03"),
    recurring:true,
  },
  {
    key: '5',
    payee: 'Car Park',
    amount: 100,
    dueDate: toDate("2020-09-12"),
    recurring:true,
  },
  {
    key: '6',
    payee: 'Doctor Appointment',
    amount: 205,
    dueDate: toDate("2020-09-01"),
    recurring:false,
  },
  {
    key: '7',
    payee: 'Taxes',
    amount: 2000.00,
    dueDate: toDate("2021-09-30"),
    recurring:false,
  },
  {
    key: '8',
    payee: 'Monthly Train Ticket',
    amount: 125,
    dueDate: toDate("2020-09-23"),
    recurring:true,
  },
  {
    key: '9',
    payee: 'Health Insurance',
    amount: 300.00,
    dueDate: toDate("2020-09-01"),
    recurring:true,
  },
  {
    key: '10',
    payee: 'New Microwave',
    amount: 85,
    dueDate: toDate("2020-09-01"),
    recurring:false,
  },
  {
    key: '11',
    payee: 'Mobile',
    amount: 65,
    dueDate: toDate("2020-09-15"),
    recurring:true,
  },
  {
    key: '12',
    payee: 'Rent',
    amount: 1500,
    dueDate: toDate("2020-09-03"),
    recurring:true,
  },
  {
    key: '13',
    payee: 'Car Park',
    amount: 100,
    dueDate: toDate("2020-09-12"),
    recurring:true,
  },
  {
    key: '14',
    payee: 'Doctor Appointment',
    amount: 205,
    dueDate: toDate("2020-09-01"),
    recurring:false,
  },
  {
    key: '15',
    payee: 'Taxes',
    amount: 2000.00,
    dueDate: toDate("2021-09-30"),
    recurring:false,
  },
  {
    key: '16',
    payee: 'Monthly Train Ticket',
    amount: 125,
    dueDate: toDate("2020-09-23"),
    recurring:true,
  },
];

export const allOutgoings = () => BILLS_DATA_SOURCE
export const recurringOutgoings = () => allOutgoings().filter(it => it.recurring)
export const adHocOutgoings = () => allOutgoings().filter(it => !it.recurring)
