import React from 'react';
import BaseCard from '../components/card/BaseCard';
import SavingsTable from "./meta/SavingsTable";
import SavingsIcon from "./meta/SavingsIcon";
import {DESCRIPTION, TITLE} from "./meta/savings-labels";
import {useSavingsData} from './meta/SavingsDataContext';

function SavingsDashboardCard() {
  const savingsData = useSavingsData()[0]

  return (
      <BaseCard title={TITLE}
                description={DESCRIPTION}
                icon={<SavingsIcon/>}>
        <SavingsTable dataSource={savingsData.allSavingsGoals()} showSummary="true"/>
      </BaseCard>
  );
}

export default SavingsDashboardCard;
