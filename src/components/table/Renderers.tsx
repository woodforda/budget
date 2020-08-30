import React from 'react';
import {Tooltip} from "antd";
import moment from "moment";
import {formatNumber, toHumanDuration} from "../utils";


export const renderDuration = (value, row, index) => {
  return (
      <Tooltip title={moment(value).format('YYYY-MM-DD')}>
        <span>{toHumanDuration(value)}</span>
      </Tooltip>
  );
};

export const renderAmount = (value, row, index) => {
  return formatNumber(value)
};

