<template>
  <div id="page-container">
    <TopBar />
    <FormCard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FormCard from './components/FormCard.vue';
import TopBar from './components/TopBar.vue';

@Options({
  components: {
    FormCard,
    TopBar
  },
})
export default class App extends Vue { }
</script>

<style lang="scss">
@import "./assets/fonts/Montserrat/index.scss";

html,
body {
  margin: 0;
}

#app {
  font-family: 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, "SF UI Text", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  height: 100vh;
  max-height: 100vh;
  
  background: #FFF;
  font-size: 16px;

  * {
    box-sizing: border-box;
  }
}

#page-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 58px 50px;  
}

</style>
