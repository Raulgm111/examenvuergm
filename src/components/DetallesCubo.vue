<template>
<h1>Detalles cubo</h1>
<div v-for="cub in cubos" :key="cub.idCubo">
    <h3>{{cub.comentario}}</h3>
    <h4 style="color: blue;">Fecha: {{cub.fechaComentario}}</h4>
</div>
</template>

<script>
import CuboService from './../services/CuboService'
const service = new CuboService();
export default {
    name:"DetallesCubo",
        methods:{
     mostarDetallesCubo(){
        this.id = this.$route.params.id;
        service.mostarDetallesCubo(this.id).then(result =>{
            this.cubos=result;
            this.status=true
    })
        }
    },
    data(){
        return{
            cubos:[],
            status:false
        }

    },
    mounted(){
        this.mostarDetallesCubo();
    }
}
</script>

<style>

</style>