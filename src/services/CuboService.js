import axios from 'axios'
import Global from './../Global'


export default class ServiceSeries {
    mostarCubos(){
        return new Promise(function(resolve){
            var request = "/api/Cubos";
            var url = Global.urlCubos+request;
            var cubos = [];
            axios.get(url).then(res =>{
                cubos=res.data
                resolve(cubos)
            })
        })
    }
    mostraMarcas(){
        return new Promise(function(resolve){
            var request = "/api/Cubos/marcas";
            var url = Global.urlCubos+request;
            var marcas = [];
            axios.get(url).then(res =>{
                marcas=res.data
                resolve(marcas)
            })
        })
    }

    mostarDetallesMarca(marca){
        return new Promise(function(resolve){
            var request = "/api/Cubos/CubosMarca/"+marca;
            var url = Global.urlCubos+request;
            var marcas = [];
            axios.get(url).then(res =>{
                marcas=res.data
                resolve(marcas)
            })
        })
    }
    mostarDetallesCubo(id){
        return new Promise(function(resolve){
            var request = "/api/ComentariosCubo/GetComentariosCubo/"+id;
            var url = Global.urlCubos+request;
            var cubos = [];
            axios.get(url).then(res =>{
                cubos=res.data
                resolve(cubos)
            })
        })
    }

    login(user){
        return new Promise(function(resolve) {
            var request = "/api/Manage/Login";
            var url = Global.urlCubos + request;

            axios.post(url, user).then(response => {
                resolve(response);
            });
        });
    }

    getPerfilUsuario(){
        return new Promise(function(resolve) {

            var token = localStorage.getItem("token");

            var header = {
                'Authorization': "Bearer "+token
            }

            var request = "/api/Manage/PerfilUsuario";
            var url = Global.urlCubos + request;

            axios.get(url, {headers: header}).then(response => {
                resolve(response.data);
            });
        });
    }

    getCompras(){
        return new Promise(function(resolve) {

            var token = localStorage.getItem("token");

            var header = {
                'Authorization': "Bearer "+token
            }

            var request = "/api/Compra/ComprasUsuario";
            var url = Global.urlCubos + request;

            axios.get(url, {headers: header}).then(response => {
                resolve(response.data);
            });
        });
    }

    hacerCompra(id){
        return new Promise(function(resolve){
            var token = localStorage.getItem("token");

            var header = {
                'Authorization': "Bearer "+token
            }

            var request ="/api/Compra/InsertarPedido/"+id
            var url = Global.urlCubos+request
            axios.post(url,id,{headers: header}).then(res=>{
                resolve(res)
            })
        })
    }

}