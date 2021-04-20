import React, { useEffect, useState } from 'react'
import { MarketNav } from '../components/MarketNav';
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import { Grid, TextField, makeStyles, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import MyCard from '../components/MyCard'
import PostForm from '../components/PostForm'
import Copyright from '../components/Copyright'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import DashboardSharpIcon from "@material-ui/icons/DashboardSharp"
import { Avatar } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    search: {
        margin: theme.spacing(2),
    },
    cards: {
        flexGrow: 1,
        padding: theme.spacing(5),
    },
    title: {
        margin: theme.spacing(4),
        fontSize: "8em"
    },
    root: {
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2em"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        marginLeft: "auto",
        marginRight: "auto",
    },
    avatar: {
        margin: theme.spacing(1),
        background: "#56F6E4",
        display: "flex",
        flexDirection: "column",
        marginLeft: "auto",
        marginRight: 'auto'
    },
    }));

export function Items() {
    const classes = useStyles()


    // const [posts, setPosts] = useState({});
    // const { isLoading, error, isAuthenticated, user, getAccessTokenSilently  } = useAuth0()

    // useEffect (() => {
    //     async function exampleApiCallOnLoad() {
    //     const token = await getAccessTokenSilently();
    //     console.log(token)
    //     const options = { headers: { 'Authorization': `Bearer ${token}`}}
    //     const apiResult = await axios.get('http://localhost:5000/get', options);
    //     setPosts(apiResult.data);
    //     }
    //     exampleApiCallOnLoad();
    //     console.log('inside')
    // }, [getAccessTokenSilently])

    // console.log(isLoading, error, isAuthenticated, user)
    return (
        <>
            <MarketNav />
             <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>
                    <Avatar className={classes.avatar}>
                    <DashboardSharpIcon />
                    </Avatar>
                        <Typography component="h1" variant="h5">
                            Create a post
                        </Typography>
                    </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         <PostForm />
                    </AccordionDetails>
                </Accordion>
                </div>
            <Typography align="center" className={classes.title} variant="h3">
                    My Items
            </Typography>
            <Grid container justify="center">
                <div className={classes.cards}>
                    <MyCard />
                </div>
            </Grid>
            <Box mt={8}>
                <Copyright/>
            </Box>
        </>
    )
}