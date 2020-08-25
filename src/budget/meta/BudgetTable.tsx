import React from 'react';
import BaseTable from "../../components/BaseTable";
import {BudgetEntry} from "./model";
import {formatNumber} from "../../components/utils";

const columns = [
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'catgory',
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

const summary = (pageData: BudgetEntry[]) => {
  let totalBudget = 0;
  let totalActual = 0;
  pageData.forEach(({budget, actual}) => {
    totalBudget += budget;
    totalActual += actual;
  });
  return (
      <>
        <tr>
          <td><b>Total</b></td>
          <td style={{
            fontWeight: "bold",
            textAlign: 'right'
          }}>{formatNumber(totalBudget)}</td>
          <td style={{
            fontWeight: "bold",
            textAlign: 'right'
          }}>{formatNumber(totalActual)}</td>
        </tr>
      </>
  )
}

function BudgetTable(props) {
  return (
      <BaseTable dataSource={props.dataSource} columns={columns}
                 summary={props.showSummary ? pageData => summary(pageData) : undefined}/>
  );
}

export default BudgetTable;
