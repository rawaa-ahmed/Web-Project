<template>
 <div class="vue-tempalte">
 <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <template v-if="match">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">{{match.team1}} <label style="color:red ">VS</label> {{match.team2}}</h3>
            <Card>
               <font-awesome-icon icon="fa-solid fa-map" />
                <span class="fs-5" >  Venue: {{ match.stadiumid }}</span><br/>
                <font-awesome-icon icon="fa-solid fa-calendar-day" /> 
                <span class="fs-5" >  Date:  {{ match.matchtime }}</span><br/>
               <font-awesome-icon icon="fa-solid fa-user-clock" />
               <span class="fs-5"> Main Referee: {{ match.mainrefree }}</span><br/>
               <font-awesome-icon icon="fa-solid fa-user" />
               <span class="fs-5">  Line Man 1:  {{ match.lineman1 }} </span><br/>
               <font-awesome-icon icon="fa-solid fa-user" />
               <span class="fs-5">  Line Man 2:  {{ match.lineman2 }}</span> <br/>
            
               <div v-if="userRole == 'Manager'" class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" @click="edit" type="button" value="Edit" />
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
    name:'MatchDetails',
    data()
{
    return{
    id:this.$route.params.id,
    match:{}
  }
},
computed:{
  userRole(){
        console.log(localStorage.getItem("role"))
        return localStorage.getItem("role");
      }
},
methods:{
  edit:function(){
    this.$router.push('/edit_match/' + this.id)
  }
},
async created(){
        try {
            await axios.post("http://localhost:3000/match" , { matchid: this.id})
            .then((res) => {
                this.match = res.data[0]
                //this.wrongId=false
                console.log(res.data);
            });
            } catch (e) {
                console.error(e);
                //this.wrongId=true
            }
        },
}
</script>

<style>

</style>