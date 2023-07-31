import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js'
import router from './router/index'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faUser, faClockFour, faCalendarDay, faMap, faUserClock, faHome, faFutbol, faUserPlus, faLock ,} from '@fortawesome/free-solid-svg-icons'
const app=createApp(App)
app.use(router).use(store)
/* add icons to the library */
library.add(faUserSecret,faUser,faClockFour,faCalendarDay,faMap,faUserClock,faUser,faHome,faFutbol,faUserPlus,faLock)
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')


