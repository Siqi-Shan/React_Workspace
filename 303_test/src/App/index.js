import { Box, Container, CssBaseline } from "@material-ui/core";
import {
    createMuiTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core/styles";
import React from "react";
import "../styles/App.css";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import MainPage from "./MainPage";

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 1100,
            xl: 2000,
        },
    },
    palette: {
        type: "dark",
    },
});

const useStyles = makeStyles((theme) => ({
    root: {},
}));

function App() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box className={classes.root}>
                <Container maxWidth="xl">
                    {/* <SignIn />
                    <SignUp /> */}
                    <MainPage />
                </Container>
            </Box>
        </ThemeProvider>
    );
}

export default App;
