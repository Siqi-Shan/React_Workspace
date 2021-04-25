import { createContext, useState } from "react";
import { useHistory } from "react-router";
import UserAccess from "../../adapters/UserAccess";

export const AuthContext = createContext({
    username: "",
    isSignedIn: false,
    onSignIn: () => {},
    onSignUp: () => {},
});

export const UserAuthProvider = ({ children }) => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [isSignedIn, setSignedIn] = useState(false);

    function onSignUpSubmit({ username, password, email }) {
        console.log(username, password, email);

        // let username = form[1].value;
        // setLoggedIn(true);
        // setUsername(username);
        // console.log("welcome! " + username);
        // console.log("Now you are logged in: ", isLoggedIn);
        // history.push("/products");
    }

    function onSignInSubmit({ username, password }) {
        console.log(username, password);

        UserAccess.post("/login.php", {
            username: username,
            password: password,
        });

        // setLoggedIn(true);
        // setUsername("David");
        // history.push("/products");
    }

    return (
        <AuthContext.Provider
            value={{
                username: username,
                isSignedIn: isSignedIn,
                onSignIn: onSignInSubmit,
                onSignUp: onSignUpSubmit,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
