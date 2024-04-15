import './App.css';
import Cities from './Components/Cities';
import Display from './Components/Display';
import DisplayCities from './Components/DisplayCities';
import Form from './Components/Form';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/display' element={<Display/>}/>
        <Route path='/cities' element={<Cities/>}/>
        <Route path='/displaycities' element={<DisplayCities/>}/>
      </Routes>
    </>
  );
}

export default App;
