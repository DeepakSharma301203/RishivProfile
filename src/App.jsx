
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './Layout/PublicLayout';
import HomePage from './Page/HomePage/page';
import ContactPage from './Page/ContactPage/page';
import FormPage from './Page/FormPage/page'

function App() {
  return (
    // The <Router> component should wrap everything
    <Router>
      <Routes>
        {/* This is the parent route that renders your Layout */}
        <Route path="/" element={<PublicLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/Home' element={<HomePage />} />
          <Route path='/Contact' element={<ContactPage />} />
          <Route path='/Form' element={<FormPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
