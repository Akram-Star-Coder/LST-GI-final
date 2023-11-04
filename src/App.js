import './App.css';
import React,{ lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loader from './loader.svg';

const Home = lazy(() => import('./Pages/Home/Home.jsx'));
const Login = lazy(() => import('./Pages/Login/Login.jsx'));
const Notfound = lazy(() => import('./Pages/Notfound/Notfound.jsx'));
const JAVA = lazy(() => import('./Pages/Modules/JAVA.jsx'));
const RI = lazy(() => import('./Pages/Modules/RI.jsx'));
const RO = lazy(() => import('./Pages/Modules/RO.jsx'));
const SE = lazy(() => import('./Pages/Modules/SE.jsx'));
const BDD = lazy(() => import('./Pages/Modules/BDD.jsx'));
const AO = lazy(() => import('./Pages/Modules/AO.jsx'));
const AOC = lazy(() => import('./Pages/Modules/AOC.jsx'));
const AOT = lazy(() => import('./Pages/Modules/AOT.jsx'));
const AOP = lazy(() => import('./Pages/Modules/AOP.jsx'));
const BDDC = lazy(() => import('./Pages/Modules/BDDC.jsx'));
const BDDT = lazy(() => import('./Pages/Modules/BDDT.jsx'));
const RIT = lazy(() => import('./Pages/Modules/RIT.jsx'));
const RIC = lazy(() => import('./Pages/Modules/RIC.jsx'));
const SEC = lazy(() => import('./Pages/Modules/SEC.jsx'));
const JAVAC = lazy(() => import('./Pages/Modules/JAVAC.jsx'));
const JAVAT = lazy(() => import('./Pages/Modules/JAVAT.jsx'));
const ROT = lazy(() => import('./Pages/Modules/ROT.JSX'));
const ROC = lazy(() => import('./Pages/Modules/ROC.jsx'));
const RIP = lazy(() => import('./Pages/Modules/RIP.jsx'));

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