// import logo from './logo.svg';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import ShowSummaryPage from './component/ShowSummaryPage';
function App() {
  return (
    <div >
    <BrowserRouter>

      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/show/:id" element={<ShowSummaryPage/>}/>

      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
