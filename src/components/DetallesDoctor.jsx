import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DetallesDoctor extends Component {

    state = {
        doctor: null
    }

    findDoctor = () => {
        let request = "api/doctores/" + this.props.idDoctor;

        axios.get(Global.urlApiDoctores + request).then((response) => {
            console.log("Find Doctor");
            this.setState({
                doctor: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findDoctor();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idDoctor != this.props.idDoctor) {
            this.findDoctor();
        }
    }

    render() {
        return (
            <div>
                <h1>Detalles Doctor</h1>

                {
                    this.state.doctor && (
                        <ul className='list-group'>
                            <li className='list-group-item'>
                                Apellido: {this.state.doctor.apellido}
                            </li>

                            <li className='list-group-item'>
                                Especialidad: {this.state.doctor.especialidad}
                            </li>

                            <li className='list-group-item'>
                                Salario: {this.state.doctor.salario}
                            </li>

                            <li className='list-group-item'>
                                Hospital: {this.state.doctor.idHospital}
                            </li>
                        </ul>
                    )
                }
            </div>
        )
    }
}
