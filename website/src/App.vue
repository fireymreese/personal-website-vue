<template>
  <div id="main">
    <div class="row">
      <app-header :isSelected="isSelected"
        @componentWasChanged="isSelected=$event"></app-header>
    </div>
    <div class="row justify-content-center">
      <component :is="isSelected"></component>
      <!-- <app-home></app-home> -->
    </div>
  </div>
</template>

<script>
import Home from './Home.vue';
import Experience from './Experience.vue';
import Header from './common/Header.vue';
// import { eventBus } from './main';
export default {
  components: {
      appHeader: Header,
      appHome: Home,
      appExperience: Experience,
  },
  data () {
    return {
      isSelected: 'app-home',
    }
  },
  created() {
    // console.log(eventBus.$data.isSelected);
  },
}
</script>

<style>
#main {
  height: 100vh;
  overflow: hidden;
  background-image: 
  url("./assets/wenshu_monastery.jpg");
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
