import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';
import ServiceHospitales from '../services/ServiceHospitales';

export default class CreateHospital extends Component {

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    service = new ServiceHospitales();

    insertHospital = (event) => {
        event.preventDefault();

        let hospital = {
            idHospital: parseInt(this.cajaId.current.value),
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: parseInt(this.cajaCamas.current.value)
        }

        this.service.insertarHospital(hospital).then((result) => {
            this.setState({
                status: true
            })
        })

    }

    state = {
        mensaje: "",
        status: false
    }
    

    render() {
        return (
            <div>
                <h1>Create Hospital</h1>
                <h3 style={{color: "blue"}}>{this.state.mensaje}</h3>
                
                <form>
                    <label>Id Hospital</label>
                    <input type="number" ref={this.cajaId} className='form-control' />

                    <label>Nombre: </label>
                    <input type="text" ref={this.cajaNombre} className='form-control' />

                    <label>Dirección: </label>
                    <input type="text" ref={this.cajaDireccion} className='form-control' />
                    
                    <label>Teléfonos</label>
                    <input type="number" ref={this.cajaTelefono} className='form-control' />

                    <label>Camas</label>
                    <input type="text" ref={this.cajaCamas} className='form-control' />

                    <button onClick={this.insertHospital} style={{backgroundColor: "yellow"}}>
                        Insertar
                    </button>
                </form>

                {
                    this.state.status == true && (
                        <Navigate to = "/hospitales" />
                    )
                }
            </div>

            
        )
    }
}
