import { useAuth0 } from '@auth0/auth0-react';
import { MarketNav } from '../components/MarketNav';

export function Profile() {

    const { user } = useAuth0()
    const { nickname, picture, email } = user

    return (
        <div>
            <MarketNav/>
            <h1>Profile</h1>
            <img src={picture} alt='Profile'></img>
            <br/>
            <span>{nickname}</span>
            <br/>
            <span>{email}</span>
            <br/>
            <span>{JSON.stringify(user)}</span>
        </div>
    )
}
