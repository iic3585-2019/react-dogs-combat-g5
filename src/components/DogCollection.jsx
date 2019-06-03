import React, { Component } from 'react'
import { connect } from "react-redux"
import ActionCreators from "../store/action"
import { Button } from 'react-bulma-components';

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

