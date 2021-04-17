import { useAuth0 } from '@auth0/auth0-react'
import { MarketNav } from '../components/MarketNav'
import { Avatar, Container, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import { useEffect, useState } from 'react'

const useStyles = makeStyles(() => ({
    avatar: {
        height: "10em",
        width: "10em",
        margin: "2em",
    },
}))

export function Profile() {
    const [profile, setProfile] = useState({});
    const { user, isLoading, error, isAuthenticated, getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        setProfile(user)
    }, [user]);

    async function updateProfile(nickname, email) {
        const token = await getAccessTokenSilently();
        const options = { headers: { 'Authorization': `Bearer ${token}` } }
        const apiResult = await axios.post(`http://localhost:5000/users/${profile.sub}`, options); // This line is changed per API call, change sub to API name
        setProfile(apiResult.data)
    }


    const classes = useStyles()

    return (
        <div>
            <MarketNav />
            <main>
                <div>
                    <Container container maxWidth="lg">
                        <Paper elevation={5}>
                            <Avatar src={profile.picture} className={classes.avatar} />
                            <Typography variant="h4">{profile.nickname}</Typography>
                            <Typography variant="h5">{profile.email}</Typography>
                        </Paper>
                    </Container>
                </div>
            </main>
        </div>
    )
}