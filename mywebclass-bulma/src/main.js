//Import the createApp function from the Vue library
import { createApp } from 'vue'
//Import the App component from the ./App.vue file:
import App from './App.vue'

//Import the main.css file from the ./assets folder:
import './assets/bulma.scss';
import './assets/custom.scss';
//import './assets/main.css'

//Create a new Vue app instance using the imported App component and 
//mount it to the HTML element with the ID app:
createApp(App).mount('#app')
