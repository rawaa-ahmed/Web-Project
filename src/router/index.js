import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../components/Login.vue'
import SignUp from '../components/Singup.vue'
// import MatchesPage from '../components/Matches.vue'
import MatchDetails from '../components/MatchDetails.vue'
import HomePage from '../components/HomePage.vue'
import Booking from '../components/Booking.vue'
import authorizing from '../components/ApproveUser.vue'
import newStad from '../components/Stadium.vue'
import newMatch from '../components/AddMatch.vue'
import DeleteUser from '../components/getUsers.vue'
import EditProfile from '../components/ProfileEdit.vue'
import EditMatch from '../components/EditMatch.vue'
const routes =[
    {
        path: '/',
        name: 'HomePage',
        component:HomePage
      },
    // {
    //     path: '/view_matches',
    //     name: 'MatchesPage',
    //     component:MatchesPage
    //   },
    {
        path: '/signup',
        name: 'SignUp',
        component:SignUp
      },
    {
        path: '/login',
        name: 'LogIn',
        component:LogIn
      },
    {
      path: '/match/:id',
      name: 'MatchDetails',
      component:MatchDetails
    },
    {
      path: '/book/:id',
      name: 'Booking',
      component:Booking
    },
    {
      path:'/authorize',
      name: 'authorize',
      component:authorizing
    },
    {
      path:'/new_match',
      name: 'new_match',
      component:newMatch
    },
    {
      path:'/new_stadium',
      name: 'new_stadium',
      component:newStad
    },
    {
      path:'/delete_User',
      name: 'delete_User',
      component:DeleteUser
    },
    {
      path:'/edit_profile',
      name: 'edit_profile',
      component:EditProfile
    },
    {
      path:'/edit_match/:id',
      name: 'edit_match',
      component:EditMatch
    }
  ]


  const router = createRouter({

routes:routes,
history:createWebHistory()

  })
  export default router
  
  