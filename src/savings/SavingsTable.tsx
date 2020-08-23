import React from 'react';
import {formatNumber, toHumanDuration} from "../components/utils";
import BaseTable from "../components/BaseTable";
import {SavingsGoal} from "./model";

const columns = [
  {
    title: 'Goal',
    dataIndex: 'goal',
    key: 'goal',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    align: 'right' as 'right',
    render: formatNumber,
  },
  {
    title: 'Due',
    dataIndex: 'dueDate',
    key: 'dueDate',
    align: 'center' as 'center',
    render: toHumanDuration,
  },
];

const summary = (pageData: SavingsGoal[]) => {
  let totalAmount = 0;
  pageData.forEach(({amount}) => {
    totalAmount += amount;
  });
  return (
      <>
        <tr>
          <td><b>Total</b></td>
          <td style={{
            fontWeight: "bold",
            textAlign: 'right'
          }}>{formatNumber(totalAmount)}</td>
          <td></td>
        </tr>
      </>
  )
}

function SavingsTable(props) {
  return (
      <BaseTable dataSource={props.dataSource}
                 columns={columns}
                 summary={props.showSummary ? pageData => summary(pageData) : undefined}/>
  );
}

export default SavingsTable;
