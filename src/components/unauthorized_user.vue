<template>
  <div class="vue-tempalte">
 <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
              <template v-if="user">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5"> {{ user.username }}</h3>
            <Card>
                <label class="fs-5" >First Name:  {{user.firstname}}</label><br/>
                <label class="fs-5" >Last Name:  {{user.lastname}}</label><br/>

               <label class="fs-5">Email:  {{ user.email }}</label><br/>
               <label class="fs-5">role:  {{ user.userRole }}</label><br/>
               <!-- <label class="fs-5">Birth Date : </label><br/>
               <label class="fs-5"> Gender: </label><br/> -->
                
                <div class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" type="button" @click="approve" value="approve" >
              </div> 
                
            
            </Card>
          </template>
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
name:'ProfileDetails',
props:{
  user:Object
},

methods:
{
  async approve(){
      try {
          await axios.post("http://localhost:3000/authorize" , { username: this.user.username})
          .then((res) => {
              //this.wrongId=false
              console.log(res.data);
              location.reload();

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