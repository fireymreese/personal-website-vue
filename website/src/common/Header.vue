<template>
    <div class="col nav_bar justify-content-center"
       :class="[isSelected == 'app-home' ? homeHeaderColor : otherHeaderColor]">
      <ul class="my-auto">
        <li @click="switchComponent('app-home')">Home</li>
        <li  @click="switchComponent('app-experience')">Experience</li>
        <li>Projects</li>
        <li><a>Passions</a></li>
        <li @click="switchComponent('app-about')">About</li>
      </ul>
    </div>
</template>

<script>
export default {
    props: ['isSelected'],
    data() {
        return {
            homeHeaderColor: 'home-header-color',
            otherHeaderColor: 'header-color',
        }
    },
    methods: {
        switchComponent(component) {
            this.isSelected = component;
            this.$emit('componentWasChanged', this.isSelected);
        }
    },
    created() {
        console.log(this.isSelected);
    },
}
</script>

<style scoped>

  .nav_bar {
      text-align: center;
  }

  .home-header-color {
      background-color: transparent;
  }

  .header-color {
      background-color: black;
  }

  .nav_bar ul {
    padding-inline-start: 0px 
  }

  .nav_bar li {
    padding: 0 25px; 
    font-size: 14pt;
    text-shadow: 2px 2px 4px #000000;;
    font-family: Poppins, sans-serif;
    display: inline;
    color: #ffffff;
  }
  
  .nav_bar a {
    text-decoration: none;
    color: #ffffff;
  }
</style>