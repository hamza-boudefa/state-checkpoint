import React, { Component } from "react"
import Profile from "./Profile"
import {Button} from 'react-bootstrap'
export default class ProfileParent extends Component {
    // state={
    //     show: false
    // }
    constructor(props) {
        super(props)
        this.state ={
            show: false
        }
    }

    toggle() {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <div>
                <Button variant="primary"  onClick={() => this.toggle()}>{this.state.show ? 'Hide' : 'Show'}</Button>{' '}

                {this.state.show ? <Profile/> : null}
            </div>
        )
    }
}