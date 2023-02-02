import './App.css';

// COMPONENTS SHARED
import Navbar from './components/shared/Navbar';

// COMPONENTS PAGE
import StudentListPage from './components/pages/StudentListPage';
import StudentManagerPage from './components/pages/StudentManagerPage';

// ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Navbar />

        <section className='container'>
          <div className='content-page'>
            <Routes>
              <Route path='/' element={<StudentListPage />} />
              <Route path='/student/add' element={<StudentManagerPage />} />
              <Route path='/student/edit/:ra' element={<StudentManagerPage />} />
            </Routes>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
