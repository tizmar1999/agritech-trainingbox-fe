import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes} 
from "react-router-dom"
import Camera from './pages/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Camera />} />
      </Routes>
    </Router>
  );
}

export default App;
