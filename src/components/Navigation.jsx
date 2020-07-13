import React, { memo } from 'react';

const Navigation = () => {
    console.log('Navigation Component')
    return (
        <header className="navigation-menu">
            <nav>
                <h1>TO DO App</h1>
            </nav>
        </header>
    )
}

export default memo(Navigation);