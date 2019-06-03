import React, { Component } from 'react'
import CounterRedux from '../components/CounterRedux'


export default class About extends Component {
    render() {
        return (
            <div>
                Esto es about
                <CounterRedux />
            </div>
        )
    }
}
