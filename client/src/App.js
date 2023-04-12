import './App.css';
import {useDispatch} from 'react-redux'
import {Routes,Route} from 'react-router-dom'
import Landing from './Pages/Landing/Landing';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Detail from './Pages/Details/Details'
import Error404 from './Pages/Error/Error404';
import Navbar from './Components/Navbar/Navbar';
import { getDogs} from './redux/features/cards/cardsSlice';
import { useEffect } from 'react';
import { useRef } from 'react';
import Form from './Pages/Form/Form';

function App() {
  const initialize=useRef(false)
  const dispatch=useDispatch()
  useEffect(() => {
    
    if(initialize.current)return
    dispatch(getDogs())
    initialize.current=true
    
  }, [])

  
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/detail/:breedid' element={<Detail></Detail>}></Route>
        <Route path='/form' element={<Form/>}/>
        <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
