import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Home from './../pages/Home/Home'
import Todos from './../pages/Todos/Todos'
import Projects from './../pages/Projects/Projects'
import Notes from './../pages/Notes/Notes'
import Peoples from './../pages/Peoples/Peoples'
import Calendar from './../pages/Calendar/Calendar'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';

const config = {
    pages: [
        {
            title: 'Home',
            icon: <HomeRoundedIcon />
        },
        {
            title: 'Todos',
            icon: <ListAltRoundedIcon />
        },
        {
            title: 'Projects',
            icon: <AccountTreeRoundedIcon />
        },
        {
            title: 'Notes',
            icon: <SubjectRoundedIcon />
        },
        {
            title: 'Peoples',
            icon: <ContactsRoundedIcon />
        },
        {
            title: 'Calendar',
            icon: <EventRoundedIcon />
        }
    ]
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function AppContainer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
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
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Life Planner
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Router>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {config.pages.map((page, index) => (
              <Link to={"/" + page.title.toLowerCase()}>
                <ListItem button key={page.title}>
                  <ListItemIcon>{page.icon}</ListItemIcon>
                  <ListItemText primary={page.title} />
                </ListItem>
              </Link>
          ))}
        </List> 
      </Drawer>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/todos">
                <Todos />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/notes">
                <Notes />
            </Route>
            <Route path="/peoples">
                <Peoples />
            </Route>
            <Route path="/calendar">
                <Calendar />
            </Route>
            <Route path="/">
                <Home />
            </Route>
            </Switch>
        </Router>
    </div>
  );
}

