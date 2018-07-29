import * as React from "react";
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

// TODO: try https://github.com/svenanders/react-breadcrumbs with custom components
// export interface IEBreadcrumbItem {
//     url?: string;
//     title: string;
// }

export class EBreadcrumbs extends React.PureComponent {
    public render() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/">Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                {/*<Breadcrumb.Item>Item</Breadcrumb.Item>*/}
            </Breadcrumb>
        );
    }
}
