import React, { memo } from 'react';
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Navigation = () => {
    console.log('Navigation Component')
    return (
        <header className="navigation-menu">
            <nav>
                <h1>TO DO App</h1>
                <div className="sign-out" >
                    <AmplifySignOut />
                </div>
            </nav>
        </header>
    )
}

export default memo(Navigation);