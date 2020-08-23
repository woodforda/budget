import React from 'react';
import {DollarOutlined} from "@ant-design/icons";
import {allSavingsGoals} from "./SavingsData";
import SavingsTable from "./SavingsTable";
import BaseCard from '../components/BaseCard';

function SavingsDashboardCard() {
  return (
      <BaseCard title="Savings"
                description={"Progress on savings targets"}
                icon={<DollarOutlined/>}>
        <SavingsTable dataSource={allSavingsGoals()} showSummary="true"/>
      </BaseCard>
  );
}

export default SavingsDashboardCard;
