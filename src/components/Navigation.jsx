import React, { memo, useEffect, useMemo } from 'react';
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from 'aws-amplify';

const Navigation = () => {
    console.log('Navigation Component')
    useEffect(() => {
        getUserDetails();
    }, [])
    const getUserDetails = async () => {
        const { attributes, username } = await Auth.currentUserInfo();
        console.log({ attributes, username });
    }
    return (
        <header className="navigation-menu">
            <nav>
                <h1>TO DO App</h1>
                <pre>
                    {JSON.stringify(getUserDetails)}
                </pre>
                <div className="sign-out" >
                    <AmplifySignOut />
                </div>
            </nav>
        </header>
    )
}

export default memo(Navigation);