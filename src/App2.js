// import logo from './logo.svg';
import './App.css';

import { Routes, Route} from 'react-router-dom';

import Comprar from "./Components/Comprar";
import Contacto from "./Components/Contacto";
import Home from "./Components/Home";
import logicLogin from "./Components/Login/logicLogin";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import Products from "./Components/Products/Products";
import ProductWrap from "./Components/Products/ProductWrap";
import CrearProducto from "./Components/Products/CrearProducto";
import SpecificProduct from "./Components/Products/SpecificProduct";
import Registrar from './Components/Registrar';
import Administrar from './Components/Administrar';
import Header from './templates/Header';
import EditarProducto from './Components/Products/EditarProducto'
import Editar from './Components/Editar';



function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
         <Route path='/el_galpon_ciclo_4' element={<Home />}></Route>
         <Route path='/logicLogin' element={<logicLogin />}></Route>
          <Route path='/Products' element={<ProductWrap />}>
              <Route path='/Products' element={<Products />}></Route>
              <Route path='/Products/:id' element={<SpecificProduct />}></Route>
              <Route path='/Products/create' caseSensitive={false} element={<CrearProducto />}></Route>
              <Route path='/Products/edit' caseSensitive={false} element={<EditarProducto />}></Route>
          </Route>
         <Route path='/About' element={<About />}></Route>
         <Route path='*' element={<NotFound />}></Route>
         <Route path='/Contacto' element={<Contacto />}></Route>
         <Route path='/Comprar' element={<Comprar />}></Route>
         <Route path='/Registrar' element={<Registrar />}></Route>
         <Route path='/Administrar' element={<Administrar />}></Route>
         <Route path='/Editar' element={<Editar />}></Route>


       </Routes>

    </div>
  );
}

export default App;