import {Outgoing} from "../../bills/meta/model";
import {Table} from "antd";
import {formatNumber} from "../utils";
import React from "react";

export const summaryTotalAmount = (pageData: Outgoing[]) => {
  let totalAmount = 0;
  pageData.forEach(({amount}) => {
    totalAmount += amount;
  });
  return (
      <Table.Summary.Row>
        <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
        <Table.Summary.Cell index={1} className={"summary-total"}>{formatNumber(totalAmount)}</Table.Summary.Cell>
        <Table.Summary.Cell index={2}></Table.Summary.Cell>
      </Table.Summary.Row>
  )
}
