import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import DetalleMarca from './components/DetalleMarca.vue'
import DetallesCubo from './components/DetallesCubo.vue'
import LoginComponent from './components/LoginComponent.vue'
import PerfilUsuario from './components/PerfilUsuario.vue'
import ComprasComponent from './components/ComprasComponent.vue'

const misRutas=[
    {
        path:"/",component:HomeComponent
    },
    {
        path:"/detalles/:marca",component:DetalleMarca
    },
    {
        path:"/detallesC/:id",component:DetallesCubo
    },
    {
        path:"/login/",component:LoginComponent
    },
    {
        path:"/perfil/",component:PerfilUsuario
    },
    {
        path:"/compras/",component:ComprasComponent
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes:misRutas
})

export default router