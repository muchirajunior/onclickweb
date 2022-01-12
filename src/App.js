import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FarmerPage from './pages/farmer';
import Home from './pages/home';
import Login from './pages/signup';



function App() {
  return (
    <Router>
      <Routes>
          < Route path='/' element={< Home />} />
          < Route path='/login' element={< Login />} />
          < Route path='/farmer' element={< FarmerPage />}  />
      </Routes>
    </Router>
  );
}

export default App;
