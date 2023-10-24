import React from 'react';

export default function Footer(){
    return(
        <footer>
            <section className='Footer-Contatos'>
                <div className='container-logo'>
                    <img className='img-logo' src="assets/logo.png" alt="logo"/>
                </div>
                <div className='Footer-Endereco'>
                    <h3>ENDEREÇO</h3>
                    <p>Av.Bernardino de Camps, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className='Footer-Contato'>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel:(11)3456-7890</p>
                </div>
                <div className='Footer-Horarios'>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </section>
            <section className='Footer'>
                <p>
                    Gelateria. Orgulhosamente desenvolvido por "Paulo Robert Lima Gomes"
                </p>
            </section>
        </footer>
    );
}