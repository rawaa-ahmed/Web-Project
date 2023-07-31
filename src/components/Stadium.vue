<template>
    <div class="vue-tempalte">
   <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Add Stadium</h3>
              <form @submit.prevent="handleSumbit">
                <div class="col d-flex justify-content-center">
                  
                  <div class="form-outline">
                  <label class="form-label" for="firstName">Name</label>
                      <input type="text" id="NAme" class="form-control form-control-lg" v-model="Name" />
                  </div>
        
      </div>
      <br>
                <div class="row">
                
                <div class="col-md-6 mb-4">
  
                    <div class="form-outline">
                    <label class="form-label" for="firstName">Rows</label>
                      <input type="text" id="Rows" class="form-control form-control-lg" v-model="Rows" />
                      
                    </div>
  
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
  
                    <div class="form-outline">
                     <label class="form-label" >Columns</label>
                      <input type="text" id="Columns" class="form-control form-control-lg" v-model="Columns" />
                      
                    </div>
  
                  </div>
                  </div>
                   <div class="row mb-4">
      
  
    </div>
  
                <div class="mt-4 pt-2">
                  <input class="btn btn-primary btn-lg" @click="add" type="submit" value="ADD" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    </div>
   </template>
   <script>
   import axios from 'axios';
   export default {
       name:'MatchDetails',
       data()
   {
       return{
       Rows:'',
       Columns:'',
       Name:'',
     }
   },
   methods:{
    async add(){
           try {
               await axios.post("http://localhost:3000/new_stadium" , { 
                stadiumname:this.Name,
                width: this.Rows,
                length:this.Columns
               })
               .then((res) => {
                  //  this.match = res.data
                   //this.wrongId=false
                   console.log(res.data);
               });
               } catch (e) {
                   console.error(e);
                   //this.wrongId=true
               }
           },
   }
   
   }
   </script>
   
   <style>
   
   </style>