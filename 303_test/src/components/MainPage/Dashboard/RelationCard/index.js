import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import QueueIcon from "@material-ui/icons/Queue";
import React from "react";
import DebtProgress from "./DebtProgress";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        padding: theme.spacing(1.5, 2, 1.5, 1.5),
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    subtitle: {
        marginBottom: 12,
    },
    budgetNum: {
        marginTop: 0,
        color: theme.palette.info.dark,
        fontWeight: 500,
    },
    budgetProgress: {
        marginTop: 15,
        width: "100%",
    },
    pos: {
        marginTop: 5,
        marginBottom: 12,
    },
    border: {
        borderColor: theme.palette.action.disabled,
    },
    actionBorder: {
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        borderColor: theme.palette.action.disabled,
    },
}));

export default function BudgetCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} raised>
            <CardContent>
                <Grid container>
                    <Grid item xs={false} sm={false} md={false} lg={5}>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Highest Debt Relation
                        </Typography>
                        <Typography variant="h5" component="h2">
                            John Doe
                        </Typography>
                        <Typography
                            className={classes.pos}
                            color="textSecondary"
                        >
                            Last Debt: 12:00:00 PM, 4/23/2021
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={true}>
                        <Box
                            borderBottom={2}
                            mt={2}
                            mb={2}
                            className={classes.border}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={7}>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Debt Amount
                        </Typography>
                        <Typography
                            variant="h5"
                            component="h2"
                            className={classes.budgetNum}
                        >
                            $ 59.99
                        </Typography>
                        <div className={classes.budgetProgress}>
                            <DebtProgress value={25} />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box
                            borderBottom={2}
                            mt={5}
                            className={classes.border}
                        />
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent>
                <ButtonGroup variant="contained" color="secondary" fullWidth>
                    <Button startIcon={<QueueIcon />}>
                        Add a New Debt to This Person
                    </Button>
                    <Button startIcon={<EditIcon />}>
                        Edit This Person's Debt
                    </Button>
                    <Button startIcon={<DeleteForeverIcon />}>
                        Remove This Person's Debt
                    </Button>
                </ButtonGroup>
            </CardContent>
        </Card>
    );
}
