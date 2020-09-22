import React, {useState} from 'react';
import {Table} from "antd";
import {Incoming} from "../../income/meta/model";

function BaseTable(props) {
    const [rowsSelected, setRowsSelected] = useState([] as string[])

    return (
        <>

            <Table<Incoming> dataSource={props.dataSource}
                             columns={props.columns}
                             summary={props.summary}
                             bordered={false}
                             pagination={false}
                             rowSelection={{
                                 hideSelectAll: true,
                                 selectedRowKeys: rowsSelected,
                                 columnWidth: 0,
                                 renderCell: () => "",
                                 onChange: (keys) => {
                                     setRowsSelected(keys as string[])
                                 },
                             }}
                             size={"small"}
                             onRow={(record) => ({
                                 onClick: () => {
                                     console.info("the selection has changed....", record)
                                     setRowsSelected([record.key])
                                 },
                             })}
            />
        </>
    )
        ;
}

export default BaseTable
