import React from 'react';
import './style.css';

import Loader from '../../shared/Loader';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
class StudentListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      isLoading: true,
      formSearch: {
        searchInput: '',
      },
    };
  }

  componentDidMount() {
    this.fetchStudentList();
  }

  onClickRemoveStudent = (ra) => {
    Swal.fire({
      title: 'você realmente deseja excluir esse estudante?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('O estudante foi deletado com sucesso.');
      }
      this.deleteStudent(ra);
    });
  };

  deleteStudent = (ra) => {
    this.setState({ isLoading: true });
    fetch(`http://localhost:3006/students/delete/${ra}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Parabéns',
          text: data.message,
        });
        this.fetchStudentList();
      });
  };

  onSubmitFormSearch = (event) => {
    event.preventDefault();
    this.fetchStudentList(event.target.searchInput.value);
  };

  fetchStudentList = (searchQuery = '') => {
    console.log(searchQuery);
    this.setState({ isLoading: true });

    fetch(`http://localhost:3006/students/list/${searchQuery}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ studentList: data, isLoading: false, isFetching: false });
      })
      .catch((error) => {
        alert('Desculpe, mas não conseguimos estabelecer conexão com o nosso servidor.');
      });
  };

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    return (
      <>
        <header className='main-header'>Lista de Alunos</header>
        <div className='padding-left-right-20'>
          <div className='card'>
            <form onSubmit={this.onSubmitFormSearch} id='formSearchStudent' className='form-search'>
              <input
                type='text'
                name='searchInput'
                id='searchInput'
                value={this.state.formSearch.searchInput}
                onChange={(event) => {
                  this.setState({
                    formSearch: {
                      searchInput: event.target.value,
                    },
                  });
                }}
              />
              <button>Pesquisar</button>
            </form>
            <Link to='/student/add' className='btn btn-dark'>
              Cadastrar aluno
            </Link>
          </div>
          <div className='card'>
            <table id='studentList' className='table-list'>
              <thead>
                <tr>
                  <th>Registro Acadêmico</th>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {this.state.studentList.map((student) => {
                  return (
                    <tr key={student.ra}>
                      <td>{student.ra}</td>
                      <td>{student.nome}</td>
                      <td>{student.cpf}</td>
                      <td>
                        <Link className='action-link' to={`/student/edit/${student.ra}`}>Editar</Link>
                        <a
                          className='removeStudent action-link'
                          onClick={() => {
                            this.onClickRemoveStudent(student.ra);
                          }}
                          href='/#'
                        >
                          Excluir
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default StudentListPage;
