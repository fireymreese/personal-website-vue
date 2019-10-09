<template>
  <div id="main" :class="{'on-home-component':  this.isSelected == 'app-home'}">
    <div class="row" id="main-header">
      <app-header :isSelected="isSelected"
        @componentWasChanged="isSelected=$event"></app-header>
    </div>
    <div class="row justify-content-center" id="main-component">
      <component :is="isSelected"></component>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue';
import Experience from './Experience.vue';
import Header from './common/Header.vue';
import About from './About.vue';
export default {
  components: {
      appHeader: Header,
      appHome: Home,
      appExperience: Experience,
      appAbout: About,
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
  background-repeat: no-repeat;
  background-size: cover;
}

.on-home-component {
  background-image: 
  url("./assets/wenshu_monastery.jpg");
  filter: grayscale(100%);
}

#main-component {
  height: 100%;
}

#main-header {
  height: 10%;
}
</style>
