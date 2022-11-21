<template>
<h1>Perfil Usuario {{perfiles.idUsuario}}</h1>
<h3 style="color: blue;">Usuario: {{perfiles.nombre}}</h3>
<h3 style="color: blue;">Email: {{perfiles.email}}</h3>
     <router-link :to="'/compras/'" class="btn btn-info">
        Ver compras
     </router-link>
</template>

<script>
import CuboService from './../services/CuboService'
const service = new CuboService();
export default {
    name:"PerfilUsuario",
    data(){
        return {
            perfiles: {}
        }
    },
    methods: {
        mostrarPerfiles(){
            service.getPerfilUsuario().then(result => {
                console.log(result);
                this.perfiles = result;
            });
        }
    },
    mounted(){
        this.mostrarPerfiles();
    }
}
</script>

<style>

</style>