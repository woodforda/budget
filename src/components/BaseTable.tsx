import React from 'react';
import {Table} from "antd";
import {FallOutlined} from "@ant-design/icons";
import DashboardCard from '../dashboard/DashboardCard';
import {BILLS_DATA_SOURCE} from "./BillsData";
import {toHumanDuration} from "../components/utils";

const dataSource = BILLS_DATA_SOURCE

const columns = [
  {
    title: 'To',
    dataIndex: 'payee',
    key: 'payee',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    align: 'right' as 'right',
    render: (amt: number) => {
      return (<>{new Intl.NumberFormat().format(amt)}</>)
    },
  },
  {
    title: 'Due',
    dataIndex: 'dueDate',
    key: 'dueDate',
    align: 'center' as 'center',
    render: toHumanDuration,
  },
];

function BillsDashboardCard() {
  return (
      <DashboardCard title="Bills"
                     description={"Upcoming bills to be paid"}
                     icon={<FallOutlined/>}
                     link={"/bills"}>
        <Table dataSource={dataSource}
               columns={columns}
               bordered={false}
               pagination={false}
               size={"small"}
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
      </DashboardCard>
  );
}

export default BillsDashboardCard;
