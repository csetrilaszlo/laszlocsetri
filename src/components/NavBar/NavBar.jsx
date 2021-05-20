import React, { Component } from 'react';
import { Button } from '../Button/Button';
import logo from './logo.svg';
import { MenuItems } from './Menu/Menu';
import menu from './menu.svg';
import close from './close.svg'



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
            <header className='NavbarItems'>
                <img src={logo} alt='logo' className='navbar-logo' />
                <img src={this.state.clicked ? `${close}` : `${menu}`} alt='menu' onClick={this.handleClick} className='menu-logo' >
                    
                </img>
               
                {/* <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div> */}
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
                
                <Button><a
                href=""
                target="_blank"
                class="resume-link"
                >Résumé</a
              ></Button>
                
            </header>
        )
    }
} 