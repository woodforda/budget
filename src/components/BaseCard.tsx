import React from 'react';
import {Avatar, Card} from "antd";

const {Meta} = Card;

function BaseCard(props) {
  return (
      <Card hoverable
            actions={props.actions}>
        <Meta title={props.title}
              description={props.description}
              avatar={props.icon != null ? <Avatar icon={props.icon} size={"large"}/> : null}
        />
        {props.children}
      </Card>
  );
}

export default BaseCard;
