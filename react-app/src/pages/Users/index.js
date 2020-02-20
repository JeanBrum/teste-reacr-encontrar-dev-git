import React, { useState, useEffect } from 'react'
import './styles.css'
import {
    Container,
    Row
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import api from '../../services/api'

function Users() {

    const [users, setUsers] = useState([])

    async function getUsers() {
        const response = await api.get('/users')
        setUsers(response.data)
        
    }
    
    
    getUsers()

    return(
        <div id="tudo">
            <Container className="container-users">
                {users.map(user => (
                    <Row className="users-block" xs={3}>
                        <p id="dev">{user.github_username}</p>
                        <p>{user.bio}</p>
                        <Link to={`/users/${user._id}`} >Acessar...</Link>
                    </Row>
                ))}
                
            </Container>
        </div>
    )
}

export default Users