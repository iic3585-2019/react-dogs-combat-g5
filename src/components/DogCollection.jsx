import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import ActionCreators from "../store/action"
import { Button, Columns } from 'react-bulma-components';

class DogCollection extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
        // this.random = this.random.bind(this)
        // this.explore = this.explore.bind(this)
    }

    change = (ev) => {
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
                
                {/* <div>
                    <Button color="primary" onClick={this.explore}>Explorar doggos</Button>
                </div>
                <div>
                    <img src={current_dog.img} alt=""/>
                </div> */}
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

