import React from 'react';
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import './style.css'

export default function Home(){
    return(
        <div className='Home'>
            <Header/>
            <main>
                <section className='secao-banner'>
                    <h1>SORVETE ARTESANAL</h1>
                </section>
                <section className='secao-cards'>
                    <div className='card-img' >
                        <img src="assets/banner-sabores.jpg" alt=""/>
                        </div>
                    <div className='card'>
                        <h2>NOSSOS SABORES</h2>
                        <h4>Novos e deliciosos!</h4>
                        <p>
                            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                        </p>
                    </div>
                </section>
                <section className='secao-cards'>
                    <div className='card'>
                        <h2>NOSSOS EVENTOS</h2>
                        <h4>Delicias com sorvete!</h4>
                        <p>
                            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                    </div>
                    <div className='card-img' >
                        <img src="assets/eventos-image.jpg" alt=""/>
                        </div>
                </section>
                <section className='secao-cards'>
                    <div className='card-img' >
                        <img src="assets/sobre-image.jpg" alt=""/>
                    </div>
                    <div className='card'>
                        <h2>SOBRE NÓS</h2>
                        <h4>Alegria em cada casquinha!</h4>
                        <p>
                            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                        </p>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}