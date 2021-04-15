import React from 'react';
import './nav.css';
import Logout from '../LogOut/logOut'




const navbar = (props) => {

    const navItems = props.navitems
    // console.log(navItems)


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
                < Logout 
                logOut={props.logOut} 
                logIn={props.logIn} 
                name ={props.name}
                IsLogged={props.IsLogged}
                />
            </nav>
            {/* {props.navItems} */}
        </header>
    );
}

export default navbar;
