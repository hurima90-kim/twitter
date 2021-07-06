import { authService } from 'fBase'
import React from 'react'

// function compoenet
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const onLogOutClick = () => authService.signOut();
    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}