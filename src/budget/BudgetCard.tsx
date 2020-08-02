import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import {adHocOutgoings} from "./BillsData";
import BaseCard from "../components/BaseCard";
import BillsTable from "./BillsTable";

function BillsCard() {
  return (
      <BaseCard title={"One-off Bills"}
                description={"Upcoming bills to be paid"}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>
        <BillsTable dataSource={adHocOutgoings()}/>
      </BaseCard>
  );
}

export default BillsCard;
