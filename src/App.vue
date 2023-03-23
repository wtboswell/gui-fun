<template>
  <div id="app">
    My tasks
    <SocketClient />
  </div>
</template>

<script>
import SocketClient from './components/SocketClient.vue';

export default {
  name: 'App',
  components: {
    SocketClient,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
