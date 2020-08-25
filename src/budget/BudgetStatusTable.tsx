import React from 'react';
import BaseTable from "../components/BaseTable";
import {formatNumber} from "../components/utils";
import {styled} from "styletron-react";

const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Budgeted',
    dataIndex: 'budget',
    key: 'budget',
    align: 'right' as 'right',
    render: formatNumber,
  },
  {
    title: 'Actual',
    dataIndex: 'actual',
    key: 'actual',
    align: 'right' as 'right',
    render: formatNumber,
  },
  {
    title: 'Difference',
    dataIndex: 'difference',
    key: 'difference',
    align: 'right' as 'right',
    render: formatNumber,
  },
];

const TD = styled("td", {
  fontWeight: "bold",
  textAlign: 'right',
})

const summary = (pageData) => {
  let totalBudget = 0;
  let totalActual = 0;
  let totalDifference = 0;
  pageData.forEach(({budget, actual, difference}) => {
    totalBudget += budget
    totalActual += actual
    totalDifference += difference
  });
  return (
      <>
        <tr>
          <td><b>Total</b></td>
          <TD>{formatNumber(totalBudget)}</TD>
          <TD>{formatNumber(totalActual)}</TD>
          <TD>{formatNumber(totalDifference)}</TD>
        </tr>
      </>
  )
}

function BudgetStatusTable(props) {
  return (
      <BaseTable dataSource={props.dataSource} columns={columns}
                 summary={props.showSummary ? pageData => summary(pageData) : undefined}/>
  );
}

export default BudgetStatusTable;
