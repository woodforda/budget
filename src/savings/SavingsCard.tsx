import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import BaseCard from "../components/BaseCard";
import SavingsTable from "./meta/SavingsTable";
import {allSavingsGoals} from "./meta/savings-data";

function SavingsCard() {
  return (
      <BaseCard title="Savings Goals"
                description={"What are we saving for?"}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>
        <SavingsTable dataSource={allSavingsGoals()} showSummary="true"/>
      </BaseCard>
  );
}

export default SavingsCard;
