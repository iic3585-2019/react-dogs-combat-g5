import React, { Component } from 'react'
import DogCollection from '../components/DogCollection';

export default class Collection extends Component {
    render() {
        return (
            <div className="section">
                <div className="container has-text-centered has-text-weight-bold">
                    Estos son los doggos que has capturado
                    <DogCollection/>
                </div>
            </div>
        )
    }
}
