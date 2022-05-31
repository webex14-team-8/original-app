import { createApp } from "vue"
import App from "./App.vue"
import "./firebase.js"
import router from "./router"

<<<<<<< HEAD
createApp(App).mount("#app")
=======
createApp(App).use(router).mount("#app")
>>>>>>> origin/master
