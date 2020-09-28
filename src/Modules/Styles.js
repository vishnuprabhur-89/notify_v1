import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        fontFamily: "cambria, timesnewroman"
    },
    toolbar: {
        backgroundColor: "#5e35b1"
    },
    widget: {
        width: "80%",
        margin: theme.spacing(0, 5, 0, 5),
        zIndex: 100
    },
    widget1: {
        margin: theme.spacing(1),
        height: "80vmin",
        overflowY: "scroll",
        [theme.breakpoints.down(650)]: {
            height: "180vmin",
        }
    },
    container: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing(1),
    },
    designWidget1: {
        margin: theme.spacing(2, 1, 2, 5),
        padding: theme.spacing(1),
        backgroundColor: "white",
        color: "black",
        cursor: "pointer",
    },
    checkboxStyle: {
        margin: theme.spacing(2, 2, 0, 3),
    },
    check1: {
        margin: theme.spacing(2, 2, 0, 3),
        fontWeight: "800"
    },
    designWidget2: {
        margin: theme.spacing(2, 1, 2, 5),
        padding: theme.spacing(1),
        backgroundColor: "#eeeeee",
        color: "grey",
        cursor: "pointer"
    },
    avatar: {
        margin: theme.spacing(1),
    },
    name1: {
        margin: theme.spacing(1),
        fontWeight: "800",
        fontFamily: "cambria",
        [theme.breakpoints.down(650)]: {
            fontSize: "3vmin"
        },
    },
    name2: {
        margin: theme.spacing(1),
        fontFamily: "cambria",
        [theme.breakpoints.down(650)]: {
            fontSize: "3vmin"
        },
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    },
    desc: {
        margin: theme.spacing(-2, 0, 0, 8),
        fontFamily: "cambria",
        fontSize: "2vmin",
        color: "grey"
    }
}));

export default useStyles;
