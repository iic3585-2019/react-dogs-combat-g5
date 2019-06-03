import React, { Component } from 'react'
import "../styles/Home.css"
import Counter from '../components/Counter';

export default class Home extends Component {
    render() {
        return (
            <div className="my-class">
                Hola este es el home
                <Counter />
            </div>
        )
    }
}
