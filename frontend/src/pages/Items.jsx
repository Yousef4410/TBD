import React, { useEffect, useState } from 'react'
import { MarketNav } from '../components/MarketNav';
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';

export function Items() {
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
        <div>
            <MarketNav />
            This is the items page
            <br/>
            {/* <span>{JSON.stringify(posts)}</span> */}
        </div>
    )
}