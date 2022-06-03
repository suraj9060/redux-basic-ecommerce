
import './App.css';
import Header from './components/Header';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Cards from './components/Cards';
import CartDetails from './components/CartDetails';
import "./components/style.css"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/cart' element={<CartDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
