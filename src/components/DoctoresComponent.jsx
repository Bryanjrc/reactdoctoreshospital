import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { event } from 'jquery';

export default class DoctoresComponent extends Component {

    state = {
        doctores: [],
        idDoctor: 0
    }

    botonIdDoctor = React.createRef();

    getDetallesCoche = (event) => {
        
    }

    loadDoctoresHospital = () => {
        let request = "api/doctores/doctoreshospital/" + this.props.idhospital;

        axios.get(Global.urlApiDoctores + request).then((response) => {
            console.log("Leyendo doctores");

            this.setState({
                doctores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDoctoresHospital();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idhospital != this.props.idhospital) {
            this.loadDoctoresHospital();
        }
    }

    

    render() {
        return (
            <div>
                <h1>Doctores del hospital {this.props.idhospital} </h1>

                <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
                            <th>Hospital</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.doctores.map((doctor, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{doctor.apellido}</td>
                                        <td>{doctor.especialidad}</td>
                                        <td>{doctor.salario}</td>
                                        <td>{doctor.idHospital}</td>
                                        <td>
                                            <button ref={this.botonIdDoctor} onClick={this.detallesDoctor} value={doctor.idDoctor}>Detalles</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
