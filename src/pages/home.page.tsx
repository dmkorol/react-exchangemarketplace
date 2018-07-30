import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { EBreadcrumbs } from '../components/breadcrumbs';

export const HomePage: React.StatelessComponent<RouteComponentProps<{}>> = props => {
    return (
        <React.Fragment>
            <EBreadcrumbs />
            <div className='content'>Home</div>
        </React.Fragment>
    )
};
