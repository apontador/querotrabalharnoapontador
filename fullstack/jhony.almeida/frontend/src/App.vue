<template>
  <v-app>
    <application-bar />
    <v-content class="app-background">
      <transition>
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import ApplicationBar from "@/components/ApplicationBar"

export default {
  components: {
    ApplicationBar
  }
}
</script>

<style scoped>
  .app-background {
    background-color: #f3f3f3;
  }
</style>