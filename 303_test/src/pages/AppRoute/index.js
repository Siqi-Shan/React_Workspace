import { Redirect, Route, Switch } from "react-router";
import MainPage from "../../components/MainPage";
import UserAccess from "../../components/UserAccess";

const AppRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={UserAccess} />
            <Route exact path="/dashboard" component={MainPage} />
            <Redirect to="/" />
        </Switch>
    );
};

export default AppRoute;
