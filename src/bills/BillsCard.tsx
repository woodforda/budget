import React from 'react';
import {EditOutlined, EllipsisOutlined, PlusOutlined} from "@ant-design/icons";
import BaseCard from "../components/card/BaseCard";
import BillsTable from "./meta/BillsTable";
import {useBillData} from "./meta/BillDataContext";

function BillsCard() {
  const billData = useBillData()[0]
  return (
      <BaseCard title={"One-off Bills"}
                description={"Upcoming bills to be paid"}
                actions={[
                  <PlusOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>
        <BillsTable dataSource={billData.adHocOutgoings()}/>
      </BaseCard>
  );
}

export default BillsCard;
