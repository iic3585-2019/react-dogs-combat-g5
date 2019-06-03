import React, { Component } from 'react'
import { connect } from "react-redux"
import ActionCreators from "../store/action"
import { Columns } from 'react-bulma-components';

class DogTeam extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const { team } = this.props        
        const {first} = team
        const {second} = team
        return (
            <div>
                <div>
                    <Columns>
                        <Columns.Column>
                            <div>
                                <img src={first.img}/>
                            </div>
                            <div>
                                <p>Ataque: {first.atk}</p>
                            </div>
                        </Columns.Column>
                        <Columns.Column>
                            <div>
                                <img src={second.img}/>
                            </div>
                            <div>
                                {second.atk != "" && (<p>Ataque:{second.atk}</p>)}
                            </div>
                        </Columns.Column>
                    </Columns>
                </div>
                <div>
                    <br/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        team: state.DogTeamReducer['team']
    }
}

export default connect(mapStateToProps, ActionCreators)(DogTeam)

