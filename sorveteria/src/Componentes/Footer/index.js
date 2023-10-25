import React from 'react';
import './style.css'

export default function Footer(){
    return(
        <footer>
            <div className='secao-limitada'>
                <section className='footer-Contatos'>
                    <div className='container-logo'>
                        <img className='img-logo' src="assets/logo.png" alt="logo"/>
                    </div>
                    <div className='footer-info'>
                        <h4>ENDEREÇO</h4>
                        <p>Av.Bernardino de Camps, 98</p>
                        <p>São Paulo, SP 12345-678</p>
                    </div>
                    <div className='footer-info'>
                        <h4>CONTATO</h4>
                        <p>info@meusite.com</p>
                        <p>Tel:(11)3456-7890</p>
                    </div>
                    <div className='footer-info'>
                        <h4>HORÁRIOS</h4>
                        <p>ABERTO TODOS OS DIAS</p>
                        <p>10:00 - 22:00</p>
                    </div>
                </section>
                <section className='Footer'>
                    <p>
                        Gelateria. Orgulhosamente desenvolvido por "Paulo Robert Lima Gomes"
                    </p>
                </section>
            </div>
        </footer>
    );
}