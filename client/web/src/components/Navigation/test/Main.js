import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        height: '300px',
        flexFlow: 'row wrap',   // = flexDirection: 'row', flexWrap: 'wrap'
        justifyContent: 'space-around'   // safest options for browser compability are flex-start, flex-end and center
    },
    card: {
        width: '15%',
        height: '50%',
        margin: 'auto'
    }
}));

const Main = props => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Paper className={classes.card}>
                <Typography variant="h3" component="h3">
                    Card 1
                </Typography>
            </Paper>
            <Paper className={classes.card}>
                <Typography variant="h3" component="h3">
                    Card 2
                </Typography>
            </Paper>
            <Paper className={classes.card}>
                <Typography variant="h3" component="h3">
                    Card 3
                </Typography>
            </Paper>
            <Paper className={classes.card}>
                <Typography variant="h3" component="h3">
                    Card 4
                </Typography>
            </Paper>
            <Paper className={classes.card}>
                <Typography variant="h3" component="h3">
                    Card 5
                </Typography>
            </Paper>
        </Container>
    );
}

export default Main;