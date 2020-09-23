import React from 'react';
import {PageHeader} from "antd";

function Page(props) {
    return (
        <>
            <PageHeader title={props.title}
                        avatar={props.icon != null ? {
                            icon: props.icon,
                            size: "large",
                            shape: "circle",
                            className: "page-header-heading"
                        } : undefined}/>
            {props.children}
        </>
    );
}

export default Page;
