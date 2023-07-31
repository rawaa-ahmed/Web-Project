<template>
    <div class="vue-tempalte">
    <section class="vh-100 gradient-custom">
     <div class="container py-5 h-100">
       <div class="row justify-content-center align-items-center h-100">
         <div class="col-12 col-lg-9 col-xl-7">
           <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
             <div class="card-body p-4 p-md-5">
               <template v-if="match">
               <Card>
                
                <div class="col d-flex justify-content-center">
                
                <div class="form-outline">
                <label class="form-label" for="sid">Stadium ID </label>
                    <input type="text" id="stadid" class="form-control form-control-lg" v-model="match.stadid" />
                </div>
      
    </div>
    <br>
              <div class="row">
              
              <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" for="t1">Team1</label>
                    <input type="text" id="team1" class="form-control form-control-lg" v-model="match.team1" />
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                   <label class="form-label" >Team2</label>
                    <input type="text" id="team2" class="form-control form-control-lg" v-model="match.team2" />
                    
                  </div>

                </div>
                </div>

                <br>
              <div class="row">
              
              <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" >Line Man 1</label>
                    <input type="text" id="lineman1" class="form-control form-control-lg" v-model="match.lineman1" />
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                   <label class="form-label" >Line Man 2</label>
                    <input type="text" id="lineman2" class="form-control form-control-lg" v-model="match.lineman2" />
                    
                  </div>

                </div>
                </div>

                <br>
              <div class="row">
              
              <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" >Match Time</label>
                    <input type="datetime-local" id="matchtime" class="form-control form-control-lg" v-model="match.matchtime" />
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                   <label class="form-label" >Main Refree</label>
                    <input type="text" id="mainrefree" class="form-control form-control-lg" v-model="match.mainrefree" />
                    
                  </div>

                </div>
                </div>
                
                  <div class="mt-4 pt-2">
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
        match:{
        team1:'',
        team2:'',
        stadid:'',
        mainrefree:'',
        matchtime:'',
        lineman1:'',
        lineman2:''
        }
     }
   },
   methods:{
     //edit:function(){
        async edit(){
        try {
            await axios.post("http://localhost:3000/edit_match",{
              //username : this.username,
              matchid:this.id,
              team1:this.match.team1,
              team2:this.match.team2,
              stadid:this.match.stadid,
              mainrefree:this.mainrefree,
              matchtime:this.match.matchtime,
              lineman1:this.match.lineman1,
              lineman2:this.match.lineman2
            })
            .then((res) => {
                //this.wrongId=false
                console.log(res.data);
            });
            } catch (e) {
                console.error(e);
                //this.wrongId=true
            }
        },
     }
   ,
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