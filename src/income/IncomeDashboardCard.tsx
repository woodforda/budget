import React from 'react';
import {Table} from "antd";
import {RiseOutlined} from "@ant-design/icons";
import DashboardCard from './DashboardCard';

const dataSource = [
  {
    key: '1',
    payer: 'SwissQuant Salary',
    amount: 3381.00,
    dueDate: '25th September 2020',
  },
  {
    key: '2',
    payer: 'Alimony',
    amount: 3000,
    dueDate: '1st October 2020',
  },
  {
    key: '3',
    payer: 'Rent - Cameron',
    amount: 150,
    dueDate: '1st October 2020',
  },
];

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
    render: (amt: number) => {
      return (<>{new Intl.NumberFormat().format(amt)}</>)
    },
  },
  {
    title: 'Due',
    dataIndex: 'dueDate',
    key: 'dueDate',
  },
];


function IncomeDashboardCard() {
  return (
      <DashboardCard title="Income" description={"Upcoming credits to your account"} icon={<RiseOutlined/>}>
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
                         <td colSpan={2}>{new Intl.NumberFormat().format(totalAmount)}</td>
                       </tr>
                     </>
                 )
               }}/>
      </DashboardCard>
  );
}

export default IncomeDashboardCard;
