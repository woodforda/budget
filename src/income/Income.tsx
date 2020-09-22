import React from 'react';
import Page from "../components/Page";
import {TITLE} from "./meta/income-labels";
import IncomeCard from './IncomeCard';
import {Cards} from "../components/card/Cards";
import IncomeDrawer from "./IncomeDrawer";
import {useIncomeState} from "./meta/reducer";
import IncomeIcon from "./meta/IncomeIcon";


function Income() {
    const context =  useIncomeState()
    return (
        <Page title={TITLE} icon={<IncomeIcon/>}>
            <Cards>
                <IncomeCard context={context}/>
                <IncomeDrawer context={context}/>
            </Cards>
        </Page>
    );
}

export default Income;
