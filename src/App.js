densitimport './App.css';
import React,{ lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loader from './loader.svg';


import JAVA from'./Pages/Modules/JAVA.jsx'
import RI from './Pages/Modules/RI.jsx';
import RO from './Pages/Modules/RO.jsx';
import SE from './Pages/Modules/SE.jsx';
import BDD from './Pages/Modules/BDD.jsx';
import AO from './Pages/Modules/AO.jsx';
import AOC from './Pages/Modules/AOC.jsx';
import AOT from './Pages/Modules/AOT.jsx';
import AOP from './Pages/Modules/AOP.jsx';
import BDDC from './Pages/Modules/BDDC.jsx';
import BDDT from './Pages/Modules/BDDT.jsx';
import RIT from './Pages/Modules/RIT.jsx';
import RIC from './Pages/Modules/RIC.jsx';
import SEC from './Pages/Modules/SEC.jsx';
import JAVAC from './Pages/Modules/JAVAC.jsx';
import JAVAT from './Pages/Modules/JAVAT.jsx';
import ROT from './Pages/Modules/ROT.JSX';
import ROC from './Pages/Modules/ROC.jsx';
import RIP from './Pages/Modules/RIP.jsx';


const Home = lazy(() => import('./Pages/Home/Home.jsx'));
const Login = lazy(() => import('./Pages/Login/Login.jsx'));
const Notfound = lazy(() => import('./Pages/Notfound/Notfound.jsx'));

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Suspense fallback={<div className='containerOfSvg'><img alt='' src={Loader} /></div>}><Home /></Suspense>} />
          <Route path='*' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><Notfound /></Suspense>} />
          <Route path='/java-poo' element={<Suspense fallback={<div className='containerOfSvg'><img alt='' src={Loader} /></div>}><JAVA /></Suspense>} />
          <Route path='/systeme-exploitation' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><SE /></Suspense>} />
          <Route path='/reseau-informatique' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><RI /></Suspense>} />
          <Route path='/base-donnee-avance' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><BDD /></Suspense>} />
          <Route path='/architecture-ordinateur' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><AO /></Suspense>} />
          <Route path='/recherche-operationelle' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><RO /></Suspense>} />
          <Route path='/login' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><Login /></Suspense>} />
          <Route path='/ao/cours' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><AOC /></Suspense>} />
          <Route path='/ao/tds' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><AOT /></Suspense>} />
          <Route path='/ao/projets' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><AOP /></Suspense>} />
          <Route path='/bdd/cours' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><BDDC /></Suspense>} />
          <Route path='/bdd/tds' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><BDDT /></Suspense>} />
          <Route path='/ri/cours' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><RIC /></Suspense>} />
          <Route path='/ri/tds' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><RIT /></Suspense>} />
          <Route path='/ri/pv' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><RIP /></Suspense>} />
          <Route path='/se/cours' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><SEC /></Suspense>} />
          <Route path='/java/cours' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><JAVAC /></Suspense>} />
          <Route path='/java/tds' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><JAVAT /></Suspense>} />
          <Route path='/ro/tds' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><ROT /></Suspense>} />
          <Route path='/ro/cours' element={<Suspense fallback={<div  className='containerOfSvg'><img alt='' src={Loader} /></div>}><ROC /></Suspense>} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
