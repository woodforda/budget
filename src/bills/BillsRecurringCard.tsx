import React from 'react';
import {Button, Card, Table} from "antd";
import {SettingOutlined} from "@ant-design/icons";

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

function BillsCard() {
  return (
      <Card title="Recurring Bills"
            extra={[
              <Button icon={<SettingOutlined/>}/>
            ]}
            style={{borderRadius: '25px', flexGrow: 2}}
      >
        <Table dataSource={dataSource}
               columns={columns}
               bordered={false}
               pagination={false}
               size={"small"}/>
      </Card>
  );
}

export default BillsCard;
