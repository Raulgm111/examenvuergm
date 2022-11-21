<template>
<h1>Ver compras</h1>
<table class="table table-success">
    <thead>
        <tr>
            <th>idPedido</th>
            <th>idUsuario</th>
            <th>fechaPedido</th>
        </tr>
    </thead>
    <tbody>
        <tr  v-for="com in compras" :key="com.idPedido">
            <td>{{com.idPedido}}</td>
            <td>{{com.idUsuario}}</td>
            <td>{{com.fechaPedido}}</td>
        </tr>
    </tbody>
</table>
</template>

<script>
import CuboService from './../services/CuboService'
const service = new CuboService();
export default {
    name:"ComprasComponent",
        data(){
        return {
            compras: []
        }
    },
    methods: {
        mostarCompras(){
            service.getCompras().then(result => {
                console.log(result);
                this.compras = result;
            });
        }
    },
    mounted(){
        this.mostarCompras();
    }
}
</script>

<style>

</style>