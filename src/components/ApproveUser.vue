<template>
    <h1 style="text-align:center; margin-top:100px;">Unauthorized Users</h1>
    <div style="margin-top: 30px;" class="row justify-content-center align-items-center h-100">
    <div class="vue-tempalte">
 <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">    
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">

        <template v-if="users!=[]">
        <div v-for="(user, i) in users" :key="i">
          <template v-if="user">
          <user_card v-bind:user="user" style="margin-bottom:10px"/>
        </template>
        </div>
      </template>


        </div>
        </div>
        </div>
        </section>
        </div>

    </div>
    </template>
    
    <script>
    import axios from 'axios';
    import user_card from './unauthorized_user.vue';
    export default {
    
    name:'HomePage',
    data(){
      return{
        users:[],
      }
    },
    components:{
        user_card:user_card
    },
    async created() {
        // if (localStorage.getItem("token") == "") this.isAuth = false;
        // else this.isAuth = true;
        try {
          await axios
            .post("http://localhost:3000/unauthorized_users")
              //headers: { Authorization: `Bearer ${localStorage.getItem)
                
            .then((res) => {
              this.users = res.data;
              console.log(res.data)
            });
        } catch (e) {
          console.error(e);
        }
      },
    
    methods:
    {
      choose:function(i){
        this.seat = i;
      },
      book:function(){
        
      }
    },
    computed:{
      row:function(){
        return this.Rows;
      },
      column:function(){
        return this.Columns;
      },
      wid:function(){
        return (100/this.Columns)+'%';
      }
     
    }
    
    }
    </script>
    
    <style>
    
    .flex-container {
      margin:70px;
      display: flex;
      /* gap: 5px; */
      padding:10px;
      /* background-color: beige; */
      align-content: space-around;
      /* border: 3px violet solid; */
      /* grid-template-columns: repeat(--n, 1fr) */
    }
    .flex-item{
      background-color: red;
      padding: 20px;
      margin:20px;
    }
    
    </style>