<template>
  <div class="vue-tempalte">
 <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Add Match</h3>
            <form @submit.prevent="handleSumbit">
              <div class="col d-flex justify-content-center">
                
                <div class="form-outline">
                <label class="form-label" for="sid">Stadium ID </label>
                    <!-- <input type="text" id="stadid" class="form-control form-control-lg" v-model="stadiumid" /> -->
                    <select v-model="stadname" class="form-control form-control-lg" name="sname" >
                      <template v-for="(stad, i) in stads" :key="i">
                      <option v-bind:value="stad.stadiumname">{{stad.stadiumname}}</option>
                    </template>
                    </select>
                </div> 
    </div>
    <br>
              <div class="row">
              
              <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" for="t1">Team1</label>
                    <input type="text" id="team1" class="form-control form-control-lg" v-model="team1" />
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                   <label class="form-label" >Team2</label>
                    <input type="text" id="team2" class="form-control form-control-lg" v-model="team2" />
                    
                  </div>

                </div>
                </div>

                <br>
              <div class="row">
              
              <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" >Line Man 1</label>
                    <input type="text" id="lineman1" class="form-control form-control-lg" v-model="lineman1" />
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                   <label class="form-label" >Line Man 2</label>
                    <input type="text" id="lineman2" class="form-control form-control-lg" v-model="lineman2" />
                    
                  </div>

                </div>
                </div>

                <br>
              <div class="row">
              
              <div class="col-md-6 mb-4">

                  <div class="form-outline">
                  <label class="form-label" >Match Time</label>
                    <input type="datetime-local" id="matchtime" class="form-control form-control-lg" v-model="matchtime" />
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                   <label class="form-label" >Main Refree</label>
                    <input type="text" id="mainrefree" class="form-control form-control-lg" v-model="mainrefree" />
                    
                  </div>

                </div>
                </div>

                 <div class="row mb-4">
    

  </div>

              <div class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" type="button" @click="add" value="ADD" />
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
     team1:'',
     team2:'',
     stadiumid:'',
     mainrefree:'',
     matchtime:'',
     lineman1:'',
     lineman2:'',
     stadiumid:'',
     stads:[],
     stadname:''
   }
 },
 async created() {
        try {
          await axios
            .post("http://localhost:3000/stadiums")
            .then((res) => {
              this.stads = res.data;
              console.log("successful")
            });
        } catch (e) {
          console.error(e);
        }
      },
 methods:
 {
  async add(){
    this.stadiumid = this.getid(this.stadname);
         try {
             await axios.post("http://localhost:3000/new_match" , { 
              team1:this.team1,
              team2:this.team2,
              stadiumid:this.stadiumid,
              mainrefree:this.mainrefree,
              matchtime:this.matchtime,
              lineman1:this.lineman1,
              lineman2:this.lineman2,
            })
             .then((res) => {
                //  this.stadid = res.data[0]
                 console.log(res);
             });
             } catch (e) {
                 console.error(e);
             }
         },
         getid:function(name)
         {
          console.log(name);
          for (var i=0; i<this.stads.length; i++)
          {
            console.log(this.stads[i].stadiumname);
            if(name == this.stads[i].stadiumname)
            {
              return this.stads[i].id;
            }
          }
          return '';

        }
 }
 }
 </script>
 
 <style>
 
 </style>