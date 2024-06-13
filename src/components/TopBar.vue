<template>
  <div id="topbar-container">
    <h1 class="company-title">Жилфонд</h1>
    <span class="username">Пользователь</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style scoped lang="scss">
  #topbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .company-title {
      font-size: 2rem;
      font-weight: 700;
      color: #E31F24;
    }

    .username {
      font-size: 1rem;
      font-weight: 400;
      line-height: 19px;
    }
  }
</style>