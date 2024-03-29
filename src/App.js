import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link,Switch } from 'react-router-dom';
import "./App.scss";
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
function App() {
  return (
    <Router>
       <div className='app'>
       <Header></Header>
       <div className='container'>
       <Routes>
        <Route  path='/' exact element={<Home/>}/>;
        <Route  path='/movie/:imdbID' element={<MovieDetail/>}/>;
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
       </div> 
      <Footer/>
    </div>
    </Router>
   
  );
}

export default App;
