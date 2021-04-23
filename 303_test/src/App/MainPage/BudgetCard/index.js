import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EditIcon from "@material-ui/icons/Edit";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import React from "react";
import BudgetProgress from "./BudgetProgress";

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
                            Your Budget Tracking
                        </Typography>
                        <Typography variant="h5" component="h2">
                            April, 2021
                        </Typography>
                        <Typography
                            className={classes.pos}
                            color="textSecondary"
                        >
                            Updated 12:00:00 PM, 4/23/2021
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
                            Current Balance
                        </Typography>
                        <Typography
                            variant="h5"
                            component="h2"
                            className={classes.budgetNum}
                        >
                            $ 999.99
                        </Typography>
                        <div className={classes.budgetProgress}>
                            <BudgetProgress value={50} />
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
                <ButtonGroup variant="contained" color="secondary" fullwidth>
                    <Button startIcon={<EditIcon />}>
                        Edit Current Month Budget
                    </Button>
                    <Button startIcon={<TrendingUpIcon />}>
                        Edit Current Month Budget Target
                    </Button>
                    <Button startIcon={<DateRangeIcon />}>
                        Set New Monthly Budget
                    </Button>
                </ButtonGroup>
            </CardContent>
        </Card>
    );
}
