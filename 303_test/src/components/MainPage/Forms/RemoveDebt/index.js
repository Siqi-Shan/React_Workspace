import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MoneyOffIcon from "@material-ui/icons/MoneyOffRounded";
import "date-fns";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {},
    paper: {
        margin: theme.spacing(0, "3vh", 5, "3vh"),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1600px",
    },
    paperContent: {
        padding: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    avatar: {
        margin: theme.spacing(3),
        backgroundColor: theme.palette.info.main,
        width: 65,
        height: 65,
    },
    form: {
        marginTop: theme.spacing(1),
        width: "100%",
    },
    submit: {
        margin: theme.spacing(1.5, 0, 1.5),
    },
    extra: {
        marginTop: theme.spacing(1),
        width: "100%",
    },
    border: {
        borderColor: theme.palette.secondary.dark,
    },
    margin: {
        margin: theme.spacing(2, 0, 2, 0),
    },
}));

export default function RemoveDebt() {
    const [input, setInput] = useState({
        people: "",
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

    const onFormReset = () => {
        setInput({
            people: "",
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={classes.paper}>
            <Paper className={classes.paperContent} elevation={24}>
                <Avatar className={classes.avatar}>
                    <MoneyOffIcon style={{ fontSize: 60 }} />
                </Avatar>
                <Typography component="h1" variant="h4">
                    Edit This Debt
                </Typography>
                <form className={classes.form} onSubmit={onFormSubmit}>
                    <FormControl
                        className={classes.margin}
                        fullWidth
                        variant="outlined"
                    >
                        <InputLabel
                            id="select-outlined-label"
                            color="secondary"
                        >
                            Debt Person
                        </InputLabel>
                        <Select
                            labelId="select-outlined-label"
                            id="select-outlined"
                            value={input.people}
                            name="people"
                            onChange={(e) => onInputChange(e)}
                            label="Debt Person"
                            color="secondary"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="John">John</MenuItem>
                            <MenuItem value="Jane">Jane</MenuItem>
                            <MenuItem value="Tom">Tom</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Remove!
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
            </Paper>
        </div>
    );
}
