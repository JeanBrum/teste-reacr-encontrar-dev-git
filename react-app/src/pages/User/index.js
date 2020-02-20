import React, { Component } from 'react'
import api from '../../services/api'

export default class User extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = async () => {
        const { id } = this.props.match.params

        const response = await api.get(`/users/${id}`)

        this.setState({ user: response.data })

        
        
   
    }

    render() {
        if (this.state.user.repos) {
        return (
            <div>
                {this.state.user.repos.map(repo => (
                    
                    <p><a href={repo.html_url}>{repo.full_name}</a></p>
                    
                ))}
            </div>
        )
    } else {
        return (
        <p>Carregando ...</p>
        )
    }
    }

}

