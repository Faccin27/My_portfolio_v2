// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
