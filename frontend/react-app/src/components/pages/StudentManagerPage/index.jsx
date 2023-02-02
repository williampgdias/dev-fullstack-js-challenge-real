import './style.css';

// import { useState } from 'react';

const StudentManagerPage = () => {
  return (
    <>
      
      <header class='main-header'>Consulta de Alunos</header>
      <div class='loader'></div>
      <div class='content-page padding-left-right-20 '>
        <form id='studentForm' class='form' method='post'>
          <div class='form-group'>
            <label for='name'>Nome</label>
            <input required type='text' name='name' id='name' />
          </div>
          <div class='form-group'>
            <label for='email'>E-mail</label>
            <input required type='email' name='email' id='email' />
          </div>
          <div class='form-group'>
            <label for='ra'>RA</label>
            <input required type='number' name='ra' id='ra' />
          </div>
          <div class='form-group'>
            <label for='cpf'>CPF</label>
            <input required type='number' name='cpf' id='cpf' />
          </div>
          <div class='actions'>
            <a href='studentsList.html' type='button' class='btn btn-danger margin-right-10'>
              Cancelar
            </a>
            <button class='btn'>Salvar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentManagerPage;
