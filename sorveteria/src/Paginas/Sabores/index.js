import React from 'react';
import Header from '../../Componentes/Header';
import Footer from '../../Componentes/Footer';
import './style.css';

export default function PaginaSabores(){
    return(
        <div className='PaginaSabores'>
            <Header/>
            <main>
                <section className='secao-banner'>
                    <h1>NOSSOS SABORES</h1>
                </section>
                <section className='secao-sabores'>
                    <h3>SABORES DE SORVETE</h3>
                    <div className='secao-cards'>
                        <div className='cards'>
                            <img src="assets/sabor-oreo.png" alt="Sabores Sorvete"/>
                            <h4>Sorvete de Oreo</h4>
                            <p>
                                Delicioso sorvete sabor Oreo.
                                Uma explosão de sabor.
                            </p>
                        </div>
                        <div className='cards'>
                            <img src="assets/sabor-pistache.png" alt="Sabores Sorvete"/>
                            <h4>Sorvete Pistache</h4>
                            <p>
                                Cremoso sorvete sabor pistache com pedacinhos de semente.
                            </p>
                        </div>
                        <div className='cards'>
                            <img src="assets/sabor-cookies-avela.png" alt="Sabores Sorvete"/>
                            <h4>Sorvete Cookies & Avelã</h4>
                            <p>
                                O nosso melhor sorvete. Você vai adorar o sabor.
                            </p>
                        </div>
                        <div className='cards'>
                            <img src="assets/sorbet-kiwi.png" alt="Sabores Sorvete"/>
                            <h4>Sorvete de Kiwi</h4>
                            <p>
                                Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
                            </p>
                        </div>
                        <div className='cards'>
                            <img src="assets/sorbet-morango.png" alt="Sabores Sorvete"/>
                            <h4>Sorvete de Morango</h4>
                            <p>
                                Sorvete de morango gourmet. Tradicional e saboroso.
                            </p>
                        </div>
                        <div className='cards'>
                            <img src="assets/sorbet-limao.png" alt="Sabores Sorvete"/>
                            <h4>Sorvete de Limão Siciliano</h4>
                            <p>
                                O incrivel sorvete gourmet de limão siciliano vai te encantar.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
