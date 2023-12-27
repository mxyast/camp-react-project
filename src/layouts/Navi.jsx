import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
    const [isAuthentication, setIsAuthentication] = useState(true)
    function handleSignOut(params) {
        setIsAuthentication(false);
    }
    function handleSignIn(params) {
        setIsAuthentication(true);
    }
    return (
        <div><Menu inverted fixed='top'>
            <Container>
                <Menu.Item name='home' />
                <Menu.Item name='messages' />

                <Menu.Menu position='right'>
                    <CartSummary />
                    {isAuthentication?<SignedIn singOut={handleSignOut} bisey="1"/>: <SignedOut singIn={handleSignIn}bisey="0"/>}
                   
                    
                </Menu.Menu>
            </Container>
        </Menu></div>
    )
}
