<template>
  <div>
    <table class="table table-info">
    <thead>
        <tr>
            <th>Idcubo</th>
            <th>nombre</th>
            <th>modelo</th>
            <th>marca</th>
            <th>color</th>
            <th>imagen</th>
            <th>precio</th>
            <th>valoracion</th>
            <th>Compras</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="cub in cubos" :key="cub.idCubo">
            <td>{{cub.idCubo}}</td>
            <td>{{cub.nombre}}</td>
            <td>{{cub.modelo}}</td>
            <td>{{cub.marca}}</td>
            <td>{{cub.color}}</td>
            <td><img :src="cub.imagen" style="width:100px"/></td>
            <td>{{cub.precio}}</td>
            <td>{{cub.valoracion}}</td>
            <td>
                 <button class="btn btn-success">
                    Hacer pedido
                 </button>
            </td>
        </tr>
    </tbody>
</table>
  </div>
</template>

<script>
import CuboService from './../services/CuboService'
const service = new CuboService();
export default {
    name:"HomeComponent",
        methods:{
        mostarCubos(){
            service.mostarCubos().then(result =>{
                this.cubos=result;
                this.status=true
            })
        },
                hacerPedido(){
        this.id = this.$route.params.id;
        service.hacerCompra(this.id).then(result =>{
            this.pedido=result;
            this.status=true
        })
        },
    },
    data(){
        return{
            cubos:[],
            status:false
        }
    },
    mounted(){
        this.mostarCubos()
    }
}
</script>

<style>

</style>