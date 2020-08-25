import React from 'react';
import BaseCard from '../components/BaseCard';
import SavingsTable from "./meta/SavingsTable";
import SavingsIcon from "./meta/SavingsIcon";
import {allSavingsGoals} from "./meta/savings-data";
import {DESCRIPTION, TITLE} from "./meta/savings-labels";

function SavingsDashboardCard() {
  return (
      <BaseCard title={TITLE}
                description={DESCRIPTION}
                icon={<SavingsIcon/>}>
        <SavingsTable dataSource={allSavingsGoals()} showSummary="true"/>
      </BaseCard>
  );
}

export default SavingsDashboardCard;
