<template>
 
<nav class="navbar fixed-top navbar-expand-sm navbar-dark" style="background-color:green" >
    <div class="container">
<a  href='#' class="navbar-brand mb-0 h1"><img class="d-inline-block align-top" src="../assets/logo.png" width="45" height="40"/> <span style="font-size: 1.5em;">tzkrtie</span></a>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav ms-auto">
    <li class="nav-item active"> <router-link to="/" class="nav-link active"> <font-awesome-icon icon="fa-solid fa-home" /> Home</router-link></li>
    <!-- <li class="nav-item active"> <router-link to="/view_matches" class="nav-link active"><font-awesome-icon icon="fa-solid fa-futbol" /> Matches</router-link></li> -->
    <li v-if="userRole == 'Guest'" class="nav-item active"> <router-link to="/login" class="nav-link active"><font-awesome-icon icon="fa-solid fa-lock" /> Sign in</router-link></li>
    <li @click="signout" v-else style="cursor:pointer" class="nav-item nav-link active"><font-awesome-icon icon="fa-solid fa-lock" /> Sign out</li>
    <li v-if="userRole == 'Guest'" class="nav-item active"> <router-link to="/signup" class="nav-link active"> <font-awesome-icon icon="fa-solid fa-user-plus" /> Register</router-link></li>
    <li v-if="userRole == 'Admin'" class="nav-item active"> <router-link to="/authorize" class="nav-link active"> <font-awesome-icon icon="fa-solid fa-user-plus" /> Authorize</router-link></li>
    <li v-if="userRole == 'Manager'" class="nav-item active"> <router-link to="/new_match" class="nav-link active"> <font-awesome-icon icon="fa-solid fa-futbol" /> New Match</router-link></li>
    <li v-if="userRole == 'Manager'" class="nav-item active"> <router-link to="/new_stadium" class="nav-link active"> <font-awesome-icon icon="fa-solid fa-user-plus" /> New Stadium</router-link></li>
    <li v-if="userRole == 'Admin'" class="nav-item active"> <router-link to="/delete_User" class="nav-link active"> <font-awesome-icon icon="fa-solid fa-user-plus" /> Delete User</router-link></li>
    <li v-if="userRole != 'Guest'" class="nav-item active"> <router-link to="/edit_profile" class="nav-link active"> <font-awesome-icon icon="fa-solid fa-user-plus" /> Edit Profile</router-link></li>
</ul>

</div>
</div>
</nav>
 
</template>

<script>
export default {
    name:"NavBar",
    computed:
    {
        userRole(){
        console.log(localStorage.getItem("role"));
        this.checkRole();
        return localStorage.getItem("role");
      }
    },
    methods:
    {
        checkRole:function(){
            console.log(this.userRole);
            console.log(this.userRole == 'Guest');

        },
        signout:function(){
            location.reload();
            localStorage.setItem("role","Guest");
            localStorage.removeItem("username");
            this.$router.push('/');
           
        }
    }
}
 
</script>

<style >

</style>