import React from 'react';
import Page from "../components/Page";
import BudgetCard from "./BudgetCard";
import BudgetStatusCard from "./BudgetStatusCard";
import {Cards} from "../components/Cards";

function Budget() {
  return (
      <Page title={"Budget"}>
        <Cards>
          <BudgetCard/>
          <BudgetStatusCard/>
        </Cards>
      </Page>
  );
}

export default Budget;
