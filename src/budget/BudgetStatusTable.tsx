import React from 'react';
import BaseTable from "../components/table/BaseTable";
import {formatNumber} from "../components/utils";
import {Table} from "antd";
import {columnCategory} from "../components/table/table-columns";
import {renderAmount} from "../components/table/Renderers";

const columns = [
  columnCategory,
  {
    title: 'Budgeted',
    dataIndex: 'budget',
    key: 'budget',
    align: 'right' as 'right',
    render: renderAmount,
  },
  {
    title: 'Actual',
    dataIndex: 'actual',
    key: 'actual',
    align: 'right' as 'right',
    render: renderAmount,
  },
  {
    title: 'Difference',
    dataIndex: 'difference',
    key: 'difference',
    align: 'right' as 'right',
    render: renderAmount,
  },
];

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
      <Table.Summary.Row>
        <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
        <Table.Summary.Cell index={1} className={"summary-total"}>{formatNumber(totalBudget)}</Table.Summary.Cell>
        <Table.Summary.Cell index={2} className={"summary-total"}>{formatNumber(totalActual)}</Table.Summary.Cell>
        <Table.Summary.Cell index={3} className={"summary-total"}>{formatNumber(totalDifference)}</Table.Summary.Cell>
      </Table.Summary.Row>
  )
}

function BudgetStatusTable(props) {
  return (
      <BaseTable dataSource={props.dataSource}
                 columns={columns}
                 summary={props.showSummary ? summary : undefined}/>
  );
}

export default BudgetStatusTable;
