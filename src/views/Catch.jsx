import React, { Component } from 'react'
import DogCard from '../components/DogCard';

export default class Catch extends Component {
    render() {
        return (
            <div className="section">
                <div className="container has-text-centered has-text-weight-bold">
                    <DogCard/>
                </div>
            </div>
        )
    }
}
