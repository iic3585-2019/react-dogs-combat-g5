import React, { Component } from 'react'
import "../styles/Home.css"
import Counter from '../components/Counter';
import DogCard from '../components/DogCard';

export default class Catch extends Component {
    render() {
        return (
            <div className="section">
                <div className="container has-text-centered has-text-weight-bold">
                    <DogCard/>
                </div>
                <div className="container has-text-centered has-text-weight-bold">
                    Tu Equipo
                    {/* El equipo */}
                </div>
            </div>
        )
    }
}
