import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import BaseCard from "../components/card/BaseCard";
import BillsTable from "./meta/BillsTable";
import {useBillData} from "./meta/BillDataContext";

function BillsRecurringCard() {
  const billData = useBillData()[0]

  return (
      <BaseCard title="Recurring Bills"
                description={"Bills that occur at regular intervals"}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>
        <BillsTable dataSource={billData.recurringBills()}/>
      </BaseCard>
  );
}

export default BillsRecurringCard;
