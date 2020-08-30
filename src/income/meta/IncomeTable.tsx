import React from 'react';
import BaseTable from "../../components/table/BaseTable";
import {columnAmount, columnDueDate, columnPayer} from "../../components/table/table-columns";
import {summaryTotalAmount} from "../../components/table/Summaries";

const columns = [
  columnPayer,
  columnAmount,
  columnDueDate,
];

function IncomeTable(props) {
  return (
      <BaseTable dataSource={props.dataSource}
                 columns={columns}
                 summary={props.showSummary ? summaryTotalAmount : undefined}/>
  );
}

export default IncomeTable;
