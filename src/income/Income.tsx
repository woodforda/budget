import React from 'react';
import Page from "../components/Page";
import {TITLE} from "./meta/income-labels";
import IncomeCard from './IncomeCard';
import {Cards} from "../components/card/Cards";
import {IncomeDataProvider} from "./meta/IncomeDataContext";
import IncomeDrawer from "./IncomeDrawer";

function Income() {
  return (
      <Page title={TITLE}>
        <IncomeDataProvider>
          <Cards>
            <IncomeCard/>
            <IncomeDrawer/>
          </Cards>
        </IncomeDataProvider>
      </Page>
  );
}

export default Income;
