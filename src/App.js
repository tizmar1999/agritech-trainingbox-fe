import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes} 
from "react-router-dom"
import Home from './pages/index'
import Dashboard from './pages/dashboard/index';
import Analysis from './pages/analysis';
import Header from './components/Header';
import { AnnotatedImagesProvider } from './providers/AnnotatedImagesProvider';

function App() {
  return (
    <>
    <Header />
    <Router>
      <AnnotatedImagesProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis/:id" element={<Analysis />} />
        </Routes>
      </AnnotatedImagesProvider>
    </Router>
    </>
  );
}

export default App;
