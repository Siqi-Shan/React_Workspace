import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DescriptionIcon from "@material-ui/icons/Description";
import EditIcon from "@material-ui/icons/Edit";
import ListIcon from "@material-ui/icons/List";
import clsx from "clsx";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { AuthContext } from "../../contexts/UserAuthProvider";
import DashboardRoute from "../../pages/DashboardRoute";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: theme.palette.secondary.dark,
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 30,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "stretch",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(5, "5vh", 0, "5vh"),
    },
    card: {
        width: "100%",
        padding: theme.spacing(1),
    },
    routeLink: {
        color: "inherit",
        textDecoration: "inherit",
    },
}));

export default function MainPage() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const match = useRouteMatch();

    const authContext = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if (!authContext.isSignedIn) {
            history.push("/");
        }
    });

    const onDrawerOpen = () => {
        setOpen(true);
    };

    const onDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={onDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <ListIcon style={{ fontSize: 30 }} />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        <Link
                            to={match.path}
                            className={classes.routeLink}
                            replace
                        >
                            Budget Manager
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={onDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link to={match.path} className={classes.routeLink} replace>
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link
                        to={`${match.path}/billboard`}
                        className={classes.routeLink}
                        replace
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <DescriptionIcon />
                            </ListItemIcon>
                            <ListItemText primary="Bills Tracking" />
                        </ListItem>
                    </Link>
                    <Link
                        to={`${match.path}/addnewbill`}
                        className={classes.routeLink}
                        replace
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <AddBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add New Bill" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link
                        to={`${match.path}/debtboard`}
                        className={classes.routeLink}
                        replace
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <AccountBalanceIcon />
                            </ListItemIcon>
                            <ListItemText primary="Debts Tracking" />
                        </ListItem>
                    </Link>
                    <Link
                        to={`${match.path}/editdebt`}
                        className={classes.routeLink}
                        replace
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemText primary="Edit Debt" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link
                        to={`${match.path}/editbudget`}
                        className={classes.routeLink}
                        replace
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <AccountBalanceWalletIcon />
                            </ListItemIcon>
                            <ListItemText primary="Manage Budget" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </Drawer>
            <div className={classes.content}>
                <div className={classes.toolbar} />
                <DashboardRoute />
            </div>
        </div>
    );
}
