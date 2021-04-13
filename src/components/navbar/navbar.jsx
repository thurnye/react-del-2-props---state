import React from 'react';
import './nav.css'
const navbar = (props) => {

    const navItems = props.navitems
    console.log(navItems)


    return (
        <header>
            <nav>
                <div className="about">
                    <a href="#about">About</a>
                </div>
                <div className="nav-item">
                    <ul>
                        {navItems.map((el) => {
                            return <li key= {el}><a href={`#${el}`} >{el}</a></li>
                        })}
                        
                        
                    </ul>
                </div>
            </nav>
            {/* {props.navItems} */}
        </header>
    );
}

export default navbar;
