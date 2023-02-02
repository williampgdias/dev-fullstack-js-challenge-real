import './style.css';

import { useState, useEffect } from 'react';

import Loader from '../../shared/Loader';
import { Navigate, Link, useParams } from 'react-router-dom';

const StudentManagerPage = () => {
  const { id } = useParams();

  const [isRedirect, setIsRedirect] = useState(false);
  const [isLoading, updateIsLoading] = useState(false);

  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [cpf, updateCpf] = useState('');
  const [ra, updateRa] = useState('');

  const fetchStudent = () => {
    updateIsLoading(true);
    fetch(`http://localhost:3006/students/find/${id}}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        updateName(data.nome);
        updateEmail(data.email);
        updateCpf(data.cpf);
        updateRa(data.ra);
        updateIsLoading(false);
      });
  };

  useEffect(() => {
    if (id) {
      fetchStudent();
    }
  }, []);

  const onSubmitForm = (event) => {
    event.preventDefault();

    const body = {
      name,
      ra,
      cpf,
      email,
    };

    let methodEndpoint;
    let urlEndpoint;

    if (id) {
      methodEndpoint = 'PUT';
      urlEndpoint = `http://localhost:3006/students/edit/${id}`;
    } else {
      methodEndpoint = 'POST';
      urlEndpoint = 'http://localhost:3006/students/save';
    }

    fetch(urlEndpoint, {
      method: methodEndpoint,
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert(data.message);
        if (data.result) {
          setIsRedirect(true);
        }
      });
  };

  if (isRedirect) {
    return <Navigate to='/' />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <header className='main-header'>Consulta de Alunos</header>

      <div className='content-page padding-left-right-20 '>
        <form id='studentForm' className='form' method='post' onSubmit={onSubmitForm}>
          <div className='form-group'>
            <label htmlFor='name'>Nome</label>
            <input
              required
              type='text'
              name='name'
              id='name'
              value={name}
              placeholder='Digite seu nome'
              onChange={(event) => {
                updateName(event.target.value);
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>E-mail</label>
            <input
              required
              type='email'
              name='email'
              id='email'
              value={email}
              placeholder='Digite seu email'
              onChange={(event) => {
                updateEmail(event.target.value);
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='ra'>RA</label>
            <input
              required
              type='number'
              name='ra'
              id='ra'
              value={ra}
              placeholder='Digite seu RA'
              onChange={(event) => {
                updateRa(event.target.value);
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='cpf'>CPF</label>
            <input
              required
              type='number'
              name='cpf'
              id='cpf'
              value={cpf}
              placeholder='Digite seu CPF'
              onChange={(event) => {
                updateCpf(event.target.value);
              }}
            />
          </div>
          <div className='actions'>
            <Link to='/' type='button' className='btn btn-danger margin-right-10'>
              Cancelar
            </Link>
            <button className='btn'>Salvar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentManagerPage;
