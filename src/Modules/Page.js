import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import useStyles from './Styles';

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <WidgetsOutlinedIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Notification Widget
                    </Typography>
                    <Button onClick={() => window.location.replace("http://localhost:3000")} color="inherit">Home</Button>
                </Toolbar>
            </AppBar>
            <img src={require("./images/b3.webp")} alt="bg" className="bg-dim full-bg-size" />
        </div>
    );
}
