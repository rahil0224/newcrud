import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MusicCreate from './MusicCreate';
import MusicListing from './MusicListing';
import MusDetail from './MusDetail';
import MusicEdit from './MusicEdit';

function App() {
  return (
    <div className="App">
      <h1 className='text-center'>React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MusicListing />}></Route>
          <Route path='/musically/create' element={<MusicCreate />}></Route>
          <Route path='/musically/detail/:musicid' element={<MusDetail/>}></Route>
          <Route path='/musically/edit/:musicid' element={<MusicEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
