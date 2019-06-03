import React, { Component } from 'react'
import { connect } from "react-redux"
import ActionCreators from "../store/action"
import { Button } from 'react-bulma-components';

class DogCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
        this.random = this.random.bind(this)
        this.explore = this.explore.bind(this)
    }

    random(img) {
        this.props.randomDog({img:img})
    }

    async explore() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const json = await response.json();
        this.random(json.message)
      }

    render() {
        const { current_dog } = this.props        
        return (
            <div>
                <div>
                    <h1>Busca al doggo que desees atrapar</h1>
                </div>
                <div>
                    <Button color="primary" onClick={this.explore}>Explorar doggos</Button>
                </div>
                <div>
                    <img src={current_dog.img} alt=""/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        current_dog: state.DogCardReducer['current_dog']
    }
}

export default connect(mapStateToProps, ActionCreators)(DogCard)

