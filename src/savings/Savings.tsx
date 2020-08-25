import React from 'react';
import Page from '../components/Page';
import SavingsCard from './SavingsCard';
import {TITLE} from "./meta/savings-labels";

function Savings() {
  return (
      <Page title={TITLE}>
        <SavingsCard/>
      </Page>
  );
}

export default Savings;
