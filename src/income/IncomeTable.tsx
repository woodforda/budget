import React from 'react';
import {RiseOutlined} from "@ant-design/icons";
import {allIncomings} from "./IncomeData";
import {formatNumber, toHumanDuration} from "../components/utils";
import BaseTable from "../components/BaseTable";
import BaseCard from "../components/BaseCard";

const columns = [
  {
    title: 'From',
    dataIndex: 'payer',
    key: 'payer',
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

function IncomeDashboardCard() {
  return (
      <BaseCard title="Income"
                description={"Upcoming credits to your account"}
                icon={<RiseOutlined/>}
      >
        <BaseTable dataSource={allIncomings()}
                   columns={columns}
                   summary={pageData => {
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
                             }}>{new Intl.NumberFormat().format(totalAmount)}</td>
                             <td></td>
                           </tr>
                         </>
                     )
                   }}/>
      </BaseCard>
  );
}

export default IncomeDashboardCard;
