
<template>
  <div style="margin-top: 30px;" class="row justify-content-center align-items-center h-100">
    <div class="vue-tempalte">
 <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">    
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">

        <template v-if="matchesList!=[]">
        <div v-for="(match, i) in matchesList" :key="i">
          <template v-if="match">
          <match_card v-bind:match="match" style="margin-bottom:10px"/>
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
import axios from "axios"
import match_card from './Match.vue';
export default {
name:'MatchesPage',
data: function () {
    return {
      // multi: true,
      matchesList: [],
      isAuth: false,
    };
  },
  components:{
    match_card:match_card
  },
  mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
},
async created() {
    try {
      await axios
        .post("http://localhost:3000/view_matches")
        .then((res) => {
          console.log("success");
          console.log(res);
          this.matchesList = res.data;
          console.log(this.matchesList)
        });
    } catch (e) {
      console.error(e);
    }
  },

}
</script>
<style>

</style>