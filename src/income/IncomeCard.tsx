import React from 'react';
import BaseCard from "../components/card/BaseCard";
import IncomeTable from "./meta/IncomeTable";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import {useIncomeData} from "./meta/IncomeDataContext";
import {IncomeData} from "./meta/model";

function IncomeCard() {
  const incomeData = useIncomeData()[0]
  const setIncomeData = useIncomeData()[1]

  const createNew = () => {
    const data: IncomeData = new IncomeData(incomeData.allIncomings())
    data.setDrawVisible(true)
    setIncomeData(data)
  }

  return (
      <BaseCard title={"Ti"}
                description={"These are it"}
                actions={[
                  <SettingOutlined key="setting" onClick={createNew}/>,
                  <EditOutlined key="edit"/>,
                  <EllipsisOutlined key="ellipsis"/>
                ]}>
        <IncomeTable dataSource={incomeData.allIncomings()} showSummary={true}/>
      </BaseCard>
  );
}

export default IncomeCard;
