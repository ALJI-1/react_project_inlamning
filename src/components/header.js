import React from 'react'
import { NavMenu } from '../routes/navmenu.js'

// Routrar bara till navmenu

export function Header() {
    return (
        <div className="container">
        <NavMenu />
    </div>
    );
}
