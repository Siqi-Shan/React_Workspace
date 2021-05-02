import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import Dashboard from "../../components/MainPage/Dashboard";
import EditBill from "../../components/MainPage/Forms/EditBill";
import EditBudget from "../../components/MainPage/Forms/EditBudget";
import EditDebt from "../../components/MainPage/Forms/EditDebt";
import NewBill from "../../components/MainPage/Forms/NewBill";
import NewBudget from "../../components/MainPage/Forms/NewBudget";
import NewDebt from "../../components/MainPage/Forms/NewDebt";
import RemoveBill from "../../components/MainPage/Forms/RemoveBill";
import RemoveDebt from "../../components/MainPage/Forms/RemoveDebt";

const DashboardRoute = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route
                exact
                path={`${match.path}/addnewbill`}
                component={NewBill}
            />
            <Route exact path={`${match.path}/editbill`} component={EditBill} />
            <Route
                exact
                path={`${match.path}/editbudget`}
                component={EditBudget}
            />
            <Route
                exact
                path={`${match.path}/newbudget`}
                component={NewBudget}
            />
            <Route exact path={`${match.path}/newdebt`} component={NewDebt} />
            <Route exact path={`${match.path}/editdebt`} component={EditDebt} />
            <Route
                exact
                path={`${match.path}/removedebt`}
                component={RemoveDebt}
            />
            <Route
                exact
                path={`${match.path}/removebill`}
                component={RemoveBill}
            />
            <Route path={match.path} component={Dashboard} />
            <Redirect to={`${match.path}/`} />
        </Switch>
    );
};

export default DashboardRoute;
