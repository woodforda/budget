import React from 'react';
import BaseCard from "../components/card/BaseCard";
import BudgetStatusGraph from "./meta/BudgetStatusGraph";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {useBudgetData} from "./meta/BudgetDataContext";

function BudgetStatusCard() {
  const budgetData = useBudgetData()[0]
  return (
      <BaseCard title="Budget vs Actuals"
                description={"Your budget status"}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>

        <BudgetStatusGraph data={budgetData.allActualsVerseBudget()}/>
      </BaseCard>
  );
}

export default BudgetStatusCard;
