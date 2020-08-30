import React from 'react';
import BaseCard from "../components/card/BaseCard";
import BudgetStatusGraph from "./meta/BudgetStatusGraph";
import BudgetIcon from "./meta/BudgetIcon";
import {DESCRIPTION, TITLE} from "./meta/budget-labels";
import {useBudgetData} from "./meta/BudgetDataContext";

function BudgetDashboardCard() {
  const budgetData = useBudgetData()[0]
  return (
      <BaseCard title={TITLE}
                description={DESCRIPTION}
                icon={<BudgetIcon/>}>
        <div style={{height: '500px'}}>
          <BudgetStatusGraph data={budgetData.overview()}/>
        </div>
      </BaseCard>
  );
}

export default BudgetDashboardCard;
