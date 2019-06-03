import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            current_number: 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        let { current_number } = this.state
        this.setState({ current_number: current_number + 1 })
    }

    decrement() {
        let { current_number } = this.state
        this.setState({ current_number: current_number - 1 })
    }

    render() {

        const { current_number } = this.state

        return (
            <div>
                Contador vale: {current_number}

                <button onClick={this.increment}>
                    +
                </button>

                <button onClick={this.decrement}>
                    -
                </button>
            </div>
        )
    }
}
