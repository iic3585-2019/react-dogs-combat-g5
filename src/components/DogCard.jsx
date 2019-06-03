import React, { Component } from 'react'
import { connect } from "react-redux"
import ActionCreators from "../store/action"
import { Button } from 'react-bulma-components';

class DogCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            win:""
        }

        this.random = this.random.bind(this)
        this.explore = this.explore.bind(this)
        this.battle = this.battle.bind(this)
    }

    random(img) {
        this.props.randomDog({img:img})
    }

    async explore() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const json = await response.json();
        this.random(json.message)
      }

    battle(){
        const {first} = this.props.team
        const {second} = this.props.team
        const {current_dog} = this.props
        let win = false
        switch(current_dog.atk){
            case "Piedra":
                if (first.atk == "Papel" || second.atk == "Papel") {
                    win=true
                }
            case "Papel":
                if (first.atk == "Tijera" || second.atk == "Tijera") {
                    win=true
                }
            case "Tijera":
                if (first.atk == "Piedra" || second.atk == "Piedra") {
                    win=true
                }
        }
        if (win) {
            this.setState({ win: "Has Capturado a este doggo!" })
            this.props.catchDog({current_dog})
        }
        else{
            this.setState({ win: "Has Perdido :c" })
        }
        this.explore()
        
        
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
                <div>
                    <Button color="danger" onClick={this.battle}>A Batallar!</Button>
                </div>
                <div>
                    {this.state.win}
                </div>
                <div>
                    <p className="indent"><br/></p>
                </div>
                
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        current_dog: state.DogCardReducer['current_dog'],
        team: state.DogTeamReducer['team']
    }
}

export default connect(mapStateToProps, ActionCreators)(DogCard)

