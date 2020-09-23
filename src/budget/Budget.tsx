import React from 'react';
import Page from "../components/Page";
import BudgetCard from "./BudgetCard";
import BudgetStatusCard from "./BudgetStatusCard";
import {Cards} from "../components/card/Cards";
import {TITLE} from "./meta/budget-labels";
import {BudgetDataProvider} from "./meta/BudgetDataContext";
import BudgetIcon from "./meta/BudgetIcon";

function Budget() {
  return (
      <Page title={TITLE} icon={<BudgetIcon/>}>
        <BudgetDataProvider>
          <Cards>
            <BudgetCard/>
            <BudgetStatusCard/>
          </Cards>
        </BudgetDataProvider>
      </Page>
  );
}

export default Budget;
