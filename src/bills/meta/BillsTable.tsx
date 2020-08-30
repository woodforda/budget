import React from 'react';
import BaseTable from "../../components/table/BaseTable";
import {columnAmount, columnDueDate, columnPayee} from "../../components/table/table-columns";
import {summaryTotalAmount} from "../../components/table/Summaries";

const columns = [
  columnPayee,
  columnAmount,
  columnDueDate,
];

function BillsTable(props) {
  return (
      <BaseTable dataSource={props.dataSource}
                 columns={columns}
                 summary={props.showSummary ? summaryTotalAmount : undefined}
      />
  );
}

export default BillsTable;
