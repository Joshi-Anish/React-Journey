import React from 'react'


function Header() {
    return (
        <header>
            <img className="Nav-image" src="src/assets/react.png" alt="React logo"  />
            <nav>
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         </header>
    )
}
export default Header