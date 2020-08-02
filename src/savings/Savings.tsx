import React from 'react';
import {PageHeader} from "antd";
import BudgetDashboardCard from '../dashboard/BudgetDashboardCard';

function Budget() {
  return (
      <div>
        <PageHeader title={"Budget"} onBack={() => null}/>
        <BudgetDashboardCard/>
      </div>
  );
}

export default Budget;
