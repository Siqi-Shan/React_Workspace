import { Redirect, Route, Switch } from "react-router";
import MainPage from "../../components/MainPage";
import UserAccess from "../../components/UserAccess";

const AppRoute = () => {
    return (
        <Switch>
            <Route path="/dashboard" component={MainPage} />
            <Route path="/" component={UserAccess} />
            <Redirect to="/" />
        </Switch>
    );
};

export default AppRoute;
