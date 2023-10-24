import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PaginaInicial from '../Paginas/Home'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PaginaInicial/>}/>
            </Routes>
        </BrowserRouter>
    );
}