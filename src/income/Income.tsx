import React from 'react';
import Page from "../components/Page";
import {TITLE} from "./meta/income-labels";
import IncomeCard from './IncomeCard';
import IncomeEntryCard from "./IncomeEntryCard";
import {Cards} from "../components/card/Cards";
import {IncomeDataProvider} from "./meta/IncomeDataContext";

function Income() {
  return (
      <Page title={TITLE}>
        <IncomeDataProvider>
          <Cards>
            <IncomeCard/>
            <IncomeEntryCard/>
          </Cards>
        </IncomeDataProvider>
      </Page>
  );
}

export default Income;
