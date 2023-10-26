import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarMenu from './Components/Header/NavbarMenu';
import Home from './Components/Home/Home';
import Books from './Components/BooksPage/Books';
import NotFound from './Components/NotFound/NotFound';
import MainComponents from './Components/MainComponent/MainComponents';
import Sign from './Components/Sign/Sign';
import React, { createContext, useState } from 'react';
import Login from './Components/Sign/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Proceed from './Components/ProceedBorrow/Proceed';
import StudentEntry from './Components/StudentEntry/StudentEntry';


export const ContextAPI = createContext();


function App() {

  const [googleData, setGoogleData] = useState(
    {
      isLogin: false,
      name: '',
      email: '',
      photoURL: '',
      lengthVal: []
    }
  );

  return (
    <ContextAPI.Provider value={[googleData, setGoogleData]}>
      <div className="App">
        <React.Fragment>
          <NavbarMenu />
          <Routes>
            <Route exact path='/' element={<MainComponents />} >  </Route>
            <Route element={<PrivateRoute />} >
              <Route path='/StudentEntry' element={<StudentEntry />} >  </Route>
            </Route>
            <Route path='/Navbar' element={<NavbarMenu />} >   </Route>
            <Route path='/Books/:bookId' element={<Books />} >   </Route>
            <Route path='/Signin' element={<Sign />} >   </Route>
            <Route element={<PrivateRoute />} >
              <Route path='/Proceed' element={<Proceed />} >  </Route>
            </Route>
            <Route path='/Login' element={<Login />} > </Route>
            <Route path='*' element={<NotFound />}  >  </Route>

          </Routes>
        </React.Fragment>

      </div>
    </ContextAPI.Provider >

  );
}

export default App;
