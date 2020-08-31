import React from 'react';
import BaseCard from "../components/card/BaseCard";
import IncomeEntryForm from "./IncomeEntryForm";


function IncomeEntryCard() {
  return (
      <BaseCard title={"New Income Entry"}
                description={"Complete the form and press save"}>
        <IncomeEntryForm/>
      </BaseCard>
  );
}

export default IncomeEntryCard;
