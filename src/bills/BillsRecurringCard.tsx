import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import {recurringOutgoings} from "./meta/bills-data";
import BaseCard from "../components/BaseCard";
import BillsTable from "./meta/BillsTable";

function BillsRecurringCard() {
  return (
      <BaseCard title="Recurring Bills"
                description={"Bills that occur at regular intervals"}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>
        <BillsTable dataSource={recurringOutgoings()}/>
      </BaseCard>
  );
}

export default BillsRecurringCard;
