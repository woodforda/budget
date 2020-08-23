import React from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import BaseCard from "../components/BaseCard";
import {allActualsVerseBudget} from "./BudgetData";
import BudgetStatusTable from './BudgetStatusTable';

function BudgetCard() {
  return (
      <BaseCard title={"Categories"}
                description={"Current budget"}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>
        <BudgetStatusTable dataSource={allActualsVerseBudget()} showSummary={true}/>
      </BaseCard>
  );
}

export default BudgetCard;
