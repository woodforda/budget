import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import BaseCard from "../components/card/BaseCard";
import BudgetStatusTable from './BudgetStatusTable';
import {useBudgetData} from "./meta/BudgetDataContext";

function BudgetCard() {
  const budgetData = useBudgetData()[0]
  return (
      <BaseCard title={"Categories"}
                description={"Current budget"}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>
        <BudgetStatusTable dataSource={budgetData.allActualsVerseBudget()} showSummary={true}/>
      </BaseCard>
  );
}

export default BudgetCard;
