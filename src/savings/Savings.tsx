import React from 'react';
import Page from '../components/Page';
import SavingsCard from './SavingsCard';
import {TITLE} from "./meta/savings-labels";
import {Cards} from "../components/card/Cards";
import {SavingsDataProvider} from "./meta/SavingsDataContext";

function Savings() {
  return (
      <Page title={TITLE}>
        <SavingsDataProvider>
          <Cards>
            <SavingsCard/>
          </Cards>
        </SavingsDataProvider>
      </Page>
  );
}

export default Savings;
