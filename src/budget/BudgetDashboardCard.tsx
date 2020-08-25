import React from 'react';
import BaseCard from "../components/BaseCard";
import BudgetStatusGraph from "./BudgetStatusGraph";
import BudgetIcon from "./meta/BudgetIcon";
import {DESCRIPTION, TITLE} from "./meta/budget-labels";

function BudgetDashboardCard() {
  return (
      <BaseCard title={TITLE}
                description={DESCRIPTION}
                icon={<BudgetIcon/>}>
        <div style={{height: '500px'}}>
          <BudgetStatusGraph/>
        </div>
      </BaseCard>
  );
}

export default BudgetDashboardCard;
