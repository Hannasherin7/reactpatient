import logo from './logo.svg';
import './App.css';
import { AddPatient } from './components/AddPatient';
import { SearchPatient } from './components/SearchPatient';
import { DeletePatient } from './components/DeletePatient';
import { ViewAll } from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={(<AddPatient/>)}/>
      <Route path='/Search'element={(<SearchPatient/>)}/>
      <Route path='/Delete'element={(<DeletePatient/>)}/>
      <Route path='/ViewAll'element={(<ViewAll/>)}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
