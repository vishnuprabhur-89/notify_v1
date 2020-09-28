import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './Styles';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, Container } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Badge from '@material-ui/core/Badge';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function ButtonAppBar() {
    const classes = useStyles();
    const [bell, hitBell] = React.useState(false);
    const [data, Update] = React.useState([]);
    const [condition, Update1] = React.useState(false);
    const [badge, setBadge] = React.useState(0);
    var matches = useMediaQuery('(min-width:1050px)');

    useEffect(() => {
        axios.get("http://localhost:5000/access/data")
            .then(res => {
                Update(res.data)
                let i = 0;
                res.data.filter((e) => {
                    if (e.read === "1001") {
                        i += 1;
                    }
                })
                setBadge(i)
            })
    }, [])

    const MakeUpdate = () => {
        var a = data.filter((i, j) => i.read = "1002")
        Update(a)
        setBadge(0)
        Update1(true)
    }

    return (
        <div className={classes.root}>
            <img src={require("./images/5.webp")} alt="bg" className="bg-dim full-bg-size" />
            <AppBar position="sticky">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <WidgetsOutlinedIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Notification Widget</Typography>
                    <IconButton onClick={() => hitBell(!bell)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        {bell ? <Badge color="secondary" badgeContent={badge} showZero><NotificationsActiveOutlinedIcon fontSize="large" /> </Badge> : <Badge color="secondary" badgeContent={badge} showZero><NotificationsNoneOutlinedIcon fontSize="large" /></Badge>}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container className={classes.widget}>
                <Grid container direction="row" justify="flex-end" alignItems="flex-start" spacing={3}>
                    <Grid item xs={12} sm={matches ? 5 : 10}>
                        <Collapse in={bell} >
                            <Paper elevation={4} className={classes.widget1}>
                                <Grid container direction="row" justify="flex-start" alignItems="flex-start" item xs={12}>
                                    <FormControlLabel className={classes.check1} control={<Checkbox checked={condition} onClick={MakeUpdate} className={classes.checkboxStyle} name="checked" color="primary" />} label="Make it all readed" />
                                </Grid>
                                {data.map((i, j) =>
                                    <Grid key={j} container direction="row" justify="flex-start" alignItems="flex-start" item xs={12} className={i.read === "1001" ? classes.designWidget1 : classes.designWidget2}>
                                        <Avatar className={classes.avatar} alt="Remy Sharp" src={require(`${i.img}`)} onClick={() => window.location.replace("http://localhost:3000/notification")} />
                                        <Typography onClick={() => window.location.replace("http://localhost:3000/notification")} className={i.read === "1001" ? classes.name1 : classes.name2}>{i.name}</Typography>
                                        <Typography onClick={() => window.location.replace("http://localhost:3000/notification")} className={classes.desc}>{i.date}</Typography>
                                    </Grid>
                                )}
                            </Paper>
                        </Collapse>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

