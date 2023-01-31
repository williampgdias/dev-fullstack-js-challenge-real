import './App.css';

// COMPONENTS SHARED
import Navbar from './components/shared/Navbar';

// COMPONENTS PAGE
import StudentListPage from './components/pages/StudentListPage';

// ROUTER
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Navbar />

        <section className='container'>
          <header className='main-header'>Consulta de Alunos</header>
          <div className='content-page'>
            <Routes>
              <Route path='/' element={<StudentListPage />} />

              <Route path='/student-manager' element={<h1>Student manager page</h1>} />
            </Routes>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
