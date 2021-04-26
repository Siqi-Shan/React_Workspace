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
        UserAccess.post("/register.php", {
            username: username,
            password: password,
            email: email,
        })
            .then(function (response) {
                if (response.data.status_code === 200) {
                    setSignedIn(true);
                    setUsername("Kevin");
                    history.push("/dashboard");
                } else {
                    history.push("/");
                    alert("Something Wrong Happened. Please Try Again.");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function onSignInSubmit({ username, password }) {
        UserAccess.post("/login.php", {
            username: username,
            password: password,
        })
            .then(function (response) {
                if (response.data.status_code === 200) {
                    setSignedIn(true);
                    setUsername("Kevin");
                    history.push("/dashboard");
                } else {
                    history.push("/");
                    alert("Wrong Username/Password. Please Try Again.");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
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
