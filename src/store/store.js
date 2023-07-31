// import  { createApp } from 'vue'
 import { createStore }  from "vuex";
 import axios from "axios";
// import { getField, updateField } from "vuex-map-fields";
// //import Browser from "../mocks/browser";

//  Vue.use(Vuex);

export default createStore({
    state:{
      // token:"",
      status:"",
      // guest:true,
      user: localStorage.getItem("user") || {},
      role: localStorage.getItem("role") || '',
      username: localStorage.getItem("username") || '',
      // administrator:false,
      // manager:false,
    },
    mutations:
    {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, user) {
      state.status = "success";
      state.role = user.userRole;
      state.user = user;
    },
    auth_init(state,user) {
      state.user = user;
      // state.user.username = user.username;
      // state.user.firstname = user.firstname;
      // state.user.lastname = user.lastname;
      // state.user.email = user.email;
      // state.user.password = user.password;
      // state.user.nationality = user.nationality;
      // state.user.gender = user.gender;
      // state.user.birthdate = user.birthdate;
      // state.user.userRole = user.userRole;
      console.log(state.user.userRole)
      console.log("user",state.user)
    },
    auth_error(state) {
      state.status = "error";
    },
    },
    actions:
    {
      async login({ commit }, user) {
        return new Promise((resolve, reject) => {
          
          this.commit('auth_request')
          
          axios.post("http://localhost:3000"+'/signin', {
            username: user.username,
            password: user.password,
          })
          .then((res) => {
            // const token = res.data.res.data.token;
            const user = res.data[0];
            // const blog = res.data.res.data.blog;
            console.log(res.data[0])
          
      //  localStorage.setItem("colorBody", res.data.res.data.user);
            // ------------------------ User -------------------------
            //this.commit("auth_init",user)
                 // ------------------------ blog -------------------------
            // this.commit("blog_init",blog)
            localStorage.setItem("username", user.username);
            localStorage.setItem("user", user);
            localStorage.setItem("role", user.userRole);
            // axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", user);
            resolve(res);
            //this.state.primaryBlogId="61c9d6b82569f9abb33ebe04"
            //
          })
          .catch((err) => {
            alert(err);
            commit("auth_error");
            localStorage.removeItem("user");
            localStorage.removeItem("username");
            localStorage.removeItem("role");
            reject(err);
          });
        
        });
    
      } 
    },
    getters: {
      
      isLoggedIn: (state) => state.role != 'Fan',
      authStatus: (state) => state.status,
     
    },
 })
//  const app = createApp({ /* your root component */ })
//  app.use(store)
