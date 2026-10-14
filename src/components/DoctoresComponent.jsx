import React, { Component } from 'react'
import DetallesDoctor from './DetallesDoctor';
import ServiceHospitales from '../services/ServiceHospitales';

export default class DoctoresComponent extends Component {

    service = new ServiceHospitales();

    state = {
        doctores: [],
        idDoctor: -1
    }

    botonIdDoctor = React.createRef();

    getDetallesCoche = (event) => {
        event.preventDefault();
    }

    loadDoctoresHospital = () => {
        this.service.getDoctoresHospital(this.props.idhospital).then((result) => {
            this.setState({
                doctores: result
            })
        })
    }

    componentDidMount = () => {
        this.loadDoctoresHospital();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idhospital != this.props.idhospital) {
            this.loadDoctoresHospital();
            this.setState({
                idDoctor: -1
            })
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
                                            <button className='btn btn-danger' onClick={() => {
                                                this.setState({
                                                    idDoctor: doctor.idDoctor
                                                })
                                            }}>
                                                Detalles
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {
                    this.state.idDoctor != -1 &&(
                        <DetallesDoctor idDoctor = {this.state.idDoctor}/>
                    )
                }
            </div>
        )
    }
}
