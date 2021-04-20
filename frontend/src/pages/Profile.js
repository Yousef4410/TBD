import { useAuth0 } from '@auth0/auth0-react'
import { MarketNav } from '../components/MarketNav'
import { Avatar, Container, Paper, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import axios from 'axios'
import { useEffect, useState } from 'react'

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: "10em",
        width: "10em",
        margin: "5em",
        top: "3em"
    },
    button: {
        margin: theme.spacing(1),
    },
    bg: {
        backgroundColor: "#000FF"
    },
    text: {
        marginBottom: "1em"
    }
}))

export function Profile() {
    const [profile, setProfile] = useState({});
    const { user, isLoading, error, isAuthenticated, getAccessTokenSilently } = useAuth0()

    useEffect(() => {
        setProfile(user)
    }, [user]);

    async function updateProfile(username, email, avatar) {
        const token = await getAccessTokenSilently();
        const options = { headers: { 'Authorization': `Bearer ${token}` } }
        const apiResult = await axios.post(`http://localhost:5000/users/${profile.sub}`, options); // This line is changed per API call, change sub to API name
        setProfile(apiResult.data)
    }

    async function editForm() {

    }

    async function deleteProfile() {
        // delete user
    }


    const classes = useStyles()

    return (
        <div>
            <MarketNav />
            <main>
                <div>
                    <Container container maxWidth="lg">
                        <Paper marginTop="5em" align="center" elevation={5}>
                            <Avatar src={profile.picture} className={classes.avatar} />
                            <Typography className={classes.text} variant="h4">{profile.nickname}</Typography>
                            <Typography className={classes.text}variant="h5">{profile.email}</Typography>
                        </Paper>
                        <Button onClick={deleteProfile}
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                        >
                            Delete
                        </Button>
                        <Button onClick={editForm} variant="contained" size="medium" color="primary" className={classes.margin}>
                            Edit
                        </Button>

                    </Container>
                </div>
            </main>
        </div>
    )
}