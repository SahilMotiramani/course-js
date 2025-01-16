
import './App.css';
import PythonFsd from './PythonFsd';
import PythonAi from './PythonAi';
import JavaFsd from './JavaFsd';
import JsFsd from './JsFsd';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Enquiry from './Enquiry';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PythonFsd/>}/>
        <Route path='/pyai' element={<PythonAi/>}/>
        <Route path='/javafsd' element={<JavaFsd/>}/>
        <Route path='/jsfsd' element={<JsFsd/>}/>
        <Route path='/enquiry' element={<Enquiry/>}/>
        <Route path="*" element={<PythonFsd/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
