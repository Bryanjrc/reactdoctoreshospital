import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DetallesDoctor extends Component {

    state = {
        doctor: null
    }

    loadDoctor = () => {
        let id = this.props.idhospital
    }

    render() {
        return (
            <div>DetallesDoctor</div>
        )
    }
}
