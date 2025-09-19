
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './Layout/PublicLayout';
import HomePage from './Page/HomePage/page';
import ContactPage from './Page/ContactPage/page';
import FormPage from './Page/FormPage/page'
import AuthPage from './Page/AuthPage/page';

function App() {
  return (
    // The <Router> component should wrap everything
    <Router>
      <Routes>
        {/* This is the parent route that renders your Layout */}
        <Route path="/" element={<PublicLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/form' element={<FormPage />} />
          <Route path='/login' element={<AuthPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;