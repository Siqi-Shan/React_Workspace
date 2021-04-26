import DateFnsUtils from "@date-io/date-fns";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
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

export default function EditBudget() {
    const [input, setInput] = useState({
        amount: "",
    });
    const [selectedDate, handleDateChange] = useState(new Date());
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
            amount: "",
        });
        handleDateChange(new Date());
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={classes.paper}>
            <Paper className={classes.paperContent} elevation={24}>
                <Avatar className={classes.avatar}>
                    <AccountCircleIcon style={{ fontSize: 60 }} />
                </Avatar>
                <Typography component="h1" variant="h4">
                    Edit Budget
                </Typography>
                <form className={classes.form} onSubmit={onFormSubmit}>
                    <FormControl
                        fullWidth
                        className={classes.margin}
                        variant="outlined"
                    >
                        <InputLabel
                            htmlFor="outlined-adornment-amount"
                            color="secondary"
                            required
                        >
                            Amount
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={input.amount}
                            onChange={(e) => onInputChange(e)}
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            labelWidth={60}
                            color="secondary"
                            name="amount"
                            required
                        />
                    </FormControl>
                    <FormControl className={classes.margin} variant="outlined">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                label="Budget Time"
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                InputAdornmentProps={{ position: "start" }}
                                onChange={(date) => handleDateChange(date)}
                                color="secondary"
                                required
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Edit Budget!
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
