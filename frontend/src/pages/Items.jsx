import React, { useEffect, useState } from 'react'
import { MarketNav } from '../components/MarketNav';
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import { Grid, TextField, makeStyles } from '@material-ui/core'
import MyCard from '../components/MyCard'
import PostForm from '../components/PostForm'

const useStyles = makeStyles(theme => ({
    search: {
        margin: theme.spacing(2),
    },
    cards: {
        flexGrow: 1,
        padding: theme.spacing(5),
    }
}))

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
            <PostForm />
            <Grid container justify="center">
                <div className={classes.cards}>
                    <MyCard />
                </div>
            </Grid>
        </>
    )
}