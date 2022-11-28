import './App.css';
import Add from './components/Add';
import Dasnboard from './components/Dasnboard';
import Edit from './components/Edit';
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Bar from './components/Bar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Bar/>
     <Routes>
      <Route path='/' element={  <Dasnboard/>} />
     <Route path='/add_book' element={ <Add/> } />
     <Route path='/edit/:id' element={ <Edit/> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
