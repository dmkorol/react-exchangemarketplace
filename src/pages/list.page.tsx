import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { EBreadcrumbs } from '../components/breadcrumbs';
import { ListTableView } from '../components/list-table-view';

export const ListPage: React.StatelessComponent<RouteComponentProps<{}>> = props => {
    return (
        <React.Fragment>
            <EBreadcrumbs />
            <div className='content'>
                <ListTableView />
            </div>
        </React.Fragment>
    )
};
