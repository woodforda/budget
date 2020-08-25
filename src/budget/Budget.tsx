import React from 'react';
import Page from "../components/Page";
import BudgetCard from "./BudgetCard";
import BudgetStatusCard from "./BudgetStatusCard";
import {Cards} from "../components/Cards";
import {TITLE} from "./meta/budget-labels";

function Budget() {
  return (
      <Page title={TITLE}>
        <Cards>
          <BudgetCard/>
          <BudgetStatusCard/>
        </Cards>
      </Page>
  );
}

export default Budget;
