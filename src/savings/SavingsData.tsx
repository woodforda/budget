import React from 'react';
import {Table} from "antd";
import {DollarOutlined} from "@ant-design/icons";
import DashboardCard from '../dashboard/DashboardCard';

const dataSource = [
  {
    key: '1',
    goal: 'Acoustic Guitar',
    amount: 1000,
    dueDate: '25th December 2020',
  },
  {
    key: '2',
    goal: 'Wedding Australia',
    amount: 2000,
    dueDate: '13th March 2021',
  },
  {
    key: '3',
    goal: 'Vespa',
    amount: 6000,
    dueDate: 'Summer 2021',
  },
];

const columns = [
  {
    title: 'Goal',
    dataIndex: 'goal',
    key: 'goal',
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
  },
];

function SavingsDashboardCard() {
  return (
      <DashboardCard title="Savings Goals"
                     description={"Progress on savings targets"}
                     icon={<DollarOutlined/>}
                     link={"/savings"}
      >
        <Table dataSource={dataSource}
               style={{borderRadius: '25px'}}
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

export default SavingsDashboardCard;
