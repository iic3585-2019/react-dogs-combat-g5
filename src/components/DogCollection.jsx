import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import ActionCreators from "../store/action"
import { Button, Columns } from 'react-bulma-components';

class DogCollection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            assign:""
        }

    }

    change = (ev) => {
        let where = ""
        if(ev.target.id=="first"){
            where="primer"
        }
        else{
            where="segundo"
        }
        this.setState({assign:"Se ha añadido el doggo a tu equipo como "+where+" miembro"})
        const {collection} = this.props
        this.props.dogEquip({type: ev.target.id, change_dog: collection[ev.target.value]})
    }

    render() {
        const { collection } = this.props        
        return (
            <div>
                <Fragment>
                    <Columns>
                        {collection.map(item => (
                            <Columns.Column>
                                <div>
                                    <img src={item.img}/>
                                </div>
                                <div>
                                    <p>{item.atk}</p>
                                </div>
                                <Columns>
                                    <Columns.Column>
                                        <Button color="primary" id="first" value={collection.indexOf(item)} onClick={this.change}>Asignar como primer miembro</Button>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Button color="primary" id="second" value={collection.indexOf(item)} onClick={this.change}>Asignar como segundo miembro</Button>
                                    </Columns.Column>
                                </Columns>
                                
                            </Columns.Column>
                        ))}
                    </Columns>
                </Fragment>
                <div>
                    <p>{this.state.assign}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collection: state.DogCollectionReducer['collection']
    }
}

export default connect(mapStateToProps, ActionCreators)(DogCollection)

