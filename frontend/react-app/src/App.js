import './App.css';

// COMPONENTS SHARED
import Navbar from './components/shared/Navbar';

// COMPONENTS PAGE
import StudentListPage from './components/pages/StudentListPage';

function App() {
  return (
    <div className='main-container'>
      <Navbar />

      <section className='container'>
        <header className='main-header'>Consulta de Alunos</header>
        <div className='content-page'>
          <StudentListPage />
        </div>
      </section>
    </div>
  );
}

export default App;
