import React from 'react';
import BaseTable from "../../components/table/BaseTable";
import {BudgetEntry} from "./model";
import {formatNumber} from "../../components/utils";
import {Table} from "antd";
import {columnActual, columnBudget, columnCategory, columnDifference} from "../../components/table/table-columns";

const columns = [
  columnCategory,
  columnBudget,
  columnActual,
  columnDifference
];

const summary = (pageData: BudgetEntry[]) => {
  let totalBudget = 0;
  let totalActual = 0;
  pageData.forEach(({budget, actual}) => {
    totalBudget += budget;
    totalActual += actual;
  });
  return (
      <Table.Summary.Row>
        <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
        <Table.Summary.Cell className={"summary-total"} index={1}>{formatNumber(totalBudget)}</Table.Summary.Cell>
        <Table.Summary.Cell className={"summary-total"} index={2}>{formatNumber(totalActual)}</Table.Summary.Cell>
      </Table.Summary.Row>
  )
}

function BudgetTable(props) {
  return (
      <BaseTable dataSource={props.dataSource} columns={columns}
                 summary={props.showSummary ? summary : undefined}/>
  );
}

export default BudgetTable;
