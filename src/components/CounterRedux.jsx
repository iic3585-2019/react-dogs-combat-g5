import React, { Component } from 'react'
import { connect } from "react-redux"
import ActionCreators from "../store/action"

class CounterRedux extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.props.incrementCounter({ amount: 1 })
    }

    decrement() {
        this.props.decrementCounter({ amount: 1 })
    }

    render() {
        const { current_number } = this.props
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

const mapStateToProps = (state) => {
    return {
        current_number: state.CounterReducer['current_number']
    }
}

export default connect(mapStateToProps, ActionCreators)(CounterRedux)