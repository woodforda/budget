import React from 'react';
import {ResponsiveBar} from '@nivo/bar';
import {allActualsVerseBudget} from "./BudgetData";

function BudgetStatusGraph() {
  return (
      <ResponsiveBar
          data={allActualsVerseBudget()}
          keys={['difference']}
          indexBy="category"
          margin={{top: 50, right: 10, bottom: 50, left: 50}}
          padding={0.35}
          groupMode="stacked"
          colors={(bar) => bar.data.difference >= 0 ? "green" : "red"}
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
  );
}

export default BudgetStatusGraph;
