import React from 'react';
import {Table} from "antd";
import {FallOutlined} from "@ant-design/icons";
import DashboardCard from './DashboardCard';

const dataSource = [
  {
    key: '1',
    payee: 'Sanitas Krankenkasse',
    amount: 32.00,
    dueDate: '1st October 2020',
  },
  {
    key: '2',
    payee: 'Juliane Brown',
    amount: 665,
    dueDate: '1st October 2020',
  },
  {
    key: '3',
    payee: 'Salt Mobile',
    amount: 94,
    dueDate: '1st October 2020',
  },
  {
    key: '4',
    payee: 'Herr Zollinger',
    amount: 1290,
    dueDate: '1st October 2020',
  },
  {
    key: '5',
    payee: 'Band Room',
    amount: 100,
    dueDate: '1st October 2020',
  },
  {
    key: '6',
    payee: 'Poodle',
    amount: 205,
    dueDate: '1st October 2020',
  },
  {
    key: '7',
    payee: 'Steueramt',
    amount: 2000.00,
    dueDate: '1st October 2020',
  },
  {
    key: '8',
    payee: 'SBB',
    amount: 125,
    dueDate: '1st October 2020',
  },
];

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
  },
];

function BillsDashboardCard() {
  return (
      <DashboardCard title="Bills" description={"Upcoming bills to be paid"} icon={<FallOutlined/>}>
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

export default BillsDashboardCard;
