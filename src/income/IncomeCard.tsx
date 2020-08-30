import React from 'react';
import BaseCard from "../components/card/BaseCard";
import IncomeTable from "./meta/IncomeTable";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import {useIncomeData} from "./meta/IncomeDataContext";

function IncomeCard() {
  const incomeData = useIncomeData()[0]
  return (
      <BaseCard title={"Ti"}
                description={"These are it"}
                actions={[
                  <SettingOutlined key="setting"/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>
        <IncomeTable dataSource={incomeData.allIncomings()} showSummary={true}/>
      </BaseCard>
  );
}

export default IncomeCard;
