import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/UserAuthProvider";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "1400px",
    },
}));

const UserAccess = () => {
    const classes = useStyles();
    const [signInPage, setsignInPage] = useState(false);
    const authContext = useContext(AuthContext);

    function signInToggle() {
        setsignInPage((signInPage) => !signInPage);
    }

    return (
        <Container className={classes.root} maxWidth={false}>
            {signInPage ? (
                <SignIn
                    toggle={signInToggle}
                    onSignInSubmit={authContext.onSignIn}
                />
            ) : (
                <SignUp
                    toggle={signInToggle}
                    onSignUpSubmit={authContext.onSignUp}
                />
            )}
        </Container>
    );
};

export default UserAccess;
