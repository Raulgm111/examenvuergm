<template>
    <div>
        <form method="post" class="custom-form" v-on:submit.prevent="login()">
            <h1>Login</h1>
            <label>Introduce el email:</label>
            <input class="form-control" type="text" v-model="email" placeholder="User Name" required/>
            <label>Introduce la contraseña:</label>
            <input class="form-control" type="password" v-model="password" placeholder="Password" required/>
            <button class="btn btn-info">Log in</button>
        </form>
  </div>
</template>

<script>
import CuboService from './../services/CuboService'
const service = new CuboService();
export default {
    name:"LoginComponent",
    data(){
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login() {

            var user = {
                email: this.email,
                password: this.password
            }

            console.log(user);

            service.login(user).then(result => {
                localStorage.setItem("token", result.data.response);
                console.log(localStorage.getItem("token"));
                this.$router.push("/perfil");
            });
        }
    }
}
</script>

<style>

</style>