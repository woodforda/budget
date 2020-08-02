import React from 'react';
import {PieChartOutlined} from "@ant-design/icons";
import {ResponsiveBar} from '@nivo/bar';
import {allBudgetEntries} from "./BudgetData";
import BaseCard from "../components/BaseCard";

function BudgetDashboardCard() {
  let dataSource: any[] = []

  allBudgetEntries().forEach(x => {
    let amount = (x.budget - x.actual)
    let amountColor = "green"
    if (amount < 0) {
      amountColor = "red"
    }
    dataSource.push({category: x.category, amount: amount, amountColor: amountColor})
  })

  return (
      <BaseCard title="Budget"
                description={"Your budget status"}
                icon={<PieChartOutlined/>}>
        <div style={{height: '500px'}}>
          <ResponsiveBar
              data={dataSource}
              keys={['amount']}
              indexBy="category"
              margin={{top: 50, right: 10, bottom: 50, left: 50}}
              padding={0.35}
              groupMode="stacked"
              colors={{scheme: 'nivo'}}
              borderColor={{from: 'color', modifiers: [['darker', 1.6]]}}
              enableLabel={false}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{from: 'color', modifiers: [['darker', 1.6]]}}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
          />
        </div>
      </BaseCard>
  );
}

export default BudgetDashboardCard;
