import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarMenu from './Components/Header/NavbarMenu';
import Home from './Components/Home/Home';
import Books from './Components/BooksPage/Books';
import NotFound from './Components/NotFound/NotFound';
import MainComponents from './Components/MainComponent/MainComponents';
import Sign from './Components/Sign/Sign';
import { createContext, useState } from 'react';

export const ContextAPI = createContext();


function App() {

  const [googleData, setGoogleData] = useState(
    {
      isLogin: false,
      name: '',
      email: '',
      photoURL: ''
    }
  );

  return (
    <ContextAPI.Provider value={[googleData, setGoogleData]}>
      <div className="App">
        <NavbarMenu />
        <Routes>
          <Route exact path='/' element={<MainComponents />} >  </Route>
          <Route path='/Navbar' element={<NavbarMenu />} >   </Route>
          <Route path='/Books/:bookId' element={<Books />} >   </Route>
          <Route path='/Signin' element={<Sign />} >   </Route>
          <Route path='*' element={<NotFound />}  >  </Route>

        </Routes>

      </div>
    </ContextAPI.Provider >

  );
}

export default App;
