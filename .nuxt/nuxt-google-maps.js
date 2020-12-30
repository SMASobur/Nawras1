import Vue from 'vue';
import GMap from "C:\\Users\\Nawras\\Google Drive\\KnitNox_nawras-master\\node_modules\\nuxt-gmaps\\components\\GMap.vue";
import GMapMarker from "C:\\Users\\Nawras\\Google Drive\\KnitNox_nawras-master\\node_modules\\nuxt-gmaps\\components\\GMapMarker.vue";
import GMapCircle from "C:\\Users\\Nawras\\Google Drive\\KnitNox_nawras-master\\node_modules\\nuxt-gmaps\\components\\GMapCircle.vue";
import GMapInfoWindow from "C:\\Users\\Nawras\\Google Drive\\KnitNox_nawras-master\\node_modules\\nuxt-gmaps\\components\\GMapInfoWindow.vue";
export default(context, inject) =>{
  Vue.component('GMap', GMap);
  Vue.component('GMapMarker', GMapMarker);
  Vue.component('GMapCircle', GMapCircle);
  Vue.component('GMapInfoWindow', GMapInfoWindow);
  inject('GMaps', {apiKey: "AIzaSyA7hcdnNTKyEyxGiCtQ_FTRNU-lQktGeac", loaded: false, libraries: ["places"]})
}