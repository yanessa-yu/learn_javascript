import * as singleSpa from 'single-spa';

const name = 'app1';

const app = () => import('./app1/app1.js')

const activeWhen = '/app1';
singleSpa.registerApplication({ name, app, activeWhen });
singleSpa.start();