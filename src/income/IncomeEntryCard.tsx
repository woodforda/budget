import React from 'react';
import BaseCard from "../components/card/BaseCard";
import IncomeForm from "./IncomeEntryForm";


function IncomeEntryCard() {
  return (
      <BaseCard title={"New Income Entry"}
                description={"Complete the form and press save"}>
        <IncomeForm/>
      </BaseCard>
  );
}

export default IncomeEntryCard;
