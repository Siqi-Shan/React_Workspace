import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../../components/MainPage/Dashboard";
import NewBill from "../../components/MainPage/NewBill";

const DashboardRoute = () => {
    let match = useRouteMatch();

    return (
        <Switch>
            <Route
                exact
                path={`${match.path}/addnewbill`}
                component={NewBill}
            />
            <Route path={match.path} component={Dashboard} />
            <Redirect to={`${match.path}/`} />
        </Switch>
    );
};

export default DashboardRoute;
