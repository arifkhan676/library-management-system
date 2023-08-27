import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarMenu from './Components/Header/NavbarMenu';
import Home from './Components/Home/Home';
import Books from './Components/BooksPage/Books';
import NotFound from './Components/NotFound/NotFound';
import MainComponents from './Components/MainComponent/MainComponents';

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Routes>
        <Route exact path='/' element={<MainComponents />} >  </Route>
        <Route path='/Navbar' element={<NavbarMenu />} >   </Route>
        <Route path='/Books/:bookId' element={<Books />} >   </Route>
        <Route path='*' element={<NotFound />}  >  </Route>

      </Routes>

    </div>
  );
}

export default App;
