import React from 'react';
import {Button, Space, Tooltip} from "antd";
import moment from "moment";
import {formatNumber, toHumanDuration} from "../utils";
import {DeleteFilled, EditFilled} from "@ant-design/icons";

export const renderDuration = (value, row, index) => {
    return (
        <Tooltip title={moment(value).format('YYYY-MM-DD')}>
            <span>{toHumanDuration(value)}</span>
        </Tooltip>
    )
}

export const renderAmount = (value, row, index) => {
    return formatNumber(value)
}

export const renderActionButton = () => {
    return (
        <Space size="middle">
            <p>Not defined</p>
        </Space>
    )
}
