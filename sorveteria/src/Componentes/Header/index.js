import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <header>
            <div className='secao-topo secao-limitada'>
                <div className='container-logo'>
                    <img className='img-logo' src="assets/logo.png" alt="logo"/>
                </div>
                <div className='secao-links'>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/PaginaSabores'>Sabores</Link>
                    <Link className='links' to='/PaginaSobre'>Sobre</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;