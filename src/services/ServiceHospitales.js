import axios from "axios";
import Global from "../Global";
export default class ServiceHospitales {

    getDoctoresHospital(idHospital) {
        return new Promise(function(resolve) {
            let request = "api/doctores/doctoreshospital/" + idHospital;

            axios.get(Global.urlApiDoctores + request).then((response) => {
                console.log("Leyendo doctores");
                resolve(response.data);
            })
        })
    }

    getHospitales() {
        return new Promise(function(resolve) {

        let request = "api/hospitales";

            axios.get(Global.urlApiHospitales + request).then((response) => {
                console.log("Leyendo hospitales");
                resolve(response.data);
            })
        })
    }

    insertarHospital(hospital) {
        return new Promise(function(resolve) {
            let url = Global.urlApiHospitales;
            let request = "api/hospitales";

            axios.post(url + request, hospital).then((response) => {
                console.log("Insertando hospital");
                resolve(response);
            })
        })
    }
}