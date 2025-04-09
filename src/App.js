import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes} 
from "react-router-dom"
import Home from './pages/index'
import Dashboard from './pages/dashboard/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
