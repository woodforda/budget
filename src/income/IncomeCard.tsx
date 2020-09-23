import React from 'react';
import BaseCard from "../components/card/BaseCard";
import IncomeTable from "./meta/IncomeTable";
import ButtonCreate from "../components/button/ButtonCreate";

function IncomeCard(props) {
    let context = props.context
    let state = context.state

    return (
        <BaseCard title={"Income"}
                  description={"These are it"}
            // actions={[
            //     <SettingOutlined key="setting"/>,
            //     <EditOutlined key="edit"/>,
            //     <EllipsisOutlined key="ellipsis"/>
            // ]}
                  metaActions={[
                      <ButtonCreate onClick={context.add}/>
                  ]}
        >
            <IncomeTable context={context} dataSource={state.incomings} showSummary={true}/>
        </BaseCard>
    );
}

export default IncomeCard;
