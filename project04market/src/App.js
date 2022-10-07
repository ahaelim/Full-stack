import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Products from './components/Products';
import Detail from './components/Detail';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/detail:num' element={<Detail/>}/> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
