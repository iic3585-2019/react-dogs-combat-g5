import React, { Component } from 'react'
import DogTeam from '../components/DogTeam';


export default class Team extends Component {
    render() {
        return (
            <div className="section">
                <div className="container has-text-centered has-text-weight-bold">
                    Tu Equipo Actual
                    <DogTeam/>
                </div>
            </div>
        )
    }
}
