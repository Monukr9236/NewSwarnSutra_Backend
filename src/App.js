import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {

  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/about' element={<h1>About Page</h1>}/>
        <Route path='/blog' element={<h1>Blog Page</h1>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
