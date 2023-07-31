  <template>
    <h1 style="text-align:center; margin-top:100px;">{{Sname}}</h1>
    <input v-model="seat" type="text">
    <button v-if="book" @click="Book">Book</button>
    <button v-if="cancel" @click="Cancel">Cancel</button>
    <!-- <div class="card shadow-2-strong card-registration" style="border-radius: 15px;"> -->
    <div class="flex-container" >
    
      <!-- <div v-for=" i in 100" :key="i">
        <div v-bind:id="i" @click="choose(i)" class="grid-item">{{i}}</div>
      </div> -->  
    
      <div v-for=" i in parseInt(this.Columns)" :key="i">
        <div v-for=" j in parseInt(this.Rows)" :key="j">
          <div v-if="coloring(Columns*(j-1)+i) == 1" v-bind:id="i" class="flex-item">{{Columns*(j-1)+i}}</div>    
          <div v-if="coloring(Columns*(j-1)+i) == 0" style="background-color:forestgreen; cursor: pointer" v-bind:id="i" @click="choose(Columns*(j-1)+i)" class="flex-item">{{Columns*(j-1)+i}}</div>            
          <div v-if="coloring(Columns*(j-1)+i) == 2" style="background-color:lightblue; cursor: pointer" v-bind:id="i" @click="choose(Columns*(j-1)+i)" class="flex-item">{{Columns*(j-1)+i}}</div>            
        </div>
      </div>
    
    </div>
    <!-- </div> -->
    </template>
    
    <script>
    import axios from 'axios';
    export default {
    
    name:'HomePage',
    data(){
      return{
        // column:4,
        id:this.$route.params.id,
        seats:[],
        seat:'',
        Sname:'',
        Rows:5,
        Columns:10,
        stadid:'',
        myseats:[],
        cancel:false,
        book:false,
        //ticket:''
      }
    },
    async created(){
      try {
              await axios.post("http://localhost:3000/match" , { matchid: this.id})
              .then((res) => {
                  this.stadid = res.data[0].stadiumid;
                  //this.wrongId=false
                  console.log(res.data);
                  this.stad();
              });
              } catch (e) {
                  console.error(e);
                  //this.wrongId=true
              }
          },
    methods:
    {
      coloring:function(x){
        for (var i=0; i<this.myseats.length;i++)
        {
          if(this.myseats[i].seat == x){
            return 2;
          }
        }
        for (var i=0; i<this.seats.length;i++)
        {
          if(this.seats[i].seat == x){
            return 1;
          }
        }
        return 0;
      }
      ,
      choose:function(i){
        this.seat = i;
        if(this.coloring(i) == 0)
        {
          this.cancel = false;
          this.book = true;
        }
        else if(this.coloring(i) == 1)
        {
          this.cancel = false;
          this.book = false;
        }
        else{
          this.cancel = true;
          this.book = false;
        }
      },
      async Book(){
        var c=prompt("enter your credit card number:")
        while(c == '')
          var c=prompt("enter your credit card number:")
        var p=prompt("enter your pin number:")
        while(p == '')
          var p=prompt("enter your pin number:")
        
        try {
          await axios
            .post("http://localhost:3000/reserve", {
              matchid:this.id,
              username:this.userName,
              seat:this.seat
            })
            .then((res) => {
              location.reload();
              alert("your ticket number is"+this.id+res.data.insertId+this.seat)
              //this.ticket=res.data[0];
              console.log(res);
            });
        } catch (e) {
          console.error(e);
        }
      },
      async Cancel(){
        try {
          await axios
            .post("http://localhost:3000/cancel_reservation", {
              matchid:this.id,
              username:userName,
              seat:this.seat
            })
            .then((res) => {
              location.reload();
              console.log(res);
            });
        } catch (e) {
          console.error(e);
        }
      },
      
      async stad() {
        //if (localStorage.getItem("token") == "") this.isAuth = false;
        //else this.isAuth = true;
        try {
          await axios
            .post("http://localhost:3000/stadium", {
              stadiumid:this.stadid
            })
            .then((res) => {
              this.Sname = res.data[0].stadiumname;
              this.Rows = res.data[0].width;
              this.Columns = res.data[0].length;
              this.seatcolor();
            });
        } catch (e) {
          console.error(e);
        }

      },
      async seatcolor(){
        try {
          await axios
            .post("http://localhost:3000/match_seats", {
              matchid:this.id
            })
            .then((res) => {
              this.seats = res.data;
              this.mySeats();
              // this.coloring();
            });
        } catch (e) {
          console.error(e);
        }
      },
      async mySeats(){
        try {
          await axios
            .post("http://localhost:3000/reservation", {
              matchid:this.id,
              username : this.userName,
            })
            .then((res) => {
              this.myseats = res.data;
              // this.coloring();
            });
        } catch (e) {
          console.error(e);
        }
      }
      
    },
    computed:{
      userName(){
        console.log(localStorage.getItem("username"))
        return localStorage.getItem("username");
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