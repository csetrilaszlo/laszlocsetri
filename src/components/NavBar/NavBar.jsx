import React, { Component } from 'react';
import { Button } from '../Button/Button';
import logo from './logo.svg';
import { MenuItems } from './Menu/Menu';


import './NavBar.css';

export class Navbar extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked })
    }

    render(){
        return(
            <nav className='NavbarItems'>
                <img src={logo} alt='logo' className='navbar-logo' />
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                             <li key={index}>
                                <a className={item.cName}
                                href={item.url}>{item.label}</a>
                            </li>
                        )
                    })}

                   
                </ul>
                <Button>Sign Up</Button>
            </nav>
        )
    }
} 