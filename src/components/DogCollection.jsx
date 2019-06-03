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

    render() {
        const { collection } = this.props        
        return (
            <div>
                <div>
                    <img src={collection[0].img}/>
                    <p>Ataque: {collection[0].atk}</p>
                </div>
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
                                        <Button color="primary">Asignar como primer miembro</Button>
                                    </Columns.Column>
                                    <Columns.Column>
                                        <Button color="primary">Asignar como segundo miembro</Button>
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

