import Main from './components/main/main';
import { Routes,Route } from 'react-router-dom';
import Details from './components/details/details';
import './App.css';

function App() {
  return (
  <>
    
    <Routes>
    <Route path='/' element={<Main/>} />
    <Route path='/details' element={<Details/>} />
    </Routes>
    
    </>
  );
}

export default App;
