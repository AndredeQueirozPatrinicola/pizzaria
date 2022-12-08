import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pizza from './pages/Pizza';
import Delivery from './pages/Delivery';
import CardapioPage from './pages/Cardapio';
import Contato from './pages/Contato';

import Header from './components/Header';


function RoutesApp(){
    return(
        <BrowserRouter>
            < Header />
            <Routes>
                <Route path='/' element={ <Home/> }></Route>
                <Route path='/pizza/:id' element={ <Pizza/> }></Route>
                <Route path='/delivery' element={ <Delivery/> }></Route>
                <Route path='/cardapio' element={ <CardapioPage/> }></Route>
                <Route path='/contato' element={ <Contato/> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;