import { createContext, useState } from "react";
import { useHistory } from "react-router";

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
        // UserAccess.post("/login.php", {
        //     username: username,
        //     password: password,
        // })
        //     .then(function (response) {
        //         if (response.data.status_code === 200) {
        //             setSignedIn(true);
        //             setUsername("Kevin");
        //             history.push("/dashboard");
        //         } else {
        //             history.push("/");
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        setSignedIn(true);
        history.push("/dashboard");
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
