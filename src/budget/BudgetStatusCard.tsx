import React from 'react';
import BaseCard from "../components/BaseCard";
import BudgetStatusGraph from "./BudgetStatusGraph";
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';

function BudgetStatusCard() {
  return (
      <BaseCard title="Budget vs Actuals"
                description={"Your budget status"}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>

        <div style={{height: '400px'}}>
          <BudgetStatusGraph/>
        </div>
      </BaseCard>
  );
}

export default BudgetStatusCard;
