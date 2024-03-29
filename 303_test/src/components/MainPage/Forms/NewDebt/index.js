import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
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

export default function NewDebt() {
    const [input, setInput] = useState({
        amount: "",
        people: "",
        comment: "",
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
            amount: "",
            people: "",
            comment: "",
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={classes.paper}>
            <Paper className={classes.paperContent} elevation={24}>
                <Avatar className={classes.avatar}>
                    <AttachMoneyRoundedIcon style={{ fontSize: 60 }} />
                </Avatar>
                <Typography component="h1" variant="h4">
                    Create A New Debt
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
                    <FormControl fullWidth className={classes.margin}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Debt Comments"
                            multiline
                            rows={3}
                            variant="outlined"
                            name="comment"
                            placeholder="e.g. location etc."
                            color="secondary"
                            value={input.comment}
                            onChange={(e) => onInputChange(e)}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Add!
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
