import React from 'react';
import {ResponsiveBar} from '@nivo/bar';
import GraphContainer from "./GraphContainer";

function BarChart(props) {
  return (
      <GraphContainer>
        <ResponsiveBar
            data={props.data}
            keys={props.keys}
            indexBy={props.indexBy}
            margin={{top: 50, right: 10, bottom: 50, left: 50}}
            padding={0.35}
            groupMode="stacked"
            colors={props.colors}
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
      </GraphContainer>
  );
}

export default BarChart;
