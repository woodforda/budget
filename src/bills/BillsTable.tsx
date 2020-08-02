import React from 'react';
import {SettingOutlined} from "@ant-design/icons";
import {BILLS_DATA_SOURCE} from "./BillsData";
import {toHumanDuration} from "../components/utils";
import BaseCard from "../components/BaseCard";
import {Button} from "antd";
import BaseTable from "../components/BaseTable";

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
  let dataSource = BILLS_DATA_SOURCE.filter(it => !it.recurring)
  return (
      <BaseCard title={"One-off Bills"}
                extra={[
                  <Button icon={<SettingOutlined/>}/>
                ]}
      >
        <BaseTable dataSource={dataSource} columns={columns}/>
      </BaseCard>
  );
}

export default BillsCard;
