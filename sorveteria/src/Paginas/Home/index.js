import React from 'react';
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'

export default function Home(){
    return(
        <div>
            <Header/>
            <main>
                <section className='secao-banner'>
                    <h1>SORVETE ARTESANAL</h1>
                </section>
                <section className='secao-sabores'>
                    <img src="assets/banner-sabores.png" alt=""/>
                    <h2>NOSSOS SABORES</h2>
                    <h4>Novos e deliciosos!</h4>
                    <p>
                        Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                    </p>
                </section>
                <section className='secao-sabores'>
                    <h2>NOSSOS EVENTOS</h2>
                    <h4>Delicias com sorvete!</h4>
                    <p>
                        Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                    </p>
                    <img src="assets/eventos-image.png" alt=""/>
                </section>
                <section className='secao-sabores'>
                    <img src="assets/sobre-image.png" alt=""/>
                    <h2>SOBRE NÓS</h2>
                    <h4>Alegria em cada casquinha!</h4>
                    <p>
                        Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                    </p>
                </section>
            </main>
            <Footer/>
        </div>
    );
}