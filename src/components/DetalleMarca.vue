<template>
<div v-for="mar in marcas" :key="mar.idCubo">
    <h1>Detalles marca {{mar.marca}}</h1>
   <img :src="mar.imagen" style="width:100px"/>
    <h3 style="color: blue;">{{mar.nombre}}</h3>
    <h4 style="color: blue;">Modelo: {{mar.modelo}}</h4>
    <h4 style="color: blue;">Precio: {{mar.precio}}</h4>
     <router-link :to="'/detallesC/'+mar.idCubo" class="btn btn-info">
        Detalles Cubo
     </router-link>
</div>
</template>

<script>
import CuboService from './../services/CuboService'
const service = new CuboService();
export default {
    name:"DetalleMarca",
    methods:{
     mostarDetallesMarca(){
        this.marca = this.$route.params.marca;
        service.mostarDetallesMarca(this.marca).then(result =>{
            this.marcas=result;
            this.status=true
    })
        }
    },
    data(){
        return{
            marcas:[],
            status:false
        }

    },
        watch:{
        '$route.params.marca'(nextVal,oldVal){
            if(nextVal !=oldVal){
                this.mostarDetallesMarca();
            }   
        }
    },
    mounted(){
        this.mostarDetallesMarca();
    }
}
</script>

<style>

</style>