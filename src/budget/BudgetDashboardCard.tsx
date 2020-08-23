import React from 'react';
import {PieChartOutlined} from "@ant-design/icons";
import BaseCard from "../components/BaseCard";
import BudgetStatusGraph from "./BudgetStatusGraph";

function BudgetDashboardCard() {
  return (
      <BaseCard title="Budget"
                description={"Your budget status"}
                icon={<PieChartOutlined/>}>
        <div style={{height: '500px'}}>
          <BudgetStatusGraph/>
        </div>
      </BaseCard>
  );
}

export default BudgetDashboardCard;
