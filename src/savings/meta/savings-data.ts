import {toDate} from "../../components/utils";
import {SavingsGoal} from "./model";

const SAVINGS_DATA_SOURCE:SavingsGoal[] = [
  {
    key: '1',
    goal: 'Vacation to Hawaii',
    amount: 1000,
    dueDate: toDate('2020-12-25'),
    priority: 1,
  },
  {
    key: '2',
    goal: 'New Dishwasher',
    amount: 2000,
    dueDate: toDate('2021-03-13'),
    priority: 2,
  },
  {
    key: '3',
    goal: 'New Car',
    amount: 6000,
    dueDate: toDate('2021-05-29'),
    priority: 3,
  },
];

export const allSavingsGoals = () => SAVINGS_DATA_SOURCE
