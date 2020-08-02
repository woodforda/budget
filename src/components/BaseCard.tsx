import React from 'react';
import {Button, Card, Table} from "antd";
import {SettingOutlined} from "@ant-design/icons";
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

function BillsCard() {
  return (
      <Card title="Bills"
            extra={[
              <Button icon={<SettingOutlined/>}/>
            ]}
            hoverable
            style={{borderRadius: '25px', flexGrow: 1, margin: '0px 5px 0px 5px'}}
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
