import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './routes';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

library.add(fab.faGit, fab.faFacebook, fab.faTwitter, fas.faWifi);

app.use(router).mount('#app');