import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import BaseCard from "../components/card/BaseCard";
import SavingsTable from "./meta/SavingsTable";
import {useSavingsData} from "./meta/SavingsDataContext";

function SavingsCard() {
  const savingsData = useSavingsData()[0]
  return (
      <BaseCard title="Savings Goals"
                description={"What are we saving for?"}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>
        <SavingsTable dataSource={savingsData.allSavingsGoals()} showSummary="true"/>
      </BaseCard>
  );
}

export default SavingsCard;
