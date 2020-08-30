import React from 'react';
import BaseTable from "../../components/table/BaseTable";
import {columnAmount, columnDueDate, columnGoal} from "../../components/table/table-columns";
import {summaryTotalAmount} from "../../components/table/Summaries";

const columns = [
  columnGoal,
  columnAmount,
  columnDueDate,
];

function SavingsTable(props) {
  return (
      <BaseTable dataSource={props.dataSource}
                 columns={columns}
                 summary={props.showSummary ? summaryTotalAmount : undefined}/>
  );
}

export default SavingsTable;
