import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Products from './components/Products';
import Detail from './components/Detail';
import Join from './components/Join';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      {/* 컴퓨터가 갈 수 있는 경로를 뚫어줌 */}
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/detail:num' element={<Detail/>}/> 
        <Route path='/join' element={<Join/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
