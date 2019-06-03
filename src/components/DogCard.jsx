import React, { Component } from 'react'
import { connect } from "react-redux"
import ActionCreators from "../store/action"

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
        const img_link = "https://images.dog.ceo/breeds/mountain-bernese/n02107683_3988.jpg"
        return (
            <div>
                <h1>Busca al doggo que desees atrapar</h1>
                <button onClick={this.explore}>Explorar doggos</button>
                <img src={current_dog.img}/>
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

