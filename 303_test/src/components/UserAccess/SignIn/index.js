import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "90vh",
        marginTop: "5vh",
        marginBottom: "5vh",
    },
    image: {
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    paper: {
        margin: theme.spacing(6, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.info.main,
        width: 70,
        height: 70,
    },
    form: {
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(1.5, 0, 1.5),
    },
    border: {
        borderColor: theme.palette.secondary.dark,
    },
}));

export default function SignIn({ toggle, onSignInSubmit }) {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });
    const classes = useStyles();

    const onInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setInput({
            ...input,
            [name]: value,
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        onSignInSubmit({
            username: input.username,
            password: input.password,
        });
    };

    const onFormReset = () => {
        setInput({
            username: "",
            password: "",
        });
    };

    return (
        <Grid container className={classes.root} component={Card} raised>
            <Grid
                item
                xs={false}
                sm={false}
                md={5}
                lg={7}
                className={classes.image}
            />
            <Grid item xs={12} sm={12} md={7} lg={5}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AccountCircleIcon style={{ fontSize: 65 }} />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign In
                    </Typography>
                    <form className={classes.form} onSubmit={onFormSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            color="secondary"
                            placeholder="e.g. tommy_trojan"
                            value={input.username}
                            onChange={(e) => onInputChange(e)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            color="secondary"
                            placeholder="*************"
                            value={input.password}
                            onChange={(e) => onInputChange(e)}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Button
                            fullWidth
                            variant="outlined"
                            color="secondary"
                            className={classes.submit}
                            onClick={() => onFormReset()}
                        >
                            Reset
                        </Button>
                        <Box
                            borderBottom={2}
                            className={classes.border}
                            mt={2}
                            mb={2}
                        />
                    </form>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.submit}
                        onClick={toggle}
                    >
                        Register as New User!
                    </Button>
                    <Grid container>
                        <Grid item lg>
                            <Link href="#" color="secondary">
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
}
