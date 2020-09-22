import React from 'react';
import BaseCard from "../components/card/BaseCard";
import IncomeTable from "./meta/IncomeTable";
import IncomeIcon from "./meta/IncomeIcon";
import {DESCRIPTION, TITLE} from "./meta/income-labels";
import {useIncomeState} from "./meta/reducer";

function IncomeDashboardCard() {
    const context = useIncomeState()
    return (
        <BaseCard title={TITLE}
                  description={DESCRIPTION}
                  icon={<IncomeIcon/>}>
            <IncomeTable context={context} dataSource={context.state.data.allIncomings()} showSummary={true}/>
        </BaseCard>
    );
}

export default IncomeDashboardCard;
