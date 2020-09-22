import React from 'react';
import {Button, message, Popconfirm} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

function ButtonDelete(props) {
    let record = props.record

    return (
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={props.onConfirm} onCancel={props.onCancel}>
            <Button type={"default"}
                    style={{border: "none"}}
                    danger
                    ghost={true}
                    size={"small"}
                    shape={"circle"}
                    icon={<DeleteOutlined/>}/>
        </Popconfirm>
    );
}

export default ButtonDelete;
