import React from 'react';
import {Space, Tooltip} from "antd";
import moment from "moment";
import {formatNumber, toHumanDuration} from "../utils";

export const renderDuration = (value) => {
    return (
        <Tooltip title={moment(value).format('YYYY-MM-DD')}>
            <span>{toHumanDuration(value)}</span>
        </Tooltip>
    )
}

export const renderAmount = (value) => {
    return formatNumber(value)
}

export const renderActionButton = () => {
    return (
        <Space size="middle">
            <p>Not defined</p>
        </Space>
    )
}
