import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { EBreadcrumbs } from '../components/breadcrumbs';

export const ItemPage: React.StatelessComponent<RouteComponentProps<{id:string}>> = ({match}) => {
    const {id} = match.params;
    return (
        <React.Fragment>
            <EBreadcrumbs/>
            <div className='content'>
                Item detail {id}
            </div>
        </React.Fragment>
    )
};
