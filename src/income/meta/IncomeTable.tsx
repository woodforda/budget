import React from 'react';
import BaseTable from "../../components/table/BaseTable";
import {columnAmount, columnDueDate, columnPayer} from "../../components/table/table-columns";
import {summaryTotalAmount} from "../../components/table/Summaries";
import {Button, Space} from "antd";
import {EditFilled} from "@ant-design/icons";
import ButtonDelete from "../../components/button/ButtonDelete";

function IncomeTable(props) {
    let context = props.context

    const onEdit = (record) => {
        console.debug("Edit requested for this record ", record)
        context.edit(record)
    }

    const renderActionButton = (record) => {
        const remove = () => {
            console.debug("Delete requested for this record ", record)
            // let json = JSON.stringify(record, null, 2)
            // message.loading("Deleting record " + json)
            //     .then(() => message.success("Record deleted."), () => message.warn("Whatever"))
            context.remove(record)
        }

        return (
            <Space size="middle">
                <Button type={"default"}
                        style={{border: "none"}}
                        size={"small"}
                        shape={"circle"}
                        icon={<EditFilled/>}
                        onClick={() => onEdit(record)}/>
                <ButtonDelete record={record} onConfirm={remove}/>
            </Space>
        )
    }

    const columns = [
        columnPayer,
        columnAmount,
        columnDueDate,
        {
            title: 'Action',
            key: 'action',
            render: renderActionButton
        }
    ];


    return (
        <BaseTable dataSource={props.dataSource}
                   columns={columns}
                   summary={props.showSummary ? summaryTotalAmount : undefined}/>
    );
}

export default IncomeTable;
