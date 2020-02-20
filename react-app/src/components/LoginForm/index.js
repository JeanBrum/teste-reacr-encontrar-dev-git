import React, { useState } from 'react';
import './styles.css'
import api from '../../services/api'
import {
    Container,
    Col,
  } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LoginForm(props) {

  const [github_username, setGithubUsername] = useState('')
  
  async function handleAddDev(e) {
    e.preventDefault()
    await api.post('/users', {
      github_username
    })
  }

    return (
        <Container className="container">
            <Col className="col">
                <div className="registration-form">
                    <h1>Entrar</h1>
                    <p id="label">Github Username</p>
                    <input 
                    type="text" 
                    name="github_username" 
                    id="github_username"
                    required
                    value={github_username}
                    onChange={e => setGithubUsername(e.target.value)}
                    />
                    <p><button id="button-submit" placeholder='Github username...' onClick={handleAddDev}>Salvar...</button></p>
                    <Link to="/users">Devs</Link>
                </div>
            </Col>
      </Container>
    );
  }
  
  export default LoginForm;