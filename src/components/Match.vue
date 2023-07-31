
<template>
    
<div class="card" style="width: 17rem;">
  <div class="container">
  <div class="card-body">
    <template v-if="match">
    <h5 class="card-title">{{match.team1}} <label style="color:red ">VS</label> {{ match.team2 }} </h5>
    </template>
    <div class="col-md-6 mb-4">

<div class="form-outline">

    <font-awesome-icon   icon="fa-solid fa-calendar-day"/> 
</div>

</div>
<div class="col-md-6 mb-4">

<div class="form-outline">
  <template v-if="match">
    <font-awesome-icon icon="fa-solid fa-clock-four" /> {{ match.matchtime }}
  </template>
</div>

</div>
    <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  
                    <button @click="matchdetail" type="button" class="btn btn-primary"> Details</button>
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                   
                    <button v-if="userRole != 'Guest'" @click="book" type="button" class="btn btn-success">Booking</button>
                    
                  </div>

                </div>
                
                </div>

  </div>
  </div>
</div>
</template>

<script>

export default {

name:'MatchCard',
props:{
      match:Object
  },
  computed:
    {
        userRole(){
        console.log(localStorage.getItem("role"))
        return localStorage.getItem("role");
      }
    },
methods:
{
  matchdetail(){
    this.$router.push('/match/' + this.match.id)
  },
  book(){
    this.$router.push('/Book/'+this.match.id)
    },
  }
}
</script>

<style>

</style>