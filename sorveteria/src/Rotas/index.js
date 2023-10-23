import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import PaginaInicial from '../Paginas/Home';
import PaginaPrincipal from '../Paginas/Sabores';
import PaginaSobre from '../Paginas/Sobre'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PaginaInicial/>}/>
                <Route path='/PaginaPrincipal' element={<PaginaPrincipal/>}/>
                <Route path='/PaginaSobre' element={<PaginaSobre/>}/>
            </Routes>
        </BrowserRouter>
    );
}