import React from 'react';
import BarChart from "../../components/graphs/BarChart";

function BudgetStatusGraph(props) {
  return (
      <BarChart
          data={props.data}
          keys={['difference']}
          indexBy="category"
          colors={(bar) => bar.data.difference >= 0 ? "green" : "red"}
      />
  );
}

export default BudgetStatusGraph;
